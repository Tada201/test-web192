import React, { Suspense, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { sections } from '../data/sections';
import { sectionComponentsLazyMap } from '../utils/sectionComponentsMap';
import SectionMdxRenderer from '../components/sections/SectionMdxRenderer';
import { MdxModeContext } from '../contexts/MdxModeContext';

export default function SectionPage() {
  const { sectionId = '' } = useParams<{ sectionId?: string }>();
  const [section, setSection] = useState(sections.find(s => s.id === sectionId));
  const { mdxMode } = useContext(MdxModeContext);

  useEffect(() => {
    setSection(sections.find(s => s.id === sectionId));
    window.scrollTo(0, 0);
  }, [sectionId]);

  if (!section) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700 dark:text-red-300">
            Section not found. Please select a valid course section.
          </p>
        </div>
      </div>
    );
  }

  // Find the index of the current section
  const currentIndex = sections.findIndex(s => s.id === sectionId);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  // Type guard for sectionComponentsLazyMap
  const SectionComponent = sectionComponentsLazyMap[section.id];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {section.id !== 'introductionCourse' && section.id !== 'welcome' && (
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {section.translationKey}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Section description placeholder.
          </p>
        </div>
      )}
      <Suspense fallback={<div>Loading section content...</div>}>
        {mdxMode ? (
          <SectionMdxRenderer sectionId={section.id} />
        ) : (
          SectionComponent
            ? React.createElement(SectionComponent)
            : <div>Section not found.</div>
        )}
      </Suspense>
      <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
        {prevSection ? (
          <a href={`/section/${prevSection.id}`} className="flex items-center text-blue-600 hover:underline">
            &larr; Previous
          </a>
        ) : <div></div>}
        {nextSection ? (
          <a href={`/section/${nextSection.id}`} className="flex items-center text-blue-600 hover:underline">
            Next &rarr;
          </a>
        ) : <div></div>}
      </div>
    </div>
  );
}
