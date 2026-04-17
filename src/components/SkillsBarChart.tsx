import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "LangChain", score: 90 },
  { name: "LangGraph", score: 85 },
  { name: "Tool Calling", score: 92 },
  { name: "Guardrails", score: 84 },
  { name: "Eval (DeepEval)", score: 86 },
  { name: "FastAPI", score: 82 },
  { name: "Docker", score: 78 },
];

export default function SkillsBarChart() {
  return (
    <div style={{ height: 320, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(120,160,255,.16)", background: "rgba(12,18,34,.28)" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 18, right: 16, bottom: 10, left: 8 }}>
          <defs>
            <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#23f5ff" stopOpacity={0.85} />
              <stop offset="55%" stopColor="#c935ff" stopOpacity={0.75} />
              <stop offset="100%" stopColor="#a3ff2b" stopOpacity={0.65} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(120,160,255,.10)" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "rgba(155,176,208,.85)", fontSize: 12 }} axisLine={false} tickLine={false} interval={0} angle={-10} height={50} />
          <YAxis tick={{ fill: "rgba(155,176,208,.75)", fontSize: 12 }} axisLine={false} tickLine={false} width={32} domain={[0, 100]} />
          <Tooltip
            contentStyle={{ background: "rgba(5,6,10,.88)", border: "1px solid rgba(120,160,255,.22)", borderRadius: 12 }}
            labelStyle={{ display: "none" }}
          />
          <Bar dataKey="score" fill="url(#bar)" radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
