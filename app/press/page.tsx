import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Press Kit — 5ISH",
  description: "Screenshots, app icon, and game information for press coverage.",
};

const screenshots = [
  "01_MainMenu.png",
  "02_PrizeMachine.png",
  "03_Buzzy.png",
  "04_Coco.png",
  "05_Nova.png",
  "06_Catarina.png",
  "07_Stevie.png",
  "08_Diggy.png",
  "09_Brainy.png",
  "10_Derby.png",
  "11_Monky.png",
  "12_Abuela.png",
  "13_Clawz.png",
  "14_Zed.png",
];

const info = [
  ["Name", "5ISH"],
  ["Platform", "iPhone"],
  ["Price", "$0.99"],
  ["Genre", "Arcade / Minigame Collection"],
  ["Engine", "SpriteKit (native Swift)"],
  ["Age Rating", "4+"],
];

export default function PressKit() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-pixel text-gold text-xl mb-8">Press Kit</h1>

      {/* Game Info */}
      <section className="mb-12">
        <h2 className="font-pixel text-cyan text-xs mb-4">Game Info</h2>
        <div className="bg-bg-surface rounded-xl p-4 border border-bg-card">
          <table className="w-full text-sm">
            <tbody>
              {info.map(([label, value]) => (
                <tr key={label} className="border-b border-bg-card last:border-0">
                  <td className="py-2 pr-4 text-text-dim font-medium">{label}</td>
                  <td className="py-2 text-text-main">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Description */}
      <section className="mb-12">
        <h2 className="font-pixel text-cyan text-xs mb-4">Description</h2>
        <div className="bg-bg-surface rounded-xl p-6 border border-bg-card text-text-dim text-sm leading-relaxed space-y-3">
          <p>
            5ISH is a collection of 12 retro pixel art minigames, each with
            unique mechanics controlled by just two buttons. From dodging
            patterns as a bee to defending against zombies, every minigame
            offers a fresh arcade challenge.
          </p>
          <p>
            Built natively with SpriteKit, 5ISH features handcrafted pixel art,
            chiptune music, unlockable characters and skins, and a marble-drop
            prize machine. No ads, no tracking, no data collection.
          </p>
        </div>
      </section>

      {/* App Icon */}
      <section className="mb-12">
        <h2 className="font-pixel text-cyan text-xs mb-4">App Icon</h2>
        <div className="flex items-center gap-4">
          <div className="relative w-28 h-28 rounded-[22px] overflow-hidden border-2 border-bg-card">
            <Image
              src="/app-icon.png"
              alt="5ISH app icon"
              fill
              className="object-cover"
            />
          </div>
          <a
            href="/app-icon.png"
            download="5ISH-AppIcon.png"
            className="text-cyan text-sm hover:underline"
          >
            Download icon (PNG)
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-12">
        <h2 className="font-pixel text-cyan text-xs mb-4">Screenshots</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {screenshots.map((file) => (
            <a
              key={file}
              href={`/screenshots/${file}`}
              download={`5ISH-${file}`}
              className="group relative aspect-[9/19.5] rounded-lg overflow-hidden border border-bg-card hover:border-cyan transition-colors"
            >
              <Image
                src={`/screenshots/${file}`}
                alt={file.replace(/^\d+_/, "").replace(".png", "")}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
              />
              <div className="absolute inset-0 bg-bg-deep/0 group-hover:bg-bg-deep/40 transition-colors flex items-center justify-center">
                <span className="text-text-main text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Download
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-pixel text-cyan text-xs mb-4">Press Contact</h2>
        <p className="text-text-dim text-sm">
          For press inquiries, please email{" "}
          <a
            href="mailto:press@fiveish.app"
            className="text-cyan hover:underline"
          >
            press@fiveish.app
          </a>
        </p>
      </section>
    </div>
  );
}
