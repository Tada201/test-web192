"use strict";
exports.id = 162;
exports.ids = [162];
exports.modules = {

/***/ 1893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const PreviewPane = ({ settings, enabled, deviceView }) => {
  const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const deviceDimensions = {
    desktop: { width: "100%", height: "100%" },
    tablet: { width: "768px", height: "1024px" },
    mobile: { width: "375px", height: "667px" }
  };
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
				background: ${background.type === "gradient" ? background.value : background.type === "image" ? `url(${background.value}) center/cover` : colors.background};
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
					<div>\u{1F31F} Website Navbar</div>
				</div>
				
				<div class="main-container">
					<div class="sidebar">
						<h3>Sidebar</h3>
						<div class="nav-item active">\u{1F3E0} Home</div>
						<div class="nav-item">\u{1F4C4} About</div>
						<div class="nav-item">\u{1F4DE} Contact</div>
						<div class="nav-item">\u2699\uFE0F Settings</div>
						<div class="nav-item">\u{1F4CA} Analytics</div>
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a;
    if (!enabled || !iframeRef.current) return;
    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || ((_a = iframe.contentWindow) == null ? void 0 : _a.document);
    if (doc) {
      doc.open();
      doc.write(generateSampleHTML());
      doc.close();
    }
  }, [settings, enabled]);
  if (!enabled) {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full h-full flex items-center justify-center bg-gray-200 rounded-lg" }, /* @__PURE__ */ React.createElement("div", { className: "text-center text-gray-500" }, /* @__PURE__ */ React.createElement("div", { className: "text-4xl mb-4" }, "\u{1F441}\uFE0F"), /* @__PURE__ */ React.createElement("p", null, "Preview is disabled"), /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Enable preview to see your changes")));
  }
  const dimensions = deviceDimensions[deviceView];
  return /* @__PURE__ */ React.createElement("div", { className: "w-full h-full flex items-center justify-center" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "bg-white rounded-lg shadow-lg overflow-hidden",
      style: {
        width: dimensions.width,
        height: dimensions.height,
        maxWidth: "100%",
        maxHeight: "100%",
        transform: deviceView !== "desktop" ? "scale(0.8)" : "none",
        transformOrigin: "center center"
      }
    },
    /* @__PURE__ */ React.createElement(
      "iframe",
      {
        ref: iframeRef,
        className: "w-full h-full border-0",
        sandbox: "allow-scripts allow-same-origin",
        title: "Design Preview"
      }
    )
  ));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewPane);


/***/ }),

/***/ 21743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const PRESET_SWATCHES = [
  "#2563eb",
  "#1d4ed8",
  "#f59e42",
  "#f43f5e",
  "#10b981",
  "#fbbf24",
  "#a21caf",
  "#eab308",
  "#0ea5e9",
  "#64748b",
  "#f87171",
  "#34d399",
  "#f472b6",
  "#facc15",
  "#6366f1",
  "#14b8a6",
  "#f97316",
  "#3b82f6",
  "#e11d48",
  "#22d3ee",
  "#ffffff",
  "#f8fafc",
  "#f1f5f9",
  "#e2e8f0",
  "#cbd5e1",
  "#94a3b8",
  "#64748b",
  "#475569",
  "#334155",
  "#1e293b",
  "#0f172a",
  "#000000"
];
const ColorSwatch = ({ color, onSelect, isSelected }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "button",
  {
    className: `w-7 h-7 rounded border-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${isSelected ? "border-blue-500 scale-110" : "border-gray-300 hover:border-gray-400"}`,
    style: { background: color },
    onClick: () => onSelect(color),
    "aria-label": `Select color ${color}`,
    type: "button"
  }
);
const ColorPicker = ({ value, onChange }) => {
  const [showAdvanced, setShowAdvanced] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "grid grid-cols-8 gap-2" }, PRESET_SWATCHES.map((swatch, idx) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    ColorSwatch,
    {
      key: swatch + "-" + idx,
      color: swatch,
      onSelect: onChange,
      isSelected: value.toLowerCase() === swatch.toLowerCase()
    }
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      type: "button",
      onClick: () => setShowAdvanced(!showAdvanced),
      className: "text-sm text-blue-600 hover:text-blue-800 font-medium"
    },
    showAdvanced ? "\u25BC Hide Advanced" : "\u25B6 Show Advanced"
  ), showAdvanced && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "space-y-2 p-3 bg-gray-50 rounded-md" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "text-sm font-medium text-gray-700 min-w-[60px]" }, "Color:"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "input",
    {
      type: "color",
      value,
      onChange: (e) => onChange(e.target.value),
      className: "w-12 h-8 border border-gray-300 rounded cursor-pointer",
      "aria-label": "Color picker"
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "input",
    {
      type: "text",
      value,
      onChange: (e) => onChange(e.target.value),
      className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm font-mono",
      "aria-label": "Hex color value",
      placeholder: "#2563eb",
      pattern: "^#[0-9A-Fa-f]{6}$"
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-xs text-gray-500" }, "Supports hex colors (e.g., #2563eb) and CSS color names (e.g., blue)")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPicker);


/***/ }),

/***/ 58601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21743);
/* harmony import */ var _components_PreviewPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1893);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));



