import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center flex-1 px-6 py-16">
      <h1 className="text-2xl font-normal mb-4">Grimoire Documentation</h1>
      <p>
        Browse the{' '}
        <Link href="/docs/" className="underline text-[#95d9fa]">
          Grimoire documentation
        </Link>
        .
      </p>
    </main>
  );
}
