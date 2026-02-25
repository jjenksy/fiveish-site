import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-bg-surface py-8 text-center text-text-dim text-sm">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} 5ISH</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-text-main transition-colors">
            Privacy Policy
          </Link>
          <Link href="/support" className="hover:text-text-main transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
