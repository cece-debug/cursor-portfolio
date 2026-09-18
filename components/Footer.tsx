export default function Footer() {
  return (
    <footer className="border-t p-4 text-sm text-zinc-500">
      &copy; {new Date().getFullYear()} My App
    </footer>
  );
}