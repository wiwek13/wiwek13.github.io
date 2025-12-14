import React from 'react';

interface TextHighlighterProps {
    text: string;
}

export const TextHighlighter: React.FC<TextHighlighterProps> = ({ text }) => {
    // 1. Highlight numbers/percentages/metrics (e.g. 40%, 100M, 2024, 350+)
    // 2. Highlight specific tech keywords (optional safety list)
    const TECH_TERMS = [
        'AWS', 'Azure', 'GCP', 'Kubernetes', 'K8s', 'Docker', 'Terraform',
        'Prometheus', 'Grafana', 'Jenkins', 'GitHub', 'CI/CD', 'Python', 'Go',
        'Node.js', 'React', 'Astro', 'Tailwind', 'Linux', 'Ansible', 'Argocd',
        'Lambda', 'EC2', 'EKS', 'RDS', 'S3'
    ];

    const processText = (input: string) => {
        const parts = input.split(/(\s+)/); // Split keeping whitespace

        return parts.map((part, index) => {
            // Check for numbers/stats
            if (/^[\d.,]+[%+]?$/.test(part) || /^\d+[kKmMbB]\+?$/.test(part)) {
                return <span key={index} className="text-secondary font-bold">{part}</span>;
            }

            // Check for tech terms (case insensitive match)
            const cleanPart = part.replace(/[.,;:]$/, ''); // remove punctuation for check
            if (TECH_TERMS.some(term => term.toLowerCase() === cleanPart.toLowerCase())) {
                return <span key={index} className="text-primary font-medium">{part}</span>;
            }

            return part;
        });
    };

    return <span>{processText(text)}</span>;
};
