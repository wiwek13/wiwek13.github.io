interface DevOpsIconProps {
	name: string;
	className?: string;
}

export default function DevOpsIcon({ name, className = "w-6 h-6" }: DevOpsIconProps) {
	const icons: Record<string, JSX.Element> = {
		cloud: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
			</svg>
		),
		kubernetes: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M10.5 0L13.5 0L13.5 3L10.5 3ZM10.5 21L13.5 21L13.5 24L10.5 24ZM0 10.5L0 13.5L3 13.5L3 10.5ZM21 10.5L21 13.5L24 13.5L24 10.5ZM6.5 3.5L8.5 5.5L6.5 7.5L4.5 5.5ZM15.5 16.5L17.5 18.5L19.5 16.5L17.5 14.5ZM3.5 17.5L5.5 15.5L7.5 17.5L5.5 19.5ZM20.5 6.5L18.5 4.5L16.5 6.5L18.5 8.5ZM12 5.5C13.38 5.5 14.5 6.62 14.5 8C14.5 9.38 13.38 10.5 12 10.5C10.62 10.5 9.5 9.38 9.5 8C9.5 6.62 10.62 5.5 12 5.5ZM12 13.5C13.38 13.5 14.5 14.62 14.5 16C14.5 17.38 13.38 18.5 12 18.5C10.62 18.5 9.5 17.38 9.5 16C9.5 14.62 10.62 13.5 12 13.5Z"/>
			</svg>
		),
		docker: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M13.983 12.262h2.119a.13.13 0 0 0 .13-.13V9.13a.13.13 0 0 0-.13-.13h-2.119a.13.13 0 0 0-.13.13v3.002a.13.13 0 0 0 .13.13zm-2.63-2.502h-2.12a.13.13 0 0 0-.13.13v3.002c0 .072.058.13.13.13h2.12a.13.13 0 0 0 .13-.13V9.89a.13.13 0 0 0-.13-.13zm5.26 0h-2.12a.13.13 0 0 0-.13.13v3.002c0 .072.058.13.13.13h2.12a.13.13 0 0 0 .13-.13V9.89a.13.13 0 0 0-.13-.13zm-2.63 2.502h-2.12a.13.13 0 0 0-.13.13v3.002c0 .072.058.13.13.13h2.12a.13.13 0 0 0 .13-.13v-3.002a.13.13 0 0 0-.13-.13zm-2.63 0H8.763a.13.13 0 0 0-.13.13v3.002c0 .072.058.13.13.13h2.12a.13.13 0 0 0 .13-.13v-3.002a.13.13 0 0 0-.13-.13zm-2.63-2.502H6.133a.13.13 0 0 0-.13.13v3.002c0 .072.058.13.13.13h2.12a.13.13 0 0 0 .13-.13V9.89a.13.13 0 0 0-.13-.13zm-2.63 2.502H3.503a.13.13 0 0 0-.13.13v3.002c0 .072.058.13.13.13h2.12a.13.13 0 0 0 .13-.13v-3.002a.13.13 0 0 0-.13-.13zm13.89-5.26V3.503a.13.13 0 0 0-.13-.13h-2.12a.13.13 0 0 0-.13.13v3.002c0 .072.058.13.13.13h2.12a.13.13 0 0 0 .13-.13zm-2.63 2.63v-2.12a.13.13 0 0 0-.13-.13h-2.12a.13.13 0 0 0-.13.13v2.12c0 .072.058.13.13.13h2.12a.13.13 0 0 0 .13-.13z"/>
			</svg>
		),
		terraform: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm0 2.328l8.16 4.715v9.434L12 21.672l-8.16-4.715V7.043L12 2.328zM5.76 8.16v7.68L12 19.68V12L5.76 8.16zm1.44.72L12 12.72v6.24l-4.8-2.784V8.88zm8.16-1.44v7.68L18.24 12V8.88l-4.88-2.64zm1.44.72v2.4l2.4 1.392v-2.4l-2.4-1.392z"/>
			</svg>
		),
		ci: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
			</svg>
		),
		monitor: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-2 2v1h8v-1l-2-2h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
			</svg>
		),
		code: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
			</svg>
		),
		database: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
			</svg>
		),
		tools: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
			</svg>
		),
		award: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		),
		education: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
			</svg>
		),
		user: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
			</svg>
		),
		lightbulb: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
			</svg>
		),
		rocket: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M2.81 14.12L5.64 11.3l8.49 8.49-2.83 2.83zm16.62-10.24l-2.83 2.83-8.49-8.49 2.83-2.83c.78-.78 2.05-.78 2.83 0l5.66 5.66c.78.78.78 2.05 0 2.83zM5.64 11.3L2.81 14.12l-1.41-1.41L4.23 9.89l1.41 1.41zm14.14-7.07l-5.66-5.66c-.78-.78-2.05-.78-2.83 0L9.89 4.23l8.49 8.49 1.41-1.41c.78-.78.78-2.05 0-2.83z"/>
			</svg>
		),
		chart: (
			<svg className={className} fill="currentColor" viewBox="0 0 24 24">
				<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
			</svg>
		),
	};

	return icons[name] || <div className={className} />;
}
