export const ABOUT = {
    title: "Profile",
    description: "Senior DevOps / Observability Engineer with 5 years of experience in autonomous infra and high-scale Kubernetes ecosystems. Expert in architecting Observability as Code (Grafana, Prometheus) and Agentic AI infrastructure. Specialized in multi-cloud reliability (AWS, OCI, Azure) for fintech platforms, achieving 40% FinOps savings. Two-time recipient of the Power Performer (Zebpay) and Star Spot (Vivvix) awards.",
    approach: "I architect Observability as Code and Agentic AI systems to make infrastructure self-healing and reliable.",
    stats: [
        { value: '40%', label: 'FinOps Savings' },
        { value: '35%', label: 'Faster Builds' },
        { value: '99.99%', label: 'Uptime' },
        { value: '40%', label: 'Faster RCA' },
    ],
    education: {
        degree: "Bachelor of Technology, Computer Science",
        school: "MANIT Bhopal",
        period: "2016 – 2020"
    }
};

export const EXPERIENCES = [
    {
        company: "Nymcard",
        role: "DevOps Engineer",
        period: "Feb 2026 - Present",
        location: "Abu Dhabi, UAE (Remote)",
        technologies: ["Kubernetes", "Kafka", "PostgreSQL", "RabbitMQ", "Grafana", "GitHub Actions", "Flux", "Argo CD", "LLMs", "Agentic AI", "GitOps"],
        achievements: [
            "Automated operator-based lifecycle management for stateful services (Kafka, PostgreSQL, RabbitMQ) for 99.99% uptime, routing SLO alerts to Grafana.",
            "Built GitHub Actions CI/CD and managed GitOps (Flux/Argo CD) across 8+ Kubernetes clusters, reducing deployment toil for 50+ engineers.",
            "Architected an Agentic AI Observability Assistant using LLMs to correlate signals, cutting production incident resolution time (RCA) by 40%."
        ]
    },
    {
        company: "Zebpay",
        role: "DevOps Engineer",
        period: "May 2024 - Dec 2025",
        location: "New Delhi, India",
        awards: ["Power Performer (2x)"],
        technologies: ["AWS", "Prometheus", "Grafana", "Thanos", "Loki", "OpenTelemetry", "GitHub Actions", "Trivy", "Semgrep", "Opencost", "Azure APIM", "AWS API Gateway", "EKS", "Karpenter", "Cilium", "OPA", "Terraform", "Helm"],
        achievements: [
            "Deployed centralized observability (Prometheus, Grafana, Thanos, Loki, OTel) across AWS accounts, establishing SLOs and VM monitoring.",
            "Modularized GitHub Actions CI/CD with integrated SAST (Trivy, Semgrep), reducing build times by 35% and automating image hardening.",
            "Slashed cloud spend by 40% via a FinOps initiative (Opencost) focusing on intelligent scaling, capacity reservations, and consolidation.",
            "Orchestrated zero-downtime migration from Azure APIM to AWS API Gateway for 2T requests/month, optimizing API latency and backend integration.",
            "Upgraded AWS EKS clusters with Karpenter (autoscaling), Cilium, and OPA (compliance) using custom Terraform modules and Helm charts."
        ]
    },
    {
        company: "Rizzle",
        role: "DevOps Engineer",
        period: "Sep 2023 - Apr 2024",
        location: "Hyderabad, India",
        technologies: ["AWS", "Terraform", "CloudFormation", "CloudWatch", "Grafana", "Kubernetes", "Argo CD", "Jenkins", "Node.js", "Slack"],
        achievements: [
            "Provisioned AWS infrastructure via Terraform and CloudFormation, integrating CloudWatch metrics into Managed Grafana to reduce MTTR by 25%.",
            "Optimized Kubernetes manifests and HPA scaling for media workloads, improving resource utilization by 20% and eliminating OOM pod evictions.",
            "Automated delivery via Argo CD/Jenkins and built Node.js Slack integration tools, shortening deployment cycles for internal teams."
        ]
    },
    {
        company: "Vivvix (Numerator + Kantar / Now MediaRadar)",
        role: "DevOps Engineer",
        period: "Mar 2021 - Aug 2023",
        location: "Pune, India",
        awards: ["Star Spot Award"],
        technologies: ["Airflow", "Grafana", "AWS Lambda", "CloudWatch", "X-Ray", "Azure AKS", "Terraform", "Atlantis", "Azure Pipelines", "Snowflake", "Databricks", "AWS DMS"],
        achievements: [
            "Led migration of ETL pipelines from Airflow 1.10 to 2.x with hardened CI/CD flows and Grafana dashboards.",
            "Standardized application logging/tracing for AWS Lambda using CloudWatch, X-Ray, and Grafana.",
            "Bootstrapped Azure AKS clusters and provisioned multi-cloud infrastructure using Terraform and Atlantis.",
            "Cut deployment times by 50% via re-architecting parallel execution and caching in Azure Pipelines.",
            "Optimized Snowflake/Databricks FinOps and deployed AWS DMS autoscaling to reduce data costs by 40%."
        ]
    }
];

export const PROJECTS = [
    {
        title: "Autonomous RCA Agent",
        technologies: ["LLMs", "Prometheus", "Python", "Agentic AI", "Grafana", "Observability"],
        description: "Developed an LLM agent correlating Prometheus metrics with deployment logs to accelerate incident root cause analysis.",
        link: "#"
    },
    {
        title: "Multi-Cluster Observability Platform",
        technologies: ["AWS", "Azure", "Thanos", "OpenTelemetry", "Prometheus", "Grafana"],
        description: "Unified AWS/Azure monitoring plane using Thanos and OpenTelemetry for long term metrics and tracing.",
        link: "#"
    }
];

export const SKILL_CATEGORIES = [
    {
        category: "Platform & IaC",
        skills: ["Terraform", "Kubernetes", "EKS", "AKS", "Rancher", "Helm", "Docker"]
    },
    {
        category: "SRE & Observability",
        skills: ["Prometheus", "Grafana", "Thanos", "Loki", "Tempo", "OpenTelemetry", "CloudWatch", "Opsgenie", "SLO/SLI"]
    },
    {
        category: "CI/CD & DevSecOps",
        skills: ["GitHub Actions", "Azure Pipelines", "Argo CD", "Jenkins", "CircleCI", "Trivy", "Semgrep"]
    },
    {
        category: "Cloud Ecosystem",
        skills: ["AWS (Lambda, EKS, ECS, RDS, MSK, DMS)", "Azure (ADF, Databricks, AKS, APIM)", "OCI", "GCP"]
    },
    {
        category: "AI & Automation",
        skills: ["LLM Agentic Workflows", "AI Observability", "Python", "Go", "Bash", "Node.js"]
    }
];

export const CONTACT = [
    { name: 'Email', value: 'wiwek13@gmail.com', href: 'mailto:wiwek13@gmail.com' },
    { name: 'LinkedIn', value: 'https://www.linkedin.com/in/wiwek13/', href: 'https://www.linkedin.com/in/wiwek13/' },
    { name: 'Location', value: 'Indore, MP, India', href: '#' },
    { name: 'Phone', value: '+91 8989879834', href: 'tel:+918989879834' }
];
