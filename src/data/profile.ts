export type Link = { label: string; href: string };

export const profile = {
  name: "Shreyans Jain",
  role: "AI Engineer",
  location: "India",
  summary:
    "Specializing in agentic AI systems, multi-agent orchestration, structured tool calling, and production-grade GenAI automation for enterprise workflows.",
  links: {
    email: "mailto:shreyansjain.placement@gmail.com",
    phone: "tel:+919958510891",
    linkedin: "https://www.linkedin.com/in/shreyans-jain-9255351a7",
    github: "https://github.com/shreyyyyy",
    resume: "/resume.pdf",
  },
  highlights: [
    "LangChain • LangGraph • Guardrails-AI",
    "DeepEval evaluation pipelines",
    "FastAPI microservices • Docker • Kafka",
    "Fine-tuning LLaMA / Mistral for structured tool calling",
  ],
  experience: [
    {
      company: "BusinessNext (Acidaes Solutions Pvt. Ltd.)",
      title: "BusinessNext",
      period: "Jan 2025 – Present",
      roles: [
        {
          title: "AI Engineer",
          period: "Jun 2025 – Present",
          bullets: [
            "Designed and deployed a production-grade LLM agent for CRM email automation using LangChain (+35% support response efficiency).",
            "Built a centralized DeepEval dashboard tracking hallucination, latency, safety, and adherence across 5 production models.",
            "Integrated Guardrails-AI to enforce action constraints + output validation (-40% incorrect executions).",
            "Fine-tuned LLaMA and Mistral for reliable structured JSON tool calling.",
          ],
        },
        {
          title: "Junior AI Engineer",
          period: "Jan 2025 – Jun 2025",
          bullets: [
            "Built a Scrum Master AI agent to automate sprint ceremonies, backlog analysis, and cross-team coordination.",
            "Automated summarization of 50+ Azure Board tickets per sprint for blocker/insight reports.",
            "Built a QA Automation AI agent generating 200+ test cases from PR diffs and triggering CI workflows.",
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
    "Frameworks": [
      "LangChain (v1)",
      "LangGraph",
      "HuggingFace Transformers",
      "PyTorch",
      "Scikit-learn",
    ],
    "Production": [
      "Guardrails-AI",
      "FastAPI",
      "Docker",
      "Kafka",
      "MLflow",
    ],
    "Data": ["Python", "Pandas", "NumPy", "SQL", "Git"],
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
      name: "Build Real World AI Applications with Gemini and Imagen (Skill Badge)",
      org: "Google",
      date: "Apr 2025",
    },
    {
      name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
      org: "Google",
      date: "Apr 2025",
    },
    {
      name: "IBM Exploratory Data Analysis for Machine Learning",
      org: "IBM iX",
      date: "Jun 2023",
    },
  ],
} as const;
