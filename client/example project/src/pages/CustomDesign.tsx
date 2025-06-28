import { useState, useEffect, useRef } from 'react';
import TabButton from '../components/TabButton';
import ColorPicker from '../components/ColorPicker';
import PreviewPane from '../components/PreviewPane';

const TABS = [
	{ key: 'colors', label: 'Colors' },
	{ key: 'typography', label: 'Typography' },
	{ key: 'layout', label: 'Layout' },
	{ key: 'effects', label: 'Effects' },
	{ key: 'background', label: 'Background' },
	{ key: 'presets', label: 'Presets' },
];

const COLOR_PROPERTIES = [
	{ key: 'primary', label: 'Primary', description: 'Main brand color for buttons and links' },
	{ key: 'secondary', label: 'Secondary', description: 'Supporting color for accents' },
	{ key: 'background', label: 'Background', description: 'Main page background' },
	{ key: 'navbar', label: 'Navbar', description: 'Navigation bar background' },
	{ key: 'sidebar', label: 'Sidebar', description: 'Sidebar background' },
	{ key: 'text', label: 'Text', description: 'Primary text color' },
	{ key: 'textSecondary', label: 'Text Secondary', description: 'Secondary text color' },
	{ key: 'button', label: 'Button', description: 'Button background color' },
	{ key: 'buttonText', label: 'Button Text', description: 'Button text color' },
	{ key: 'input', label: 'Input', description: 'Form input background' },
	{ key: 'link', label: 'Link', description: 'Link color' },
	{ key: 'accent', label: 'Accent', description: 'Highlight and accent color' },
	{ key: 'border', label: 'Border', description: 'Border color for elements' },
	{ key: 'shadow', label: 'Shadow', description: 'Shadow color for effects' },
];

const FONT_OPTIONS = [
	{ value: 'Arial, sans-serif', label: 'Arial' },
	{ value: 'Helvetica, sans-serif', label: 'Helvetica' },
	{ value: 'Georgia, serif', label: 'Georgia' },
	{ value: 'Times New Roman, serif', label: 'Times New Roman' },
	{ value: 'Verdana, sans-serif', label: 'Verdana' },
	{ value: 'Courier New, monospace', label: 'Courier New' },
	{ value: '"Open Sans", sans-serif', label: 'Open Sans' },
	{ value: '"Roboto", sans-serif', label: 'Roboto' },
	{ value: '"Lato", sans-serif', label: 'Lato' },
	{ value: '"Montserrat", sans-serif', label: 'Montserrat' },
];

const PRESETS = {
	light: {
		name: 'Light Theme',
		colors: {
			primary: '#2563eb',
			secondary: '#64748b',
			background: '#ffffff',
			navbar: '#f8fafc',
			sidebar: '#f1f5f9',
			text: '#0f172a',
			textSecondary: '#64748b',
			button: '#2563eb',
			buttonText: '#ffffff',
			input: '#f8fafc',
			link: '#3b82f6',
			accent: '#f59e42',
			border: '#e2e8f0',
			shadow: '#00000020',
		},
		typography: {
			fontFamily: '"Open Sans", sans-serif',
			fontSize: 16,
			headingFont: '"Montserrat", sans-serif',
			headingSize: 24,
			lineHeight: 1.6,
		},
		layout: {
			sidebarWidth: 250,
			navbarHeight: 64,
			contentPadding: 20,
			borderRadius: 8,
		},
		effects: {
			boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
			textShadow: 'none',
		},
		background: {
			type: 'color',
			value: '#ffffff',
		}
	},
	dark: {
		name: 'Dark Theme',
		colors: {
			primary: '#3b82f6',
			secondary: '#6b7280',
			background: '#111827',
			navbar: '#1f2937',
			sidebar: '#374151',
			text: '#f9fafb',
			textSecondary: '#d1d5db',
			button: '#3b82f6',
			buttonText: '#ffffff',
			input: '#374151',
			link: '#60a5fa',
			accent: '#fbbf24',
			border: '#4b5563',
			shadow: '#00000040',
		},
		typography: {
			fontFamily: '"Open Sans", sans-serif',
			fontSize: 16,
			headingFont: '"Montserrat", sans-serif',
			headingSize: 24,
			lineHeight: 1.6,
		},
		layout: {
			sidebarWidth: 250,
			navbarHeight: 64,
			contentPadding: 20,
			borderRadius: 8,
		},
		effects: {
			boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
			textShadow: 'none',
		},
		background: {
			type: 'color',
			value: '#111827',
		}
	},
	modern: {
		name: 'Modern Blue',
		colors: {
			primary: '#0ea5e9',
			secondary: '#8b5cf6',
			background: '#fafafa',
			navbar: '#0ea5e9',
			sidebar: '#f0f9ff',
			text: '#1e293b',
			textSecondary: '#64748b',
			button: '#0ea5e9',
			buttonText: '#ffffff',
			input: '#ffffff',
			link: '#0ea5e9',
			accent: '#f59e42',
			border: '#e2e8f0',
			shadow: '#0ea5e920',
		},
		typography: {
			fontFamily: '"Roboto", sans-serif',
			fontSize: 15,
			headingFont: '"Lato", sans-serif',
			headingSize: 26,
			lineHeight: 1.7,
		},
		layout: {
			sidebarWidth: 280,
			navbarHeight: 70,
			contentPadding: 24,
			borderRadius: 12,
		},
		effects: {
			boxShadow: '0 8px 25px rgba(14, 165, 233, 0.15)',
			textShadow: 'none',
		},
		background: {
			type: 'gradient',
			value: 'linear-gradient(135deg, #fafafa 0%, #f0f9ff 100%)',
		}
	}
};

