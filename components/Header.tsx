import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-deep/90 backdrop-blur border-b border-bg-surface">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-pixel text-gold text-lg tracking-wider">
          5ISH
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/press" className="text-text-dim hover:text-text-main transition-colors">
            Press
          </Link>
          <Link href="/support" className="text-text-dim hover:text-text-main transition-colors">
            Support
          </Link>
          <a
            href="https://apps.apple.com/us/app/fiveish/id6759258843"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
