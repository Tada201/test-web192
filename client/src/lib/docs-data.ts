export interface DocSection {
  id: string;
  title: string;
  icon: string;
  items: DocItem[];
  collapsible?: boolean;
}

export interface DocItem {
  id: string;
  title: string;
  icon?: string;
  href: string;
}

export interface DocContent {
  id: string;
  title: string;
  description?: string;
  content: string;
  lastModified: string;
  tableOfContents: TOCItem[];
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export const docSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "fas fa-play",
    items: [
      { id: "introduction", title: "Introduction", icon: "fas fa-play", href: "#introduction" },
      { id: "installation", title: "Installation", icon: "fas fa-download", href: "#installation" },
      { id: "quick-start", title: "Quick Start", icon: "fas fa-rocket", href: "#quick-start" }
    ]
  },
  {
    id: "features",
    title: "Features",
    icon: "fas fa-star",
    collapsible: true,
    items: [
      { id: "core-features", title: "Core Features", icon: "fas fa-star", href: "#core-features" },
      { id: "advanced-features", title: "Advanced Features", icon: "fas fa-cogs", href: "#advanced-features" },
      { id: "integrations", title: "Integrations", icon: "fas fa-puzzle-piece", href: "#integrations" }
    ]
  },
  {
    id: "api-reference",
    title: "API Reference",
    icon: "fas fa-code",
    collapsible: true,
    items: [
      { id: "authentication", title: "Authentication", icon: "fas fa-key", href: "#authentication" },
      { id: "endpoints", title: "Endpoints", icon: "fas fa-link", href: "#endpoints" },
      { id: "sdks", title: "SDKs", icon: "fas fa-code", href: "#sdks" }
    ]
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: "fas fa-cloud",
    items: [
      { id: "docker", title: "Docker", icon: "fab fa-docker", href: "#docker" },
      { id: "kubernetes", title: "Kubernetes", icon: "fas fa-dharmachakra", href: "#kubernetes" },
      { id: "cloud-platforms", title: "Cloud Platforms", icon: "fas fa-cloud", href: "#cloud-platforms" }
    ]
  },
  {
    id: "community",
    title: "Community",
    icon: "fas fa-users",
    items: [
      { id: "contributing", title: "Contributing", icon: "fas fa-hands-helping", href: "#contributing" },
      { id: "changelog", title: "Changelog", icon: "fas fa-history", href: "#changelog" },
      { id: "support", title: "Support", icon: "fas fa-life-ring", href: "#support" }
    ]
  }
];

export const docContent: Record<string, DocContent> = {
  introduction: {
    id: "introduction",
    title: "Docs of MyProject",
    description: "MyProject is a full-featured open source solution for modern web applications with minimal configuration. You have full control of your data, with no concerns about security. The platform is open source and there's a choice between the fully featured Professional Server available to purchase on our website and the basic free and OSS Server based on our Community Edition.",
    lastModified: "2024-12-28",
    tableOfContents: [
      { id: "features", title: "Features", level: 2 },
      { id: "installation", title: "Quick Installation", level: 2 },
      { id: "github-repositories", title: "GitHub Repositories", level: 2 }
    ],
    content: `
# Features

MyProject offers a comprehensive set of features designed for modern web applications:

- **Multi-platform Support**: Works on Windows, macOS, Linux, iOS, Android, Web.
- **Advanced Codecs**: Supports VP8 / VP9 / AV1 software codecs, and H264 / H265 hardware codecs.
- **Self-hosted Solution**: Own your data, easily set up self-hosting solution on your infrastructure.
- **Secure P2P**: P2P connection with end-to-end encryption based on NaCl.
- **No Admin Required**: No administrative privileges or installation needed for Windows, elevate privilege locally or from remote on demand.
- **Simple Design**: We like to keep things simple and will strive to make simpler where possible.

# Quick Installation

Get started with MyProject in just a few commands:

\`\`\`bash
# Install via npm
npm install -g myproject-cli

# Or using Docker
docker pull myproject/myproject:latest

# Quick start
myproject init my-app
cd my-app
myproject dev
\`\`\`

> **Tip**: For production deployments, we recommend using our Docker images or official installers available on the releases page.

# GitHub Repositories

Explore our open source repositories:

## myproject/core
Core library and main application code. Contains the primary business logic and API implementations.
- ⭐ 15.2k stars
- 🍴 2.1k forks
- Language: Rust

## myproject/docs
Documentation website source code built with Docusaurus. Contributions to improve docs are welcome.
- ⭐ 245 stars
- 🍴 89 forks
- Language: JavaScript
`
  }
};

export const breadcrumbs = [
  { title: "Docs", href: "#home" },
  { title: "Getting Started", href: "#getting-started" },
  { title: "Introduction", href: "#introduction" }
];
