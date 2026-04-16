import "./styles.css";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Link, Mail, Phone } from "lucide-react";
import { profile } from "./data/profile";
import AvatarPop from "./components/AvatarPop";
import { useMouseGlow } from "./hooks/useMouseGlow";
import { useTilt } from "./hooks/useTilt";
import CursorTrail from "./components/CursorTrail";
import { useSfx } from "./hooks/useSfx";
import { useEffect, useState } from "react";
import AgenticWorkflow from "./components/AgenticWorkflow";
import ImpactChart from "./components/ImpactChart";
import TransformerMini from "./components/TransformerMini";
import FlowSection from "./components/FlowSection";
import { isPlaceholderUrl, safeExternalHref } from "./lib/links";

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2>{title}</h2>
        </div>
        <div className="divider" />
        {children}
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="stat">
      <div className="statV">{v}</div>
      <div className="statK">{k}</div>
    </div>
  );
}

export default function App() {
  useMouseGlow();
  useTilt(".card");
  const [playMode, setPlayMode] = useState(true);
  const [sfxOn, setSfxOn] = useState(true);
  const { play } = useSfx(playMode && sfxOn);

  useEffect(() => {
    const handler = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a") || t.closest("button")) play();
    };
    document.addEventListener("pointerenter", handler, true);
    return () => document.removeEventListener("pointerenter", handler, true);
  }, [play]);
  const openResume = () => window.open(profile.links.resume, "_blank", "noopener,noreferrer");
  const openLinkedIn = () => {
    const href = safeExternalHref(profile.links.linkedin);
    if (href !== "#") window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="gridlines" />
      <div className="noise" />
      <div className="cursorGlow" />
      <CursorTrail enabled={playMode} />

      <header className="nav">
        <div className="container">
          <div className="navInner">
            <a className="brand" href="#top">
              <span className="nameBig gradientText">{profile.name}</span>
              <span className="roleBig">{profile.role}</span>
            </a>

            <nav className="navLinks" aria-label="Primary">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button
                type="button"
                className={`toggle ${playMode ? "on" : ""}`}
                onClick={() => setPlayMode((v) => !v)}
                aria-pressed={playMode}
                title="Toggle Play Mode"
              >
                <span className="dot" /> Play
              </button>
              <button
                type="button"
                className={`toggle ${sfxOn ? "on" : ""}`}
                onClick={() => setSfxOn((v) => !v)}
                aria-pressed={sfxOn}
                title="Toggle SFX"
                disabled={!playMode}
              >
                <span className="dot" /> SFX
              </button>
              <button
                className="btn secondary"
                onClick={openLinkedIn}
                type="button"
                disabled={isPlaceholderUrl(profile.links.linkedin)}
                title={isPlaceholderUrl(profile.links.linkedin) ? "Add your LinkedIn URL in profile.ts" : "Open LinkedIn"}
              >
                <Link size={16} /> LinkedIn <ArrowUpRight size={16} />
              </button>
              <button className="btn" onClick={openResume} type="button">
                <Download size={16} /> Resume <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="heroGrid">
                <div>
                  <div className="kicker">{profile.location}</div>
                  <div className="h1">
                    <span className="gradientText">{profile.name}</span>
                  </div>
                  <div className="sub" style={{ marginTop: 4, marginBottom: 10 }}>
                    <span className="gradientText" style={{ fontWeight: 700 }}>
                      {profile.role}
                    </span>
                  </div>
                  <div className="sub">{profile.summary}</div>

                  <div className="heroActions">
                    <a className="btn secondary" href={profile.links.email}>
                      <Mail size={16} /> Email
                    </a>
                    <a className="btn secondary" href={profile.links.phone}>
                      <Phone size={16} /> Call
                    </a>
                    <a
                      className={`btn secondary ${isPlaceholderUrl(profile.links.linkedin) ? "disabled" : ""}`}
                      href={safeExternalHref(profile.links.linkedin)}
                      target="_blank"
                      rel="noreferrer"
                      aria-disabled={isPlaceholderUrl(profile.links.linkedin)}
                      onClick={(e) => {
                        if (isPlaceholderUrl(profile.links.linkedin)) e.preventDefault();
                      }}
                    >
                      <Link size={16} /> LinkedIn
                    </a>
                    <a
                      className={`btn secondary ${isPlaceholderUrl(profile.links.github) ? "disabled" : ""}`}
                      href={safeExternalHref(profile.links.github)}
                      target="_blank"
                      rel="noreferrer"
                      aria-disabled={isPlaceholderUrl(profile.links.github)}
                      onClick={(e) => {
                        if (isPlaceholderUrl(profile.links.github)) e.preventDefault();
                      }}
                    >
                      <Link size={16} /> GitHub
                    </a>
                  </div>
                </div>

                <div className="avatarWrap">
                  <div className="avatarInner">
                    <AvatarPop />
                  </div>
                </div>
              </div>

              <div className="cards">
                <div className="card">
                  <h3>Focus</h3>
                  <div className="pills">
                    {profile.highlights.map((h) => (
                      <Pill key={h}>{h}</Pill>
                    ))}
                  </div>
                </div>
                <div className="card">
                  <h3>Signature</h3>
                  <div className="pills">
                    <Pill>Multi-agent orchestration</Pill>
                    <Pill>Structured tool calling</Pill>
                    <Pill>Evaluation + guardrails</Pill>
                    <Pill>Enterprise automation</Pill>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="dashWrap">
          <div className="container">
            <div className="dashRail">
              <FlowSection
                title="System Overview"
                subtitle="An agentic CRM automation stack, with routing, tools, guardrails, evaluation, and telemetry."
              >
                <div className="showcaseGrid">
                  <div className="showcaseA">
                    <AgenticWorkflow />
                  </div>
                  <div className="showcaseB">
                    <ImpactChart />
                  </div>
                  <div className="showcaseC">
                    <TransformerMini />
                  </div>
                </div>
              </FlowSection>

              <FlowSection
                title="Impact"
                subtitle="Production outcomes, monitoring, and scale."
              >
                <div className="statsRow">
                  <Stat k="Support efficiency" v="+35%" />
                  <Stat k="Incorrect executions" v="-40%" />
                  <Stat k="Models monitored" v="5" />
                  <Stat k="Agent instances" v="10+" />
                  <Stat k="Multi-agent workflows" v="8" />
                </div>
              </FlowSection>

              <FlowSection
                title="Experience"
                subtitle="Work mapped as capability nodes instead of long paragraphs."
              >
                <div className="timeline">
                  {profile.experience.map((e) => (
                    <div className="item" key={`${e.company}-${e.title}`}>
                      <div className="itemTop">
                        <div className="left">
                          <span className="company">{e.company}</span>
                          <span className="role">{e.title}</span>
                        </div>
                        <span className="period">{e.period}</span>
                      </div>
                      <div className="pills" style={{ marginTop: 10 }}>
                        {e.bullets.slice(0, 6).map((b) => (
                          <Pill key={b}>{b.replace(/\.$/, "")}</Pill>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </FlowSection>
            </div>
          </div>
        </div>

        <Section id="skills" title="Skills">
          <div className="container" style={{ marginTop: 14 }}>
            <div className="cols">
              {Object.entries(profile.skills).map(([k, list]) => (
                <div className="item col" key={k}>
                  <div className="kv">
                    <div className="k">{k}</div>
                  </div>
                  <div className="pills" style={{ marginTop: 10 }}>
                    {list.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="education" title="Education & Certifications">
          <div className="container" style={{ marginTop: 14 }}>
            <div className="cols">
              <div className="item col">
                <div className="kv">
                  <div className="k">Education</div>
                </div>
                <ul className="bullets">
                  {profile.education.map((ed) => (
                    <li key={ed.school}>
                      <span className="company">{ed.school}</span> — {ed.degree} <span className="period">({ed.period})</span>
                      <div className="period">{ed.location}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item col">
                <div className="kv">
                  <div className="k">Certifications</div>
                </div>
                <ul className="bullets">
                  {profile.certifications.map((c) => (
                    <li key={c.name}>
                      <span className="company">{c.name}</span>
                      <div className="period">
                        {c.org} • {c.date}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="container" style={{ marginTop: 14 }}>
            <div className="cols">
              <div className="item col">
                <div className="sub" style={{ marginBottom: 10 }}>
                  Want to build something ambitious with agents? Let’s talk.
                </div>
                <div className="heroActions">
                  <a className="btn secondary" href={profile.links.email}>
                    <Mail size={16} /> shreyansjain.placement@gmail.com
                  </a>
                  <a className="btn secondary" href={profile.links.phone}>
                    <Phone size={16} /> +91 9958510891
                  </a>
                </div>
              </div>
              <div className="item col">
                <div className="sub" style={{ marginBottom: 10 }}>
                  Resume
                </div>
                <button className="btn" onClick={openResume} type="button">
                  <Download size={16} /> Open Resume <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} {profile.name}. Built with React.
          </div>
        </footer>
      </main>
    </>
  );
}
