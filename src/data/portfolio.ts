export const EXPERIENCES = [
    {
        company: 'Zebpay',
        role: 'Engineer',
        period: '2024/05 – Present',
        achievements: [
            'Led the end-to-end migration from Azure API Management (APIM) to AWS API Gateway, involving both legacy and active APIs across multiple teams',
            'Designed and implemented reusable Terraform modules to standardize infrastructure provisioning across AWS, Azure, and GCP',
            'Achieved a 40% reduction in cloud spending through architectural refactoring, instance rightsizing, and decommissioning unused resources',
            'Rebuilt GitHub-based CI/CD pipelines into modular, secure workflows with integrated SAST and container scanning, lowering average build time by 35%',
            'Deployed a centralized logging and observability platform using Prometheus, Grafana, Thanos, Loki, and Opsgenie',
            'Managed cross-functional migration projects, including Kafka from a third-party vendor to AWS MSK, Azure Function Apps to AWS Lambda',
        ],
        technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'EKS', 'GitHub Actions', 'Prometheus', 'Grafana', 'Docker'],
    },
    {
        company: 'Rizzle',
        role: 'Engineer',
        period: '2023/09 – 2024/02',
        location: 'Hyderabad, India',
        achievements: [
            'Designed and provisioned scalable cloud infrastructure using EC2, ElasticSearch, MongoDB with autoscaling, and core AWS services',
            'Owned Kubernetes manifest authoring and cluster operations, deploying microservices with optimized resource limits, resulting in 20% better resource utilization',
            'Built and maintained Dockerized application stacks, enforcing image hygiene and minimizing attack surface via multi-stage builds',
            'Automated delivery workflows with Jenkins, GitHub Actions, AWS CodePipeline, and Argo CD, reducing overall deployment time by 40%',
            'Developed internal Slack-based release tools in Node.js for cross-functional coordination',
            'Monitored and tuned system health using Prometheus and Grafana, reducing mean time to recovery (MTTR) by 25%',
        ],
        technologies: ['AWS', 'EC2', 'ElasticSearch', 'MongoDB', 'Kubernetes', 'Docker', 'Jenkins', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana'],
    },
    {
        company: 'Vivvix (Numerator + Kantar)',
        role: 'DevOps Engineer',
        period: '2022',
        location: 'India',
        achievements: [
            'Provisioned and automated infrastructure from scratch using Terraform and Atlantis for PR-based workflows',
            'Optimized Docker images to improve performance, reduce size, and accelerate deployments',
            'Built logging and alerting using ELK stack with Elastalert, Heartbeat, and Status Page, cutting downtime by 25%',
            'Engineered and refined Azure Pipelines, slashing deployment time by 50% and boosting development velocity',
            'Deployed and configured AKS clusters with complete network and DNS integration in Azure',
        ],
        technologies: ['Terraform', 'Atlantis', 'Docker', 'ELK Stack', 'Azure Pipelines', 'Azure', 'Databricks', 'AKS', 'Kubernetes'],
    },
    {
        company: 'Numerator',
        role: 'DevOps Engineer',
        period: '2022',
        location: 'India',
        achievements: [
            'Managed and optimized AWS infrastructure using services such as Lambda, RDS, EKS, DMS, EC2, CloudFront, Route 53',
            'Implemented IaC using Terraform with Atlantis and Terraform Drift, extended to Snowflake infrastructure',
            'Designed and enhanced CI/CD pipelines on CircleCI and GitHub Actions, reducing runtime by 30%',
            'Built and maintained Airflow infrastructure with custom Docker images and Kubernetes cluster setup',
            'Implemented robust monitoring and alerting stack using Prometheus, Grafana, PagerDuty, and Slack',
        ],
        technologies: ['AWS', 'Lambda', 'RDS', 'EKS', 'Terraform', 'Snowflake', 'CircleCI', 'GitHub Actions', 'Airflow', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    },
];

export const PROJECTS = [
    {
        title: 'Infrastructure Automation with Terraform and Azure',
        description: 'Successfully designed and implemented an infrastructure automation project using Terraform and Azure. Created Terraform modules and Git/GitHub best practices to improve reusability, scalability, and code management. Integrated CI/CD pipelines with Azure YAML for the Drift and Atlantis in AKS for automated deployments on pull requests and continuous integration, resulting in a reduction in resource provisioning time.',
        technologies: ['Terraform', 'Azure', 'Git', 'Atlantis', 'Azure Pipelines', 'Kubernetes', 'Helm'],
    },
    {
        title: 'Monitoring and Observability with Prometheus and Grafana',
        description: 'Implemented a robust monitoring and observability solution utilizing Prometheus for metric collection from various services with custom exporters and alerting rules, along with Grafana for creating interactive dashboards enabling real-time monitoring, integrated with PagerDuty and Slack for efficient incident management and performance optimization.',
        technologies: ['AWS', 'EKS', 'Kubernetes', 'Prometheus', 'Grafana', 'Microservices', 'Databases', 'PagerDuty', 'Slack'],
    },
];

export const SKILL_CATEGORIES = [
    {
        category: 'Cloud Platforms',
        skills: ['AWS', 'Azure', 'GCP']
    },
    {
        category: 'Container Orchestration',
        skills: ['Kubernetes', 'Docker', 'Helm', 'Istio']
    },
    {
        category: 'Infrastructure as Code',
        skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
    },
    {
        category: 'CI/CD & GitOps',
        skills: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD', 'Flux']
    },
    {
        category: 'Monitoring & Observability',
        skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic']
    },
    {
        category: 'Programming & Scripting',
        skills: ['Python', 'Go', 'Bash', 'YAML', 'JavaScript']
    },
    {
        category: 'Databases & Caching',
        skills: ['PostgreSQL', 'MongoDB', 'Redis']
    },
    {
        category: 'SRE & Platform Engineering',
        skills: ['Service Mesh', 'Chaos Engineering', 'Cost Optimization', 'DevSecOps']
    },
];

export const ABOUT = {
    description: "I'm a DevOps Engineer at ZebPay, where I leverage my BTech in Computer Science to enhance infrastructure reliability, automate deployments, and optimize cloud operations. With a passion for building scalable systems, I specialize in Kubernetes, cloud platforms (AWS, Azure), and modern DevOps practices.",
    approach: "My approach combines deep technical expertise with a focus on measurable business impact—reducing costs, improving reliability, and accelerating development velocity.",
    stats: [
        { value: '40%', label: 'Cost Reduction' },
        { value: '35%', label: 'Faster Builds' },
        { value: '99.9%', label: 'Uptime' },
        { value: '25%', label: 'MTTR Reduction' },
    ]
};

export const CONTACT = [
    { name: 'Email', value: 'wiwek13@gmail.com', href: 'mailto:wiwek13@gmail.com' },
    { name: 'LinkedIn', value: 'linkedin.com/in/wiwek13', href: 'https://www.linkedin.com/in/wiwek13/' },
    { name: 'GitHub', value: 'github.com/wiwek13', href: 'https://github.com/wiwek13' },
    { name: 'Location', value: 'New Delhi, India', href: '#' },
];
