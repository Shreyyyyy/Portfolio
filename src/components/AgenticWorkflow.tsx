import { useMemo } from "react";
import ReactFlow, { Background, Controls, type Node, type Edge } from "reactflow";
import "reactflow/dist/style.css";

export default function AgenticWorkflow() {
  const { nodes, edges } = useMemo(() => {
    const n: Node[] = [
      { id: "in", position: { x: 0, y: 60 }, data: { label: "User / CRM Event" }, type: "input" },
      { id: "router", position: { x: 220, y: 60 }, data: { label: "LLM Router\n(intent + tools)" } },
      { id: "tools", position: { x: 470, y: 10 }, data: { label: "Tools\n(Email, CRM, KB)" } },
      { id: "guard", position: { x: 470, y: 120 }, data: { label: "Guardrails\n(schema + safety)" } },
      { id: "eval", position: { x: 710, y: 10 }, data: { label: "Eval\n(DeepEval)" } },
      { id: "tele", position: { x: 710, y: 120 }, data: { label: "Telemetry\n(logs + traces)" } },
      { id: "out", position: { x: 940, y: 60 }, data: { label: "Automated Reply\n+ Actions" }, type: "output" },
    ];

    const e: Edge[] = [
      { id: "e1", source: "in", target: "router", animated: true },
      { id: "e2", source: "router", target: "tools", animated: true },
      { id: "e3", source: "router", target: "guard", animated: true },
      { id: "e4", source: "tools", target: "eval" },
      { id: "e5", source: "guard", target: "tele" },
      { id: "e6", source: "eval", target: "out", animated: true },
      { id: "e7", source: "tele", target: "out", animated: true },
    ];

    return { nodes: n, edges: e };
  }, []);

  return (
    <div
      style={{
        height: 360,
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
