import Image from "next/image";

const screenshots = [
  { src: "/screenshots/01_MainMenu.png", alt: "Main menu" },
  { src: "/screenshots/02_PrizeMachine.png", alt: "Prize machine" },
  { src: "/screenshots/03_Buzzy.png", alt: "Buzzy minigame" },
  { src: "/screenshots/04_Coco.png", alt: "Coco minigame" },
  { src: "/screenshots/05_Nova.png", alt: "Nova minigame" },
  { src: "/screenshots/06_Catarina.png", alt: "Catarina minigame" },
  { src: "/screenshots/07_Stevie.png", alt: "Stevie minigame" },
  { src: "/screenshots/08_Diggy.png", alt: "Diggy minigame" },
  { src: "/screenshots/09_Brainy.png", alt: "Brainy minigame" },
  { src: "/screenshots/10_Derby.png", alt: "Derby minigame" },
  { src: "/screenshots/11_Monky.png", alt: "Monky minigame" },
  { src: "/screenshots/12_Abuela.png", alt: "Abuela minigame" },
  { src: "/screenshots/13_Clawz.png", alt: "Clawz minigame" },
  { src: "/screenshots/14_Zed.png", alt: "Zed minigame" },
];

export function ScreenshotCarousel() {
  return (
    <div className="carousel py-8">
      <div className="shrink-0 w-4" />
      {screenshots.map((s) => (
        <div
          key={s.src}
          className="relative w-44 sm:w-48 aspect-[9/19.5] rounded-2xl overflow-hidden border-2 border-bg-surface shadow-lg shadow-bg-deep/50"
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>
      ))}
      <div className="shrink-0 w-4" />
    </div>
  );
}