const defaultSettings = {
	colors: PRESETS.light.colors,
	typography: PRESETS.light.typography,
	layout: PRESETS.light.layout,
	effects: PRESETS.light.effects,
	background: PRESETS.light.background,
};

// Utility functions
function downloadJSON(obj: any, filename: string) {
	const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}

function generateCSS(settings: any) {
	const { colors, typography, layout, effects, background } = settings;
	
	return `
/* Generated CSS from Design Tool */
:root {
	/* Colors */
	--color-primary: ${colors.primary};
	--color-secondary: ${colors.secondary};
	--color-background: ${colors.background};
	--color-navbar: ${colors.navbar};
	--color-sidebar: ${colors.sidebar};
	--color-text: ${colors.text};
	--color-text-secondary: ${colors.textSecondary};
	--color-button: ${colors.button};
	--color-button-text: ${colors.buttonText};
	--color-input: ${colors.input};
	--color-link: ${colors.link};
	--color-accent: ${colors.accent};
	--color-border: ${colors.border};
	--color-shadow: ${colors.shadow};
	
	/* Typography */
	--font-family: ${typography.fontFamily};
	--font-size: ${typography.fontSize}px;
	--heading-font: ${typography.headingFont};
	--heading-size: ${typography.headingSize}px;
	--line-height: ${typography.lineHeight};
	
	/* Layout */
	--sidebar-width: ${layout.sidebarWidth}px;
	--navbar-height: ${layout.navbarHeight}px;
	--content-padding: ${layout.contentPadding}px;
	--border-radius: ${layout.borderRadius}px;
	
	/* Effects */
	--box-shadow: ${effects.boxShadow};
	--text-shadow: ${effects.textShadow};
}

body {
	font-family: var(--font-family);
	font-size: var(--font-size);
	line-height: var(--line-height);
	color: var(--color-text);
	background: ${background.type === 'gradient' ? background.value : `var(--color-background)`};
	margin: 0;
	padding: 0;
}

h1, h2, h3, h4, h5, h6 {
	font-family: var(--heading-font);
	font-size: var(--heading-size);
	color: var(--color-text);
	text-shadow: var(--text-shadow);
}

.navbar {
	background-color: var(--color-navbar);
	height: var(--navbar-height);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
}

.sidebar {
	background-color: var(--color-sidebar);
	width: var(--sidebar-width);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
}

.main-content {
	padding: var(--content-padding);
	background-color: var(--color-background);
	border-radius: var(--border-radius);
}

button {
	background-color: var(--color-button);
	color: var(--color-button-text);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);
	padding: 8px 16px;
	font-family: var(--font-family);
}

input, textarea, select {
	background-color: var(--color-input);
	color: var(--color-text);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius);
	padding: 8px 12px;
	font-family: var(--font-family);
}

a {
	color: var(--color-link);
	text-decoration: none;
}

a:hover {
	color: var(--color-accent);
}

.card {
	background-color: var(--color-background);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);
	padding: var(--content-padding);
}
	`.trim();
}

