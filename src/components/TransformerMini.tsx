import { useMemo, useState } from "react";

function Block({ title, info }: { title: string; info: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className={`tBlock ${open ? "open" : ""}`}
      title={info}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="tTitle">{title}</div>
      <div className="tInfo">{info}</div>
    </button>
  );
}

export default function TransformerMini() {
  const layers = useMemo(
    () => [
      {
        t: "Token + Positional Embedding",
        i: "Maps tokens to vectors, adds position info so order is preserved.",
      },
      {
        t: "Multi-Head Attention",
        i: "Lets each token attend to relevant tokens, multiple heads capture different patterns.",
      },
      {
        t: "Residual + LayerNorm",
        i: "Stabilizes training, keeps signal flow, reduces vanishing gradients.",
      },
      {
        t: "FFN (MLP)",
        i: "Non-linear transformation per token, increases model capacity.",
      },
      {
        t: "Residual + LayerNorm",
        i: "Second normalization, improves optimization and consistency.",
      },
      {
        t: "Output (next token)",
        i: "Projects to vocabulary logits, picks the next token distribution.",
      },
    ],
    []
  );

  return (
    <div className="tWrap">
      <div className="tRow">
        {layers.map((l) => (
          <Block key={l.t} title={l.t} info={l.i} />
        ))}
      </div>
      <div className="tHint">Transformer (simplified) • tap/click blocks</div>
    </div>
  );
}
