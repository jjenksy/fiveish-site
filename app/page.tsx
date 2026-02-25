import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { FeatureCard } from "@/components/FeatureCard";
import { CharacterCard } from "@/components/CharacterCard";
import { characters } from "@/lib/characters";

const features = [
  {
    icon: "🎮",
    title: "12 Minigames",
    description:
      "From bee dodging to zombie defense, each minigame has unique mechanics and challenges.",
  },
  {
    icon: "🕹️",
    title: "2-Button Controls",
    description:
      "Simple left/right controls with hold-to-charge actions. Easy to learn, hard to master.",
  },
  {
    icon: "🚫",
    title: "No Ads, No Tracking",
    description:
      "Zero ads, zero analytics, zero data collection. Just a game that respects your privacy.",
  },
  {
    icon: "👾",
    title: "Pixel Art",
    description:
      "Handcrafted retro pixel art with chiptune music. A love letter to classic arcade games.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h1 className="font-pixel text-gold text-4xl sm:text-5xl mb-4">
          5ISH
        </h1>
        <p className="text-text-dim text-lg max-w-md mx-auto mb-8">
          12 retro pixel art minigames. Two buttons. Zero ads.
        </p>
        <a
          href="https://apps.apple.com/app/fiveish"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-bg-deep font-bold px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
        >
          Download on the App Store
        </a>
      </section>

      {/* Screenshots */}
      <section>
        <h2 className="font-pixel text-cyan text-sm text-center mb-2">
          Gameplay
        </h2>
        <ScreenshotCarousel />
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-pixel text-cyan text-sm text-center mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Characters */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-pixel text-cyan text-sm text-center mb-8">
          Characters
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((c) => (
            <CharacterCard key={c.id} character={c} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-16 px-4">
        <p className="font-pixel text-magenta text-sm mb-6">Ready to play?</p>
        <a
          href="https://apps.apple.com/app/fiveish"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-bg-deep font-bold px-8 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
        >
          Download on the App Store
        </a>
      </section>
    </>
  );
}
