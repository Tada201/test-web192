import React from "react";

const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-[55vh] w-full mt-0 mb-8 px-4 md:px-8">
    <div className="rounded-lg border text-card-foreground shadow-sm glass border-doc-border bg-doc-surface/50 hover:bg-doc-hover/50 transition-all duration-300 neon-glow group hover:scale-105 max-w-7xl w-full flex flex-col items-center gap-8 mx-auto p-8 md:p-16" style={{ zIndex: 20 }}>
      <h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center font-orbitron text-doc-text"
        style={{
          textShadow: "0 1px 6px rgba(0,0,0,0.12)"
        }}
      >
        Object Oriented Programming using Java
      </h1>
      <p
        className="text-lg md:text-xl mb-10 text-center max-w-3xl text-doc-text-muted"
        style={{
          textShadow: "0 1px 6px rgba(0,0,0,0.12)"
        }}
      >
        A comprehensive course exploring object-oriented programming concepts, design principles, and practical implementation in Java.
      </p>
      <div className="flex gap-8">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-20 rounded-xl px-16 py-8 text-2xl glass border-doc-border bg-doc-surface/50 text-doc-text hover:bg-doc-hover neon-glow transition-all duration-300 hover:scale-105"
        >
          Explore course
        </button>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-20 rounded-xl px-16 py-8 text-2xl glass border-doc-border bg-doc-surface/50 text-doc-text hover:bg-doc-hover neon-glow transition-all duration-300 hover:scale-105"
        >
          Download syllabus
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
