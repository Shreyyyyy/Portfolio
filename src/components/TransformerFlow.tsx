import { useMemo } from "react";
import ReactFlow, { Background, Controls, type Edge, type Node } from "reactflow";
import "reactflow/dist/style.css";

export default function TransformerFlow() {
  const { nodes, edges } = useMemo(() => {
    const n: Node[] = [
      { id: "tok", position: { x: 0, y: 70 }, data: { label: "Tokens" }, type: "input" },
      { id: "emb", position: { x: 170, y: 70 }, data: { label: "Embedding\n+ Positional" } },
      { id: "att", position: { x: 380, y: 20 }, data: { label: "Multi-Head\nAttention" } },
      { id: "res1", position: { x: 380, y: 130 }, data: { label: "Residual\n+ LayerNorm" } },
      { id: "ffn", position: { x: 610, y: 70 }, data: { label: "FFN (MLP)" } },
      { id: "res2", position: { x: 820, y: 70 }, data: { label: "Residual\n+ LayerNorm" } },
      { id: "out", position: { x: 1030, y: 70 }, data: { label: "Next Token" }, type: "output" },
    ];

    const e: Edge[] = [
      { id: "e1", source: "tok", target: "emb", animated: true },
      { id: "e2", source: "emb", target: "att", animated: true },
      { id: "e3", source: "att", target: "res1" },
      { id: "e4", source: "res1", target: "ffn", animated: true },
      { id: "e5", source: "ffn", target: "res2", animated: true },
      { id: "e6", source: "res2", target: "out", animated: true },
    ];

    return { nodes: n, edges: e };
  }, []);

  return (
    <div
      style={{
        height: 320,
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(120,160,255,.16)",
        background:
          "radial-gradient(700px 220px at 20% 0%, rgba(35,245,255,.10), transparent 60%), radial-gradient(700px 220px at 90% 0%, rgba(201,53,255,.08), transparent 60%), rgba(12,18,34,.20)",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{ style: { stroke: "rgba(155,176,208,.55)", strokeWidth: 1.5 } }}
      >
        <Background color="rgba(120,160,255,.18)" gap={24} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
