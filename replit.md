# replit.md

## Overview

This is a full-stack TypeScript application built with a modern React frontend and Express.js backend. The application appears to be a documentation site for "MyProject" with a comprehensive design system built on shadcn/ui components. It features a dark-themed documentation interface with search functionality, navigation sidebar, and table of contents.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Design System**: Complete component library with consistent theming

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: In-memory storage fallback for development
- **Build**: esbuild for production bundling

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express.js application
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migrations (Drizzle)
└── dist/           # Production build output
```

## Key Components

### Frontend Components
- **Documentation System**: Complete docs interface with sidebar navigation, advanced search, and table of contents
- **Search Engine**: FlexSearch-powered search with Unicode support, keyboard navigation, and result highlighting
- **UI Library**: 30+ reusable components including forms, navigation, data display, and feedback components
- **Custom Content Components**: Enhanced educational components for course materials
  - CodeBlock: Interactive code blocks with syntax highlighting, line numbers, and copy functionality
  - InfoBox: Colored information boxes for tips, warnings, notes, and critical information
  - ConceptCard: Visual cards for explaining programming concepts with difficulty indicators
  - InteractiveDemo: Expandable code demonstrations with explanations and expected outputs
  - ProgressTracker: Interactive learning progress tracking with persistent localStorage state
- **Theming**: Light/dark mode toggle with localStorage persistence and CSS custom properties
- **Responsive Design**: Mobile-first approach with collapsible sidebar

### Backend Components
- **Storage Interface**: Abstracted storage layer with memory and database implementations
- **Route System**: Modular route registration with Express
- **Development Tools**: Vite integration for development with HMR support
- **Request Logging**: Structured logging for API requests with timing

### Database Schema
- **Users Table**: Basic user entity with username and password fields
- **Schema Validation**: Zod integration for type-safe schema validation
- **Type Generation**: Automatic TypeScript type generation from database schema

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js routes handle HTTP requests with JSON responses
3. **Storage Layer**: Abstracted storage interface allows switching between memory and database
4. **Database**: Drizzle ORM manages PostgreSQL interactions with type safety
5. **Response**: Structured JSON responses with error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-orm**: Type-safe SQL ORM with schema migrations
- **@tanstack/react-query**: Server state management for React
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Fast build tool with HMR
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development plugins

### Database Tools
- **drizzle-kit**: Database migration and introspection tools
- **connect-pg-simple**: PostgreSQL session store for Express

## Deployment Strategy

### Development
- **Server**: Node.js with tsx for TypeScript execution
- **Client**: Vite dev server with HMR
- **Database**: Environment variable configuration for DATABASE_URL

### Production
- **Build Process**: 
  1. Vite builds React app to `dist/public`
  2. esbuild bundles server code to `dist/index.js`
- **Deployment**: Single Node.js process serving both API and static files
- **Database**: PostgreSQL via Neon serverless platform

### Environment Configuration
- **DATABASE_URL**: Required environment variable for database connection
- **NODE_ENV**: Controls development vs production behavior
- **REPL_ID**: Replit-specific environment detection

## Changelog

```
Changelog:
- June 28, 2025. Integrated advanced features from example project
  - Added enhanced settings system with theme colors, font families, text sizes, and accessibility options
  - Implemented advanced search modal with filters, keyboard navigation, and recent searches
  - Created loading animation with 3-second fade-out for better user experience
  - Added support for multiple theme color schemes (modern-dark, blue-professional, deep-purple, light variants)
  - Integrated accessibility features: high contrast mode, color blindness support, dyslexia-friendly fonts
  - Enhanced header with settings menu and improved search functionality
  - Added SettingsContext provider for global settings management
  - Implemented language support framework (English/Vietnamese)
- June 28, 2025. Completed custom React components for enhanced content presentation
  - Created 5 interactive educational components: CodeBlock, InfoBox, ConceptCard, InteractiveDemo, ProgressTracker
  - Built comprehensive demo pages showcasing component usage and Java OOP examples
  - Added component routes to application navigation
  - Components feature syntax highlighting, copy functionality, progress tracking with localStorage persistence
  - Enhanced documentation experience with color-coded difficulty levels and interactive demos
- June 28, 2025. Integrated Object-Oriented Programming Java (PRO192) course documentation
  - Added MDX file loader for dynamic content loading
  - Integrated FlexSearch for advanced search functionality
  - Implemented light/dark theme toggle with localStorage persistence
  - Updated navigation structure for Java course materials
  - Created comprehensive documentation sections for OOP concepts
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```