const TABS = [
  { key: "colors", label: "Colors" },
  { key: "typography", label: "Typography" },
  { key: "layout", label: "Layout" },
  { key: "effects", label: "Effects" },
  { key: "background", label: "Background" },
  { key: "presets", label: "Presets" }
];
const COLOR_PROPERTIES = [
  { key: "primary", label: "Primary", description: "Main brand color for buttons and links" },
  { key: "secondary", label: "Secondary", description: "Supporting color for accents" },
  { key: "background", label: "Background", description: "Main page background" },
  { key: "navbar", label: "Navbar", description: "Navigation bar background" },
  { key: "sidebar", label: "Sidebar", description: "Sidebar background" },
  { key: "text", label: "Text", description: "Primary text color" },
  { key: "textSecondary", label: "Text Secondary", description: "Secondary text color" },
  { key: "button", label: "Button", description: "Button background color" },
  { key: "buttonText", label: "Button Text", description: "Button text color" },
  { key: "input", label: "Input", description: "Form input background" },
  { key: "link", label: "Link", description: "Link color" },
  { key: "accent", label: "Accent", description: "Highlight and accent color" },
  { key: "border", label: "Border", description: "Border color for elements" },
  { key: "shadow", label: "Shadow", description: "Shadow color for effects" }
];
const FONT_OPTIONS = [
  { value: "Arial, sans-serif", label: "Arial" },
  { value: "Helvetica, sans-serif", label: "Helvetica" },
  { value: "Georgia, serif", label: "Georgia" },
  { value: "Times New Roman, serif", label: "Times New Roman" },
  { value: "Verdana, sans-serif", label: "Verdana" },
  { value: "Courier New, monospace", label: "Courier New" },
  { value: '"Open Sans", sans-serif', label: "Open Sans" },
  { value: '"Roboto", sans-serif', label: "Roboto" },
  { value: '"Lato", sans-serif', label: "Lato" },
  { value: '"Montserrat", sans-serif', label: "Montserrat" }
];
const PRESETS = {
  light: {
    name: "Light Theme",
    colors: {
      primary: "#2563eb",
      secondary: "#64748b",
      background: "#ffffff",
      navbar: "#f8fafc",
      sidebar: "#f1f5f9",
      text: "#0f172a",
      textSecondary: "#64748b",
      button: "#2563eb",
      buttonText: "#ffffff",
      input: "#f8fafc",
      link: "#3b82f6",
      accent: "#f59e42",
      border: "#e2e8f0",
      shadow: "#00000020"
    },
    typography: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 16,
      headingFont: '"Montserrat", sans-serif',
      headingSize: 24,
      lineHeight: 1.6
    },
    layout: {
      sidebarWidth: 250,
      navbarHeight: 64,
      contentPadding: 20,
      borderRadius: 8
    },
    effects: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textShadow: "none"
    },
    background: {
      type: "color",
      value: "#ffffff"
    }
  },
  dark: {
    name: "Dark Theme",
    colors: {
      primary: "#3b82f6",
      secondary: "#6b7280",
      background: "#111827",
      navbar: "#1f2937",
      sidebar: "#374151",
      text: "#f9fafb",
      textSecondary: "#d1d5db",
      button: "#3b82f6",
      buttonText: "#ffffff",
      input: "#374151",
      link: "#60a5fa",
      accent: "#fbbf24",
      border: "#4b5563",
      shadow: "#00000040"
    },
    typography: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 16,
      headingFont: '"Montserrat", sans-serif',
      headingSize: 24,
      lineHeight: 1.6
    },
    layout: {
      sidebarWidth: 250,
      navbarHeight: 64,
      contentPadding: 20,
      borderRadius: 8
    },
    effects: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
      textShadow: "none"
    },
    background: {
      type: "color",
      value: "#111827"
    }
  },
  modern: {
    name: "Modern Blue",
    colors: {
      primary: "#0ea5e9",
      secondary: "#8b5cf6",
      background: "#fafafa",
      navbar: "#0ea5e9",
      sidebar: "#f0f9ff",
      text: "#1e293b",
      textSecondary: "#64748b",
      button: "#0ea5e9",
      buttonText: "#ffffff",
      input: "#ffffff",
      link: "#0ea5e9",
      accent: "#f59e42",
      border: "#e2e8f0",
      shadow: "#0ea5e920"
    },
    typography: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: 15,
      headingFont: '"Lato", sans-serif',
      headingSize: 26,
      lineHeight: 1.7
    },
    layout: {
      sidebarWidth: 280,
      navbarHeight: 70,
      contentPadding: 24,
      borderRadius: 12
    },
    effects: {
      boxShadow: "0 8px 25px rgba(14, 165, 233, 0.15)",
      textShadow: "none"
    },
    background: {
      type: "gradient",
      value: "linear-gradient(135deg, #fafafa 0%, #f0f9ff 100%)"
    }
  }
};
const defaultSettings = {
  colors: PRESETS.light.colors,
  typography: PRESETS.light.typography,
  layout: PRESETS.light.layout,
  effects: PRESETS.light.effects,
  background: PRESETS.light.background
};
function downloadJSON(obj, filename) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
function generateCSS(settings) {
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
	background: ${background.type === "gradient" ? background.value : `var(--color-background)`};
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
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("colors");
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    const saved = localStorage.getItem("custom-design-settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });
  const [previewEnabled, setPreviewEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [deviceView, setDeviceView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("desktop");
  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([defaultSettings]);
  const [historyIndex, setHistoryIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem("custom-design-settings", JSON.stringify(settings));
  }, [settings]);
  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newSettings);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setSettings(history[historyIndex - 1]);
    }
  };
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setSettings(history[historyIndex + 1]);
    }
  };
  const handleReset = () => {
    updateSettings(defaultSettings);
  };
  const handlePresetApply = (presetKey) => {
    const preset = PRESETS[presetKey];
    if (preset) {
      updateSettings({
        colors: preset.colors,
        typography: preset.typography,
        layout: preset.layout,
        effects: preset.effects,
        background: preset.background
      });
    }
  };
  const handleImport = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      var _a2;
      try {
        const imported = JSON.parse((_a2 = event.target) == null ? void 0 : _a2.result);
        updateSettings(imported);
      } catch (e2) {
        alert("Invalid JSON file. Please check the file format.");
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleExport = () => {
    downloadJSON(settings, "design-settings.json");
  };
  const handleExportCSS = () => {
    const css = generateCSS(settings);
    const blob = new Blob([css], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "custom-styles.css";
    a.click();
    URL.revokeObjectURL(url);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(settings, null, 2)).then(() => alert("Settings copied to clipboard!")).catch(() => alert("Failed to copy to clipboard"));
  };
  const updateSettingCategory = (category, key, value) => {
    const newSettings = __spreadProps(__spreadValues({}, settings), {
      [category]: __spreadProps(__spreadValues({}, settings[category]), {
        [key]: value
      })
    });
    updateSettings(newSettings);
  };
  const handleBackgroundImageUpload = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      var _a2;
      const imageUrl = (_a2 = event.target) == null ? void 0 : _a2.result;
      updateSettingCategory("background", "type", "image");
      updateSettingCategory("background", "value", imageUrl);
    };
    reader.readAsDataURL(file);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "flex h-screen bg-gray-50" }, /* @__PURE__ */ React.createElement("div", { className: "w-80 bg-white border-r border-gray-200 overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 border-b border-gray-200" }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-bold text-gray-900" }, "Design Tool"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 mt-1" }, "Customize your website design")), /* @__PURE__ */ React.createElement("div", { className: "p-4 border-b border-gray-200" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2 mb-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleUndo,
      disabled: historyIndex <= 0,
      className: "px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
    },
    "\u21B6 Undo"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleRedo,
      disabled: historyIndex >= history.length - 1,
      className: "px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
    },
    "\u21B7 Redo"
  )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2 mb-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleReset,
      className: "px-3 py-1.5 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
    },
    "Reset"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleExportCSS,
      className: "px-3 py-1.5 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200"
    },
    "Export CSS"
  )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-1" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleExport,
      className: "px-2 py-1.5 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
    },
    "Export"
  ), /* @__PURE__ */ React.createElement("label", { className: "px-2 py-1.5 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 cursor-pointer text-center" }, "Import", /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: fileInputRef,
      type: "file",
      accept: "application/json",
      className: "hidden",
      onChange: handleImport
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleCopy,
      className: "px-2 py-1.5 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
    },
    "Copy"
  ))), /* @__PURE__ */ React.createElement("div", { className: "border-b border-gray-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap" }, TABS.map((tab) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: tab.key,
      onClick: () => setActiveTab(tab.key),
      className: `px-3 py-2 text-sm font-medium border-b-2 ${activeTab === tab.key ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`
    },
    tab.label
  )))), /* @__PURE__ */ React.createElement("div", { className: "p-4" }, activeTab === "colors" && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Color Palette"), COLOR_PROPERTIES.map((prop) => /* @__PURE__ */ React.createElement("div", { key: prop.key, className: "space-y-2" }, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700" }, prop.label, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-gray-500 block" }, prop.description)), /* @__PURE__ */ React.createElement(
    _components_ColorPicker__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      value: settings.colors[prop.key] || "",
      onChange: (color) => updateSettingCategory("colors", prop.key, color)
    }
  )))), activeTab === "typography" && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Typography"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Body Font Family"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: settings.typography.fontFamily,
      onChange: (e) => updateSettingCategory("typography", "fontFamily", e.target.value),
      className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
    },
    FONT_OPTIONS.map((font) => /* @__PURE__ */ React.createElement("option", { key: font.value, value: font.value }, font.label))
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Body Font Size: ", settings.typography.fontSize, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "12",
      max: "24",
      value: settings.typography.fontSize,
      onChange: (e) => updateSettingCategory("typography", "fontSize", parseInt(e.target.value)),
      className: "w-full"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Heading Font Family"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: settings.typography.headingFont,
      onChange: (e) => updateSettingCategory("typography", "headingFont", e.target.value),
      className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
    },
    FONT_OPTIONS.map((font) => /* @__PURE__ */ React.createElement("option", { key: font.value, value: font.value }, font.label))
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Heading Font Size: ", settings.typography.headingSize, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "18",
      max: "36",
      value: settings.typography.headingSize,
      onChange: (e) => updateSettingCategory("typography", "headingSize", parseInt(e.target.value)),
      className: "w-full"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Line Height: ", settings.typography.lineHeight), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "1.2",
      max: "2.0",
      step: "0.1",
      value: settings.typography.lineHeight,
      onChange: (e) => updateSettingCategory("typography", "lineHeight", parseFloat(e.target.value)),
      className: "w-full"
    }
  ))), activeTab === "layout" && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Layout Settings"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Sidebar Width: ", settings.layout.sidebarWidth, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "200",
      max: "400",
      value: settings.layout.sidebarWidth,
      onChange: (e) => updateSettingCategory("layout", "sidebarWidth", parseInt(e.target.value)),
      className: "w-full"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Navbar Height: ", settings.layout.navbarHeight, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "50",
      max: "100",
      value: settings.layout.navbarHeight,
      onChange: (e) => updateSettingCategory("layout", "navbarHeight", parseInt(e.target.value)),
      className: "w-full"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Content Padding: ", settings.layout.contentPadding, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "10",
      max: "50",
      value: settings.layout.contentPadding,
      onChange: (e) => updateSettingCategory("layout", "contentPadding", parseInt(e.target.value)),
      className: "w-full"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Border Radius: ", settings.layout.borderRadius, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "20",
      value: settings.layout.borderRadius,
      onChange: (e) => updateSettingCategory("layout", "borderRadius", parseInt(e.target.value)),
      className: "w-full"
    }
  ))), activeTab === "effects" && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Visual Effects"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Box Shadow"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: settings.effects.boxShadow,
      onChange: (e) => updateSettingCategory("effects", "boxShadow", e.target.value),
      className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
    },
    /* @__PURE__ */ React.createElement("option", { value: "none" }, "None"),
    /* @__PURE__ */ React.createElement("option", { value: "0 1px 3px rgba(0, 0, 0, 0.1)" }, "Small"),
    /* @__PURE__ */ React.createElement("option", { value: "0 4px 6px rgba(0, 0, 0, 0.1)" }, "Medium"),
    /* @__PURE__ */ React.createElement("option", { value: "0 10px 15px rgba(0, 0, 0, 0.1)" }, "Large"),
    /* @__PURE__ */ React.createElement("option", { value: "0 20px 25px rgba(0, 0, 0, 0.1)" }, "Extra Large")
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Text Shadow"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: settings.effects.textShadow,
      onChange: (e) => updateSettingCategory("effects", "textShadow", e.target.value),
      className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
    },
    /* @__PURE__ */ React.createElement("option", { value: "none" }, "None"),
    /* @__PURE__ */ React.createElement("option", { value: "1px 1px 2px rgba(0, 0, 0, 0.1)" }, "Subtle"),
    /* @__PURE__ */ React.createElement("option", { value: "2px 2px 4px rgba(0, 0, 0, 0.2)" }, "Medium"),
    /* @__PURE__ */ React.createElement("option", { value: "3px 3px 6px rgba(0, 0, 0, 0.3)" }, "Strong")
  ))), activeTab === "background" && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Background"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Background Type"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: settings.background.type,
      onChange: (e) => updateSettingCategory("background", "type", e.target.value),
      className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
    },
    /* @__PURE__ */ React.createElement("option", { value: "color" }, "Solid Color"),
    /* @__PURE__ */ React.createElement("option", { value: "gradient" }, "Gradient"),
    /* @__PURE__ */ React.createElement("option", { value: "image" }, "Image")
  )), settings.background.type === "color" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Background Color"), /* @__PURE__ */ React.createElement(
    _components_ColorPicker__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    {
      value: settings.background.value,
      onChange: (color) => updateSettingCategory("background", "value", color)
    }
  )), settings.background.type === "gradient" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Gradient"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: settings.background.value,
      onChange: (e) => updateSettingCategory("background", "value", e.target.value),
      className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
    },
    /* @__PURE__ */ React.createElement("option", { value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }, "Blue Purple"),
    /* @__PURE__ */ React.createElement("option", { value: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }, "Pink Red"),
    /* @__PURE__ */ React.createElement("option", { value: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }, "Blue Cyan"),
    /* @__PURE__ */ React.createElement("option", { value: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" }, "Green Cyan"),
    /* @__PURE__ */ React.createElement("option", { value: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }, "Pink Yellow")
  )), settings.background.type === "image" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Upload Background Image"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "file",
      accept: "image/*",
      onChange: handleBackgroundImageUpload,
      className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
    }
  ))), activeTab === "presets" && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Design Presets"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600" }, "Apply pre-configured design themes"), Object.entries(PRESETS).map(([key, preset]) => /* @__PURE__ */ React.createElement("div", { key, className: "border border-gray-200 rounded-lg p-3" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium text-gray-900 mb-2" }, preset.name), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-2 mb-3" }, Object.values(preset.colors).slice(0, 5).map((color, index) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: index,
      className: "w-6 h-6 rounded border border-gray-300",
      style: { backgroundColor: color }
    }
  ))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => handlePresetApply(key),
      className: "w-full px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
    },
    "Apply ",
    preset.name
  )))))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white border-b border-gray-200 p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ React.createElement("h2", { className: "font-semibold text-gray-900" }, "Preview"), /* @__PURE__ */ React.createElement("label", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      checked: previewEnabled,
      onChange: (e) => setPreviewEnabled(e.target.checked),
      className: "rounded"
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "text-sm text-gray-600" }, "Enable Preview"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm text-gray-600" }, "Device:"), ["desktop", "tablet", "mobile"].map((device) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: device,
      onClick: () => setDeviceView(device),
      className: `px-3 py-1 text-sm rounded ${deviceView === device ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`
    },
    device.charAt(0).toUpperCase() + device.slice(1)
  ))))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 bg-gray-100 p-4" }, /* @__PURE__ */ React.createElement(
    _components_PreviewPane__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    {
      settings,
      enabled: previewEnabled,
      deviceView
    }
  ))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDesignPage);


/***/ })

};
;