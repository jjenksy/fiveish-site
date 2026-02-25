import Image from "next/image";
import type { Character } from "@/lib/characters";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div
      className="bg-bg-card rounded-xl overflow-hidden border-2 transition-transform hover:scale-[1.02]"
      style={{ borderColor: character.accentColor }}
    >
      <div className="relative aspect-[9/19.5]">
        <Image
          src={character.screenshot}
          alt={`${character.id} gameplay`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
        />
      </div>
      <div className="p-3 text-center">
        <h3
          className="font-pixel text-xs uppercase"
          style={{ color: character.accentColor }}
        >
          {character.id}
        </h3>
        <p className="text-text-dim text-xs mt-1">{character.description}</p>
      </div>
    </div>
  );
}
