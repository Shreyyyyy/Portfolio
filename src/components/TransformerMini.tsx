import { useMemo } from "react";

function Block({ title }: { title: string }) {
  return (
    <div className="tBlock">
      <div className="tTitle">{title}</div>
    </div>
  );
}

export default function TransformerMini() {
  const layers = useMemo(
    () => [
      "Token + Positional Embedding",
      "Multi-Head Attention",
      "Residual + LayerNorm",
      "FFN (MLP)",
      "Residual + LayerNorm",
      "Output (next token)",
    ],
    []
  );

  return (
    <div className="tWrap">
      <div className="tStack">
        {layers.map((l) => (
          <Block key={l} title={l} />
        ))}
      </div>
      <div className="tHint">Transformer (simplified) • hover blocks</div>
    </div>
  );
}
