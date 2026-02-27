import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-bg-surface py-8 text-center text-text-dim text-sm">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
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
        <p className="text-text-dim/50 text-xs max-w-lg">
          Apple, the Apple logo, iPhone, and App Store are trademarks of Apple Inc., registered in the U.S. and other countries.
        </p>
      </div>
    </footer>
  );
}
