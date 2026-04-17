import { ResponsiveContainer, Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Baseline", efficiency: 50, safety: 45 },
  { name: "Tooling", efficiency: 68, safety: 55 },
  { name: "Guardrails", efficiency: 72, safety: 70 },
  { name: "Eval", efficiency: 80, safety: 82 },
  { name: "Prod", efficiency: 85, safety: 86 },
];

export default function ImpactChart() {
  return (
    <div style={{ height: 320, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(120,160,255,.16)", background: "rgba(12,18,34,.28)" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <defs>
            <linearGradient id="eff" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#23f5ff" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#23f5ff" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="saf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c935ff" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#c935ff" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(120,160,255,.10)" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "rgba(155,176,208,.85)", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "rgba(155,176,208,.75)", fontSize: 12 }} axisLine={false} tickLine={false} width={36} />
          <Tooltip
            contentStyle={{ background: "rgba(5,6,10,.88)", border: "1px solid rgba(120,160,255,.22)", borderRadius: 12 }}
            labelStyle={{ display: "none" }}
          />
          <Area type="monotone" dataKey="efficiency" stroke="#23f5ff" fill="url(#eff)" strokeWidth={2} />
          <Area type="monotone" dataKey="safety" stroke="#c935ff" fill="url(#saf)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
