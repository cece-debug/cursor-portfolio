import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <nav className="border-b p-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-4">{children}</main>
      <footer className="border-t p-4 text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} My App
      </footer>
    </div>
  );
}