const CustomDesignPage = () => {
	const [activeTab, setActiveTab] = useState('colors');
	const [settings, setSettings] = useState(() => {
		const saved = localStorage.getItem('custom-design-settings');
		return saved ? JSON.parse(saved) : defaultSettings;
	});
	const [previewEnabled, setPreviewEnabled] = useState(true);
	const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
	const [history, setHistory] = useState<any[]>([defaultSettings]);
	const [historyIndex, setHistoryIndex] = useState(0);
	const fileInputRef = useRef<HTMLInputElement>(null);

	// Save settings to localStorage whenever they change
	useEffect(() => {
		localStorage.setItem('custom-design-settings', JSON.stringify(settings));
	}, [settings]);

	// Add to history when settings change (for undo/redo)
	const updateSettings = (newSettings: any) => {
		setSettings(newSettings);
		const newHistory = history.slice(0, historyIndex + 1);
		newHistory.push(newSettings);
		setHistory(newHistory);
		setHistoryIndex(newHistory.length - 1);
	};

	// Undo functionality
	const handleUndo = () => {
		if (historyIndex > 0) {
			setHistoryIndex(historyIndex - 1);
			setSettings(history[historyIndex - 1]);
		}
	};

	// Redo functionality
	const handleRedo = () => {
		if (historyIndex < history.length - 1) {
			setHistoryIndex(historyIndex + 1);
			setSettings(history[historyIndex + 1]);
		}
	};

	// Reset to default settings
	const handleReset = () => {
		updateSettings(defaultSettings);
	};

	// Apply preset
	const handlePresetApply = (presetKey: string) => {
		const preset = PRESETS[presetKey as keyof typeof PRESETS];
		if (preset) {
			updateSettings({
				colors: preset.colors,
				typography: preset.typography,
				layout: preset.layout,
				effects: preset.effects,
				background: preset.background,
			});
		}
	};

	// Import settings from JSON file
	const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		
		const reader = new FileReader();
		reader.onload = (event) => {
			try {
				const imported = JSON.parse(event.target?.result as string);
				updateSettings(imported);
			} catch {
				alert('Invalid JSON file. Please check the file format.');
			}
		};
		reader.readAsText(file);
		
		// Reset file input
		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	// Export settings as JSON
	const handleExport = () => {
		downloadJSON(settings, 'design-settings.json');
	};

	// Export as CSS
	const handleExportCSS = () => {
		const css = generateCSS(settings);
		const blob = new Blob([css], { type: 'text/css' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'custom-styles.css';
		a.click();
		URL.revokeObjectURL(url);
	};

	// Copy settings to clipboard
	const handleCopy = () => {
		navigator.clipboard.writeText(JSON.stringify(settings, null, 2))
			.then(() => alert('Settings copied to clipboard!'))
			.catch(() => alert('Failed to copy to clipboard'));
	};

	// Update specific setting category
	const updateSettingCategory = (category: string, key: string, value: any) => {
		const newSettings = {
			...settings,
			[category]: {
				...settings[category],
				[key]: value
			}
		};
		updateSettings(newSettings);
	};

	// Handle background image upload
	const handleBackgroundImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		
		const reader = new FileReader();
		reader.onload = (event) => {
			const imageUrl = event.target?.result as string;
			updateSettingCategory('background', 'type', 'image');
			updateSettingCategory('background', 'value', imageUrl);
		};
		reader.readAsDataURL(file);
	};

	return (
		<div className="flex h-screen bg-gray-50">
			{/* Control Panel */}
			<div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
				<div className="p-4 border-b border-gray-200">
					<h1 className="text-xl font-bold text-gray-900">Design Tool</h1>
					<p className="text-sm text-gray-600 mt-1">Customize your website design</p>
				</div>

				{/* Action Buttons */}
				<div className="p-4 border-b border-gray-200">
					<div className="grid grid-cols-2 gap-2 mb-3">
						<button
							onClick={handleUndo}
							disabled={historyIndex <= 0}
							className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							↶ Undo
						</button>
						<button
							onClick={handleRedo}
							disabled={historyIndex >= history.length - 1}
							className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							↷ Redo
						</button>
					</div>
					<div className="grid grid-cols-2 gap-2 mb-3">
						<button
							onClick={handleReset}
							className="px-3 py-1.5 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
						>
							Reset
						</button>
						<button
							onClick={handleExportCSS}
							className="px-3 py-1.5 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200"
						>
							Export CSS
						</button>
					</div>
					<div className="grid grid-cols-3 gap-1">
						<button
							onClick={handleExport}
							className="px-2 py-1.5 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
						>
							Export
						</button>
						<label className="px-2 py-1.5 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 cursor-pointer text-center">
							Import
							<input
								ref={fileInputRef}
								type="file"
								accept="application/json"
								className="hidden"
								onChange={handleImport}
							/>
						</label>
						<button
							onClick={handleCopy}
							className="px-2 py-1.5 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
						>
							Copy
						</button>
					</div>
				</div>

				{/* Tabs */}
				<div className="border-b border-gray-200">
					<div className="flex flex-wrap">
						{TABS.map(tab => (
							<button
								key={tab.key}
								onClick={() => setActiveTab(tab.key)}
								className={`px-3 py-2 text-sm font-medium border-b-2 ${
									activeTab === tab.key
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:text-gray-700'
								}`}
							>
								{tab.label}
							</button>
						))}
					</div>
				</div>

				{/* Tab Content */}
				<div className="p-4">
					{activeTab === 'colors' && (
						<div className="space-y-4">
							<h3 className="font-semibold text-gray-900">Color Palette</h3>
							{COLOR_PROPERTIES.map(prop => (
								<div key={prop.key} className="space-y-2">
									<label className="block text-sm font-medium text-gray-700">
										{prop.label}
										<span className="text-xs text-gray-500 block">{prop.description}</span>
									</label>
									<ColorPicker
										value={settings.colors[prop.key] || ''}
										onChange={color => updateSettingCategory('colors', prop.key, color)}
									/>
								</div>
							))}
						</div>
					)}

					{activeTab === 'typography' && (
						<div className="space-y-4">
							<h3 className="font-semibold text-gray-900">Typography</h3>
							
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Body Font Family
								</label>
								<select
									value={settings.typography.fontFamily}
									onChange={e => updateSettingCategory('typography', 'fontFamily', e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
								>
									{FONT_OPTIONS.map(font => (
										<option key={font.value} value={font.value}>{font.label}</option>
									))}
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Body Font Size: {settings.typography.fontSize}px
								</label>
								<input
									type="range"
									min="12"
									max="24"
									value={settings.typography.fontSize}
									onChange={e => updateSettingCategory('typography', 'fontSize', parseInt(e.target.value))}
									className="w-full"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Heading Font Family
								</label>
								<select
									value={settings.typography.headingFont}
									onChange={e => updateSettingCategory('typography', 'headingFont', e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
								>
									{FONT_OPTIONS.map(font => (
										<option key={font.value} value={font.value}>{font.label}</option>
									))}
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Heading Font Size: {settings.typography.headingSize}px
								</label>
								<input
									type="range"
									min="18"
									max="36"
									value={settings.typography.headingSize}
									onChange={e => updateSettingCategory('typography', 'headingSize', parseInt(e.target.value))}
									className="w-full"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Line Height: {settings.typography.lineHeight}
								</label>
								<input
									type="range"
									min="1.2"
									max="2.0"
									step="0.1"
									value={settings.typography.lineHeight}
									onChange={e => updateSettingCategory('typography', 'lineHeight', parseFloat(e.target.value))}
									className="w-full"
								/>
							</div>
						</div>
					)}

					{activeTab === 'layout' && (
						<div className="space-y-4">
							<h3 className="font-semibold text-gray-900">Layout Settings</h3>
							
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Sidebar Width: {settings.layout.sidebarWidth}px
								</label>
								<input
									type="range"
									min="200"
									max="400"
									value={settings.layout.sidebarWidth}
									onChange={e => updateSettingCategory('layout', 'sidebarWidth', parseInt(e.target.value))}
									className="w-full"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Navbar Height: {settings.layout.navbarHeight}px
								</label>
								<input
									type="range"
									min="50"
									max="100"
									value={settings.layout.navbarHeight}
									onChange={e => updateSettingCategory('layout', 'navbarHeight', parseInt(e.target.value))}
									className="w-full"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Content Padding: {settings.layout.contentPadding}px
								</label>
								<input
									type="range"
									min="10"
									max="50"
									value={settings.layout.contentPadding}
									onChange={e => updateSettingCategory('layout', 'contentPadding', parseInt(e.target.value))}
									className="w-full"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Border Radius: {settings.layout.borderRadius}px
								</label>
								<input
									type="range"
									min="0"
									max="20"
									value={settings.layout.borderRadius}
									onChange={e => updateSettingCategory('layout', 'borderRadius', parseInt(e.target.value))}
									className="w-full"
								/>
							</div>
						</div>
					)}

					{activeTab === 'effects' && (
						<div className="space-y-4">
							<h3 className="font-semibold text-gray-900">Visual Effects</h3>
							
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Box Shadow
								</label>
								<select
									value={settings.effects.boxShadow}
									onChange={e => updateSettingCategory('effects', 'boxShadow', e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
								>
									<option value="none">None</option>
									<option value="0 1px 3px rgba(0, 0, 0, 0.1)">Small</option>
									<option value="0 4px 6px rgba(0, 0, 0, 0.1)">Medium</option>
									<option value="0 10px 15px rgba(0, 0, 0, 0.1)">Large</option>
									<option value="0 20px 25px rgba(0, 0, 0, 0.1)">Extra Large</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Text Shadow
								</label>
								<select
									value={settings.effects.textShadow}
									onChange={e => updateSettingCategory('effects', 'textShadow', e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
								>
									<option value="none">None</option>
									<option value="1px 1px 2px rgba(0, 0, 0, 0.1)">Subtle</option>
									<option value="2px 2px 4px rgba(0, 0, 0, 0.2)">Medium</option>
									<option value="3px 3px 6px rgba(0, 0, 0, 0.3)">Strong</option>
								</select>
							</div>
						</div>
					)}

					{activeTab === 'background' && (
						<div className="space-y-4">
							<h3 className="font-semibold text-gray-900">Background</h3>
							
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Background Type
								</label>
								<select
									value={settings.background.type}
									onChange={e => updateSettingCategory('background', 'type', e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
								>
									<option value="color">Solid Color</option>
									<option value="gradient">Gradient</option>
									<option value="image">Image</option>
								</select>
							</div>

							{settings.background.type === 'color' && (
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Background Color
									</label>
									<ColorPicker
										value={settings.background.value}
										onChange={color => updateSettingCategory('background', 'value', color)}
									/>
								</div>
							)}

							{settings.background.type === 'gradient' && (
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Gradient
									</label>
									<select
										value={settings.background.value}
										onChange={e => updateSettingCategory('background', 'value', e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
									>
										<option value="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">Blue Purple</option>
										<option value="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">Pink Red</option>
										<option value="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">Blue Cyan</option>
										<option value="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)">Green Cyan</option>
										<option value="linear-gradient(135deg, #fa709a 0%, #fee140 100%)">Pink Yellow</option>
									</select>
								</div>
							)}

							{settings.background.type === 'image' && (
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Upload Background Image
									</label>
									<input
										type="file"
										accept="image/*"
										onChange={handleBackgroundImageUpload}
										className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
									/>
								</div>
							)}
						</div>
					)}

					{activeTab === 'presets' && (
						<div className="space-y-4">
							<h3 className="font-semibold text-gray-900">Design Presets</h3>
							<p className="text-sm text-gray-600">Apply pre-configured design themes</p>
							
							{Object.entries(PRESETS).map(([key, preset]) => (
								<div key={key} className="border border-gray-200 rounded-lg p-3">
									<h4 className="font-medium text-gray-900 mb-2">{preset.name}</h4>
									<div className="flex space-x-2 mb-3">
										{Object.values(preset.colors).slice(0, 5).map((color, index) => (
											<div
												key={index}
												className="w-6 h-6 rounded border border-gray-300"
												style={{ backgroundColor: color }}
											/>
										))}
									</div>
									<button
										onClick={() => handlePresetApply(key)}
										className="w-full px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
									>
										Apply {preset.name}
									</button>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Preview Pane */}
			<div className="flex-1 flex flex-col">
				{/* Preview Controls */}
				<div className="bg-white border-b border-gray-200 p-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-4">
							<h2 className="font-semibold text-gray-900">Preview</h2>
							<label className="flex items-center space-x-2">
								<input
									type="checkbox"
									checked={previewEnabled}
									onChange={e => setPreviewEnabled(e.target.checked)}
									className="rounded"
								/>
								<span className="text-sm text-gray-600">Enable Preview</span>
							</label>
						</div>
						
						<div className="flex items-center space-x-2">
							<span className="text-sm text-gray-600">Device:</span>
							{(['desktop', 'tablet', 'mobile'] as const).map(device => (
								<button
									key={device}
									onClick={() => setDeviceView(device)}
									className={`px-3 py-1 text-sm rounded ${
										deviceView === device
											? 'bg-blue-600 text-white'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
									}`}
								>
									{device.charAt(0).toUpperCase() + device.slice(1)}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Preview Content */}
				<div className="flex-1 bg-gray-100 p-4">
					<PreviewPane
						settings={settings}
						enabled={previewEnabled}
						deviceView={deviceView}
					/>
				</div>
			</div>
		</div>
	);
};

export default CustomDesignPage;