import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";

// Fun, boy-ish 3D-ish cartoon style with facial hair options.
export default function AvatarPop() {
  const svg = useMemo(() => {
    const seed = "shreyans-jain";
    return createAvatar(adventurer, {
      seed,
      // transparent background so it blends into the hero
      // (no backgroundColor set)
      // keep it clean + masculine-coded (facial-hair option names vary by collection,
      // so we keep this schema-safe and rely on the chosen style/seed)
      // skin + hair variety
      skinColor: ["f2d3b1", "edb98a", "d08b5b"],
      hair: ["short01", "short02", "short03", "short04"],
      hairColor: ["2c1b18", "4a2a1a", "1b1b1b"],
      eyes: ["variant05", "variant07", "variant09"],
      mouth: ["variant06", "variant09", "variant12"],
    }).toString();
  }, []);

  return (
    <div className="popAvatar" aria-hidden>
      <div className="popRing" />
      <div
        className="popImg"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}
