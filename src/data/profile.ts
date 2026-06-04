export type Link = { label: string; href: string };

export const profile = {
  name: "Shreyans Jain",
  role: "Gen AI Engineer",
  location: "India",
  summary:
    "GenAI Engineer specializing in Agentic AI, multi-agent orchestration, RAG systems, structured tool calling, and production-grade LLM applications for enterprise automation.",

  links: {
    email: "mailto:shreyansjain.placement@gmail.com",
    phone: "tel:+919958510891",
    linkedin: "https://www.linkedin.com/in/shreyans-jain-9255351a7",
    github: "https://github.com/shreyyyyy",
    resume: "/resume.pdf",
  },

  highlights: [
    "Built Multi-Agent AI Assistant for Flipkart Talk2Data",
    "LangChain • LangGraph • Google ADK • MCP",
    "DeepEval • Guardrails-AI • LLM Observability",
    "FastAPI • Docker • Kafka • Production AI",
  ],

  experience: [
    {
      company: "Dentsu",
      title: "Gen AI Engineer",
      period: "May 2026 – Present",
      roles: [
        {
          title: "Gen AI Engineer (Hybrid)",
          period: "May 2026 – Present",
          bullets: [
            "Developing enterprise-grade GenAI and Agentic AI solutions using LLMs, LangGraph, LangChain, MCP, and multi-agent architectures.",
            "Designing and optimizing AI agents, RAG pipelines, and tool-calling workflows for enterprise automation.",
            "Building scalable AI platforms focused on evaluation, observability, guardrails, and production deployment.",
            "Built a multi-agent AI assistant for Flipkart Talk2Data, enabling natural language analytics through agent orchestration, SQL generation, retrieval pipelines, and autonomous task delegation.",
            "Engineered a multi-agent orchestration framework with 5+ autonomous agents, improving complex query resolution speed and answer reliability.",
          ],
        },
      ],
    },
    {
      company: "BusinessNext (Acidaes Solutions Pvt. Ltd.)",
      title: "AI Engineer",
      period: "Jan 2025 – May 2026",
      roles: [
        {
          title: "AI Engineer",
          period: "Jun 2025 – May 2026",
          bullets: [
            "Designed and deployed a production-grade LLM agent for CRM email automation using LangChain (+35% support response efficiency).",
            "Built a centralized DeepEval dashboard tracking hallucination, latency, safety, and adherence across 5 production models.",
            "Integrated Guardrails-AI to enforce action constraints and output validation (-40% incorrect executions).",
            "Fine-tuned LLaMA and Mistral for reliable structured JSON tool calling.",
            "Implemented conversation logging, telemetry, and analytics pipelines across 10+ agent instances.",
            "Architected 8+ autonomous multi-agent workflows for CRM business automation.",
          ],
        },
        {
          title: "Junior AI Engineer",
          period: "Jan 2025 – Jun 2025",
          bullets: [
            "Built a Scrum Master AI agent to automate sprint ceremonies, backlog analysis, and cross-team coordination.",
            "Automated summarization and analysis of 50+ Azure Board tickets per sprint for leadership insights.",
            "Built a QA Automation AI agent generating 200+ test cases from pull-request diffs and triggering CI workflows.",
            "Fine-tuned LLMs for structured tool calling, improving argument prediction accuracy by 30%.",
            "Generated 10,000+ synthetic records using SDV for privacy-preserving AI model training.",
            "Researched and implemented multi-agent coordination patterns including orchestration, delegation, and tool routing.",
          ],
        },
      ],
    },
  ],

  skills: {
    "LLM & Agentic AI": [
      "LLM tool calling",
      "Multi-agent orchestration",
      "Prompt engineering",
      "RAG pipelines",
      "Evaluation with DeepEval",
    ],
    Frameworks: [
      "LangChain (v1)",
      "LangGraph",
      "Google ADK",
      "MCP",
      "HuggingFace Transformers",
      "PyTorch",
      "Scikit-learn",
    ],
    Production: [
      "Guardrails-AI",
      "FastAPI",
      "Docker",
      "Kafka",
      "MLflow",
    ],
    Data: ["Python", "Pandas", "NumPy", "SQL", "Git"],
  } as Record<string, string[]>,

  education: [
    {
      school: "CHRIST (Deemed to be University)",
      degree: "Master of Computer Applications",
      period: "Jul 2023 – Apr 2025",
      location: "Bangalore, Karnataka",
    },
    {
      school: "Vellore Institute of Technology (VIT)",
      degree: "Bachelor of Computer Applications",
      period: "Jul 2020 – Apr 2023",
      location: "Vellore, Tamil Nadu",
    },
  ],

  certifications: [
    {
      name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
      org: "Google",
      date: "Apr 2025",
    },
    {
      name: "Explore Generative AI with the Gemini API in Vertex AI",
      org: "Google",
      date: "Apr 2025",
    },
    {
      name: "Develop GenAI Apps with Gemini and Streamlit",
      org: "Google",
      date: "Apr 2025",
    },
    {
      name: "Build Real World AI Applications with Gemini and Imagen Skill Badge",
      org: "Google",
      date: "Apr 2025",
    },
    {
      name: "Prompt Design in Vertex AI Skill Badge",
      org: "Google",
      date: "Apr 2025",
    },
  ],
} as const;
