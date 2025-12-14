export const ABOUT = {
    title: "Profile",
    description: "DevOps Engineer with a background designing, testing and implementing infrastructure and applications. Purpose-driven professional with capacity to be strong team player plus work effectively independently.",
    approach: "I don't just maintain servers; I build autonomous systems that scale with business needs.",
    stats: [
        { value: '40%', label: 'Cost Reduction' },
        { value: '35%', label: 'Faster Builds' },
        { value: '99.9%', label: 'Uptime' },
        { value: '25%', label: 'MTTR Reduction' },
    ]
};

export const EXPERIENCES = [
    {
        company: "Zebpay",
        role: "Engineer",
        period: "2024/05 – Present",
        awards: ["2x Power Performer"],
        technologies: ["AWS", "Azure", "Docker", "Terraform", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "Thanos", "Loki", "Opsgenie", "Trivy", "Semgrep", "MSK", "Cloudflare"],
        achievements: [
            "Led the end-to-end migration from Azure API Management (APIM) to AWS API Gateway, involving both legacy and active APIs across multiple teams. Implemented request/response transformation, improved connection security, and optimized gateway configurations — resulting in better latency, simplified management, and seamless integration with backend services.",
            "Designed and implemented reusable Terraform modules to standardize infrastructure provisioning across AWS, Azure, and GCP. Reduced setup time for new environments. Maintained production-grade Kubernetes clusters across AWS.",
            "Achieved a 40% reduction in cloud spending through architectural refactoring, instance rightsizing, decommissioning unused resources, and creating proper tagging. Also enabled cluster autoscaling and workload rightsizing, created organization-wide cost monitoring dashboards and audit reports.",
            "Leveraged AI technologies and tools to enhance automation and operational efficiency across cloud infrastructure management.",
            "Rebuilt GitHub-based CI/CD pipelines into modular, secure workflows with integrated SAST and container scanning using Trivy and Semgrep. Optimized Dockerfiles to improve build cache utilization, improve security and lowered average build time by 35%.",
            "Deployed a centralized logging and observability platform using Prometheus, Grafana, Thanos, Loki, and Opsgenie. Enabled multi-environment, multi-account monitoring with alerting policies that reduced mean-time-to-detect (MTTD).",
            "Managed cross-functional migration projects, including Kafka from a third-party vendor to AWS MSK, Azure Function Apps to AWS Lambda, and legacy Superset migration in production. Coordinated timelines, blockers, and post-migration audits across teams.",
            "Owned vendor and external team collaboration, including onboarding third-party services, managing access controls, and enforcing security policies. Led infrastructure reviews with platform, security, and analytics teams to align project priorities.",
            "Implemented automated compliance workflows for patching (via AWS Systems Manager), backup lifecycles (RDS, EBS, ECR, EFS, S3), automated DNS onboarding for new projects, WAF rule enforcement (Cloudflare)."
        ]
    },
    {
        company: "Rizzle",
        role: "Engineer",
        period: "2023/09 – 2024/02",
        technologies: ["AWS", "EC2", "ElasticSearch", "MongoDB", "Kubernetes", "Docker", "Jenkins", "ArgoCD", "CodePipeline", "Node.js", "S3", "CloudFront"],
        achievements: [
            "Designed and provisioned scalable cloud infrastructure using EC2, ElasticSearch, MongoDB with autoscaling, and core AWS services including RDS, S3, and CloudFront—boosting uptime and responsiveness across critical production workloads.",
            "Owned Kubernetes manifest authoring and cluster operations, deploying microservices with optimized resource limits, readiness/liveness probes, and autoscaling strategies—resulting in 20% better resource utilization and reduced pod evictions.",
            "Built and maintained Dockerized application stacks, enforcing image hygiene and minimizing attack surface via multi-stage builds and base image validation across development and production environments.",
            "Automated delivery workflows with Jenkins, GitHub Actions, AWS CodePipeline, and Argo CD, achieving consistent, rollback-safe deployments and reducing overall deployment time by 40%.",
            "Developed internal Slack-based release tools in Node.js for cross-functional coordination, integrating CI metadata, approval flows, and on-demand rollout controls.",
            "Monitored and tuned system health using Prometheus and Grafana, implementing SLO dashboards and alert rules that improved incident detection and reduced mean time to recovery (MTTR) by 25%.",
            "Led production support for critical systems, triaging outages, coordinating hotfixes, and establishing runbooks to strengthen operational resilience."
        ]
    },
    {
        company: "Vivvix (Numerator + Kantar)",
        role: "DevOps Engineer",
        period: "2022/04 – 2023/08",
        awards: ["Star Spot Award"],
        technologies: ["Terraform", "Atlantis", "Docker", "ELK Stack", "Azure Pipelines", "AKS", "Databricks", "ADF", "ML Workspaces", "Heartbeat"],
        achievements: [
            "Provisioned and automated infrastructure from scratch using Terraform and Atlantis for PR-based workflows; optimized Docker images to improve performance, reduce size, and accelerate deployments. Built logging and alerting using ELK stack with Elastalert, Heartbeat, and Status Page, cutting downtime by 25%.",
            "Engineered and refined Azure Pipelines, slashing deployment time by 50% and boosting development velocity. Managed Databricks ETL workflows, cluster provisioning, and alerting with Azure Data Factory and ML Workspaces for seamless data operations.",
            "Deployed and configured AKS clusters with complete network and DNS integration in Azure, ensuring high availability and consistent application delivery at scale.",
            "Led production releases, collaborating with cross-functional teams to ensure seamless deployment cycles with minimal disruption and rapid incident resolution"
        ]
    },
    {
        company: "Numerator",
        role: "DevOps Engineer",
        period: "2021/03 – 2022/03",
        awards: ["Star Spot Award"],
        technologies: ["AWS", "Lambda", "Terraform", "CircleCI", "Airflow", "Snowflake", "Prometheus", "Grafana", "PagerDuty", "Django", "DMS"],
        achievements: [
            "Managed and optimized AWS infrastructure using services such as Lambda, RDS, EKS, DMS, EC2, CloudFront, Route 53, and more; implemented IaC using Terraform with Atlantis and Terraform Drift, extended to Snowflake infrastructure, and built disaster recovery and backup strategies for high availability.",
            "Designed and enhanced CI/CD pipelines on CircleCI and GitHub Actions, leveraging caching, parallel jobs, and smart branching strategies to reduce runtime by 30%; contributed to unit and integration test coverage, and API development in Django and Airflow Pipelines.",
            "Built and maintained Airflow infrastructure with custom Docker images and Kubernetes cluster setup; developed and optimized DAGs, implemented DMS task auto-scaling, cutting costs by 40%; managed Snowflake ingestion workflows and warehouse optimization, achieving 35–40% cost reduction.",
            "Implemented robust monitoring and alerting stack using Prometheus, Grafana, PagerDuty, and Slack-based policies, ensuring timely incident response and improved operational resilience."
        ]
    }
];

