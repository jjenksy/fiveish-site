import type { Metadata } from "next";
import { FaqItem } from "@/components/FaqItem";

export const metadata: Metadata = {
  title: "Support — 5ISH",
  description: "Get help with 5ISH. FAQ and support contact.",
};

const faqs = [
  {
    question: "How do I play?",
    answer:
      "Each minigame uses two buttons: left and right. Tap to perform actions, hold to charge special moves. The controls change meaning for each minigame — some rotate, some move, some aim.",
  },
  {
    question: "How do I unlock new minigames?",
    answer:
      "Play any minigame to earn marbles. Spend marbles at the prize machine to win unlock tokens, power-ups, and cosmetic items. Each locked minigame shows its marble cost.",
  },
  {
    question: "Is the game really free with no ads?",
    answer:
      "Yes. 5ISH has zero ads, zero tracking, and zero data collection. The game is completely free to download and play. All content can be unlocked through gameplay.",
  },
  {
    question: "Does the game work offline?",
    answer:
      "Yes. 5ISH runs entirely on your device and never connects to the internet. You can play anywhere without a connection.",
  },
  {
    question: "What devices are supported?",
    answer:
      "5ISH runs on iPhone and iPad with iOS 18.4 or later. It is built natively with SpriteKit for optimal performance.",
  },
  {
    question: "How do I change character skins?",
    answer:
      "Win skins from the prize machine, then tap a character on the main menu to open the skin selector. Each character has multiple unlockable skin variants.",
  },
  {
    question: "My game progress was lost. Can I recover it?",
    answer:
      "Game progress is stored locally on your device. If you delete and reinstall the app, progress will be lost. We recommend keeping the app installed to preserve your data.",
  },
  {
    question: "I found a bug. How do I report it?",
    answer:
      "Please email support@fiveish.app with a description of the issue, what you expected to happen, and your device model and iOS version. Screenshots help too!",
  },
];

export default function Support() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="font-pixel text-gold text-xl mb-4">Support</h1>

      <p className="text-text-dim text-sm mb-8">
        Need help? Check the FAQ below or email us at{" "}
        <a
          href="mailto:support@fiveish.app"
          className="text-cyan hover:underline"
        >
          support@fiveish.app
        </a>
      </p>

      <h2 className="font-pixel text-cyan text-xs mb-4">FAQ</h2>
      <div className="space-y-2">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </div>
  );
}
