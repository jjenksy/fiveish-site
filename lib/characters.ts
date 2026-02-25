export interface Character {
  id: string;
  description: string;
  accentColor: string;
  screenshot: string;
}

export const characters: Character[] = [
  {
    id: "buzzy",
    description: "Pattern-dodging bee",
    accentColor: "#FFCC57",
    screenshot: "/screenshots/03_Buzzy.png",
  },
  {
    id: "coco",
    description: "Ice-sliding penguin",
    accentColor: "#7DD4FD",
    screenshot: "/screenshots/04_Coco.png",
  },
  {
    id: "nova",
    description: "Space-defending ship",
    accentColor: "#8C5CF5",
    screenshot: "/screenshots/05_Nova.png",
  },
  {
    id: "catarina",
    description: "Arena battle tank",
    accentColor: "#00C7DB",
    screenshot: "/screenshots/06_Catarina.png",
  },
  {
    id: "stevie",
    description: "Biplane ace pilot",
    accentColor: "#6B7A3B",
    screenshot: "/screenshots/07_Stevie.png",
  },
  {
    id: "diggy",
    description: "Underground digger mole",
    accentColor: "#8C592B",
    screenshot: "/screenshots/08_Diggy.png",
  },
  {
    id: "brainy",
    description: "Psychic dodge master",
    accentColor: "#9C59B5",
    screenshot: "/screenshots/09_Brainy.png",
  },
  {
    id: "derby",
    description: "Downhill race car",
    accentColor: "#E63333",
    screenshot: "/screenshots/10_Derby.png",
  },
  {
    id: "monky",
    description: "Vine-swinging monkey",
    accentColor: "#A67333",
    screenshot: "/screenshots/11_Monky.png",
  },
  {
    id: "abuela",
    description: "Chancla-throwing abuela",
    accentColor: "#D97340",
    screenshot: "/screenshots/12_Abuela.png",
  },
  {
    id: "clawz",
    description: "Claw machine gem grabber",
    accentColor: "#E6BF33",
    screenshot: "/screenshots/13_Clawz.png",
  },
  {
    id: "zed",
    description: "Zombie defense shooter",
    accentColor: "#8C2626",
    screenshot: "/screenshots/14_Zed.png",
  },
];
