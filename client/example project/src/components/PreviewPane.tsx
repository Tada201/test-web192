import { useEffect, useRef } from 'react';

interface PreviewPaneProps {
	settings: any;
	enabled: boolean;
	deviceView: 'desktop' | 'tablet' | 'mobile';
}

const PreviewPane = ({ settings, enabled, deviceView }: PreviewPaneProps) => {
	const iframeRef = useRef<HTMLIFrameElement>(null);

	// Device dimensions
	const deviceDimensions = {
		desktop: { width: '100%', height: '100%' },
		tablet: { width: '768px', height: '1024px' },
		mobile: { width: '375px', height: '667px' },
	};

	// Generate the sample HTML content
	const generateSampleHTML = () => {
		const { colors, typography, layout, effects, background } = settings;
		
		const css = `
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
			
			body {
				font-family: ${typography.fontFamily};
				font-size: ${typography.fontSize}px;
				line-height: ${typography.lineHeight};
				color: ${colors.text};
				background: ${background.type === 'gradient' ? background.value : 
					background.type === 'image' ? `url(${background.value}) center/cover` : 
					colors.background};
				min-height: 100vh;
				display: flex;
				flex-direction: column;
			}
			
			.navbar {
				background-color: ${colors.navbar};
				height: ${layout.navbarHeight}px;
				display: flex;
				align-items: center;
				padding: 0 ${layout.contentPadding}px;
				box-shadow: ${effects.boxShadow};
				border-radius: ${layout.borderRadius}px;
				margin-bottom: 10px;
				color: ${colors.text};
				font-weight: 600;
			}
			
			.main-container {
				display: flex;
				flex: 1;
				gap: 10px;
				padding: 0 10px;
			}
			
			.sidebar {
				background-color: ${colors.sidebar};
				width: ${layout.sidebarWidth}px;
				min-width: ${layout.sidebarWidth}px;
				padding: ${layout.contentPadding}px;
				box-shadow: ${effects.boxShadow};
				border-radius: ${layout.borderRadius}px;
				color: ${colors.text};
			}
			
			.main-content {
				flex: 1;
				padding: ${layout.contentPadding}px;
				background-color: ${colors.background};
				border-radius: ${layout.borderRadius}px;
				box-shadow: ${effects.boxShadow};
				border: 1px solid ${colors.border};
			}
			
			h1, h2, h3 {
				font-family: ${typography.headingFont};
				font-size: ${typography.headingSize}px;
				color: ${colors.text};
				text-shadow: ${effects.textShadow};
				margin-bottom: 16px;
			}
			
			h2 {
				font-size: ${typography.headingSize * 0.8}px;
			}
			
			h3 {
				font-size: ${typography.headingSize * 0.7}px;
			}
			
			p {
				margin-bottom: 12px;
				color: ${colors.textSecondary};
			}
			
			.button {
				background-color: ${colors.button};
				color: ${colors.buttonText};
				border: 1px solid ${colors.border};
				border-radius: ${layout.borderRadius}px;
				padding: 8px 16px;
				font-family: ${typography.fontFamily};
				cursor: pointer;
				box-shadow: ${effects.boxShadow};
				margin: 4px;
				display: inline-block;
				text-decoration: none;
			}
			
			.button:hover {
				background-color: ${colors.accent};
				transform: translateY(-1px);
			}
			
			.input {
				background-color: ${colors.input};
				color: ${colors.text};
				border: 1px solid ${colors.border};
				border-radius: ${layout.borderRadius}px;
				padding: 8px 12px;
				font-family: ${typography.fontFamily};
				width: 100%;
				margin-bottom: 12px;
			}
			
			.link {
				color: ${colors.link};
				text-decoration: none;
			}
			
			.link:hover {
				color: ${colors.accent};
				text-decoration: underline;
			}
			
			.card {
				background-color: ${colors.background};
				border: 1px solid ${colors.border};
				border-radius: ${layout.borderRadius}px;
				box-shadow: ${effects.boxShadow};
				padding: ${layout.contentPadding}px;
				margin-bottom: 16px;
			}
			
			.nav-item {
				padding: 8px 12px;
				margin-bottom: 4px;
				border-radius: ${layout.borderRadius}px;
				cursor: pointer;
				transition: background-color 0.2s;
			}
			
			.nav-item:hover {
				background-color: ${colors.accent}20;
			}
			
			.nav-item.active {
				background-color: ${colors.primary};
				color: ${colors.buttonText};
			}
			
			/* Responsive adjustments */
			@media (max-width: 768px) {
				.main-container {
					flex-direction: column;
				}
				
				.sidebar {
					width: 100%;
					min-width: auto;
				}
			}

			/* NOTE: If you add dynamic content (ads, popups, banners), always reserve space with a fixed-size container to avoid layout shift (CLS). */
			/* NOTE: Only use transform/opacity for CSS animations to avoid layout shift. */
		`;

		return `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Design Preview</title>
				<style>${css}</style>
			</head>
			<body>
				<div class="navbar">
					<div>🌟 Website Navbar</div>
				</div>
				
				<div class="main-container">
					<div class="sidebar">
						<h3>Sidebar</h3>
						<div class="nav-item active">🏠 Home</div>
						<div class="nav-item">📄 About</div>
						<div class="nav-item">📞 Contact</div>
						<div class="nav-item">⚙️ Settings</div>
						<div class="nav-item">📊 Analytics</div>
					</div>
					
					<div class="main-content">
						<h1>Main Content Area</h1>
						<p>This is a preview of your website design. You can see how your color choices, typography, and layout settings affect the overall appearance.</p>
						
						<div class="card">
							<h2>Sample Card Component</h2>
							<p>This card demonstrates how your design settings apply to different elements. The colors, shadows, and border radius are all customizable.</p>
							<a href="#" class="link">Sample Link</a>
						</div>
						
						<div class="card">
							<h3>Form Elements</h3>
							<input type="text" class="input" placeholder="Sample input field" />
							<button class="button">Primary Button</button>
							<button class="button">Secondary Button</button>
						</div>
						
						<div class="card">
							<h3>Typography Sample</h3>
							<p>This paragraph shows how your typography settings affect readability. The font family, size, and line height all contribute to the overall reading experience.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>
			</body>
			</html>
		`;
	};

	// Update iframe content when settings change
	useEffect(() => {
		if (!enabled || !iframeRef.current) return;

		const iframe = iframeRef.current;
		const doc = iframe.contentDocument || iframe.contentWindow?.document;
		
		if (doc) {
			doc.open();
			doc.write(generateSampleHTML());
			doc.close();
		}
	}, [settings, enabled]);

	if (!enabled) {
		return (
			<div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
				<div className="text-center text-gray-500">
					<div className="text-4xl mb-4">👁️</div>
					<p>Preview is disabled</p>
					<p className="text-sm">Enable preview to see your changes</p>
				</div>
			</div>
		);
	}

	const dimensions = deviceDimensions[deviceView];

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div 
				className="bg-white rounded-lg shadow-lg overflow-hidden"
				style={{
					width: dimensions.width,
					height: dimensions.height,
					maxWidth: '100%',
					maxHeight: '100%',
					transform: deviceView !== 'desktop' ? 'scale(0.8)' : 'none',
					transformOrigin: 'center center'
				}}
			>
				<iframe
					ref={iframeRef}
					className="w-full h-full border-0"
					sandbox="allow-scripts allow-same-origin"
					title="Design Preview"
				/>
			</div>
		</div>
	);
};

export default PreviewPane;