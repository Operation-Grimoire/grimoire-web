import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, '../public');
const SRC = 'C:/Users/Rambe/AndroidStudioProjects/Grimoire/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png';
const NAVY = { r: 0x0b, g: 0x0d, b: 0x1c, alpha: 1 };

// Build a square icon of `size` px: navy field with the (trimmed) ghost+book art
// centered, occupying ~`fill` of the frame.
async function icon(size, { fill = 0.8, radius = null, bg = NAVY } = {}) {
  const art = await sharp(SRC).trim({ threshold: 10 }).toBuffer();
  const box = Math.round(size * fill);
  const resized = await sharp(art)
    .resize(box, box, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  let base = sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  }).composite([{ input: resized, gravity: 'center' }]);

  let png = await base.png().toBuffer();

  if (radius != null) {
    const r = Math.round(size * radius);
    const mask = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}"/></svg>`
    );
    png = await sharp(png)
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toBuffer();
  }
  return png;
}

// Minimal ICO encoder embedding PNG-compressed images.
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  const blobs = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8); // size of data
    e.writeUInt32LE(offset, 12); // offset
    offset += data.length;
    entries.push(e);
    blobs.push(data);
  }
  return Buffer.concat([header, ...entries, ...blobs]);
}

const out = (name, buf) => {
  writeFileSync(resolve(pub, name), buf);
  console.log('wrote', name, buf.length);
};

// PNG favicons (square navy, no rounding — browser/tab favicons)
out('favicon-16x16.png', await icon(16, { fill: 0.86 }));
out('favicon-32x32.png', await icon(32, { fill: 0.82 }));
const f48 = await icon(48, { fill: 0.82 });

// Apple touch icon — iOS rounds it; full-bleed navy field, art ~72%
out('apple-touch-icon.png', await icon(180, { fill: 0.72 }));

// PWA / OG icons
out('icon-192.png', await icon(192, { fill: 0.78 }));
out('icon-512.png', await icon(512, { fill: 0.78 }));

// Multi-resolution ICO
out(
  'favicon.ico',
  buildIco([
    { size: 16, data: await icon(16, { fill: 0.86 }) },
    { size: 32, data: await icon(32, { fill: 0.82 }) },
    { size: 48, data: f48 },
  ])
);

// Scalable SVG favicon: navy rounded square + embedded art (PNG data URI).
const artBuf = await sharp(SRC).trim({ threshold: 10 }).resize(320, 320, {
  fit: 'contain',
  background: { r: 0, g: 0, b: 0, alpha: 0 },
}).png({ compressionLevel: 9, palette: true }).toBuffer();
const dataUri = 'data:image/png;base64,' + artBuf.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <rect width="1024" height="1024" rx="205" ry="205" fill="#0b0d1c"/>
  <image x="102" y="102" width="820" height="820" image-rendering="optimizeQuality" href="${dataUri}"/>
</svg>
`;
out('favicon.svg', Buffer.from(svg));
console.log('done');