export const PROJECTS = [
    {
        title: "Infrastructure Automation with Terraform and Azure",
        technologies: ["Terraform", "Azure", "Git", "Atlantis", "Azure Pipelines", "Kubernetes", "Helm"],
        description: "Successfully designed and implemented an infrastructure automation project using Terraform and Azure. Created Terraform modules and Git/GitHub best practices to improve reusability, scalability, and code management. Integrated CI/CD pipelines with Azure YAML for the Drift and Atlantis in AKS for automated deployments on pull requests and continuous integration, resulting in a reduction in resource provisioning.",
        link: "#"
    },
    {
        title: "Monitoring and Observability with Prometheus and Grafana",
        technologies: ["AWS", "EKS", "Prometheus", "Grafana", "PagerDuty", "Slack"],
        description: "Implemented a robust monitoring and observability solution utilizing Prometheus for metric collection from various services with custom exporters and alerting rules, along with Grafana for creating interactive dashboards enabling real-time monitoring, integrated with PagerDuty and Slack for efficient incident management and performance optimization.",
        link: "#"
    }
];

export const SKILL_CATEGORIES = [
    {
        category: "Cloud Platforms",
        skills: ["AWS", "Azure", "GCP"]
    },
    {
        category: "Container Orchestration",
        skills: ["Kubernetes", "Docker", "Helm", "Istio"]
    },
    {
        category: "Infrastructure as Code",
        skills: ["Terraform", "Ansible", "CloudFormation"]
    },
    {
        category: "CI/CD & GitOps",
        skills: ["GitHub Actions", "Jenkins", "ArgoCD"]
    },
    {
        category: "Monitoring & Observability",
        skills: ["Prometheus", "Grafana", "ELK Stack", "New Relic"]
    },
    {
        category: "Programming & Scripting",
        skills: ["Python", "Go", "Bash", "YAML"]
    },
    {
        category: "Databases & Caching",
        skills: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
        category: "SRE & Platform Engineering",
        skills: ["Service Mesh", "Chaos Engineering", "Cost Optimization", "DevSecOps"]
    },
    {
        category: "Data & Security",
        skills: ["Snowflake", "Airflow", "Superset", "Cloudflare", "WAF"]
    }
];

export const CONTACT = [
    { name: 'Email', value: 'wiwek13@gmail.com', href: 'mailto:wiwek13@gmail.com' },
    { name: 'LinkedIn', value: 'linkedin.com/in/wiwek13', href: 'https://www.linkedin.com/in/wiwek13/' },
    { name: 'Location', value: 'India', href: '#' },
    { name: 'Phone', value: '+91 8989879834', href: 'tel:+918989879834' }
];
