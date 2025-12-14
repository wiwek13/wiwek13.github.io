import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
	chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
	const mermaidRef = useRef<HTMLDivElement>(null);
	const initialized = useRef(false);

	useEffect(() => {
		if (!initialized.current) {
			mermaid.initialize({
				startOnLoad: false,
				theme: 'dark',
				themeVariables: {
					primaryColor: '#6366f1',
					primaryTextColor: '#e2e8f0',
					primaryBorderColor: '#4f46e5',
					lineColor: '#8b5cf6',
					secondaryColor: '#1e1b4b',
					tertiaryColor: '#312e81',
					background: '#0f172a',
					mainBkg: '#1e293b',
					secondBkg: '#334155',
					textColor: '#e2e8f0',
				},
				securityLevel: 'loose',
			});
			initialized.current = true;
		}

		if (mermaidRef.current) {
			const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`;
			mermaidRef.current.id = id;
			mermaidRef.current.textContent = chart;

			mermaid.run({
				nodes: [mermaidRef.current],
			}).catch((err) => {
				console.error('Mermaid rendering error:', err);
			});
		}
	}, [chart]);

	return <div ref={mermaidRef} className="mermaid bg-slate-950 rounded-lg p-4 overflow-x-auto min-h-[200px]" />;
}
