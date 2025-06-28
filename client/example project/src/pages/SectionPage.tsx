import React, { useContext, Suspense, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sections } from '../data/sections';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { sectionComponentsLazyMap } from '../utils/sectionComponentsMap';
import { MdxModeContext } from '../contexts/MdxModeContext.tsx';
import SectionMdxRenderer from '../components/sections/SectionMdxRenderer';

const SectionPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const [section, setSection] = useState(sections.find(s => s.id === sectionId));
  const { t } = useTranslation();
  const { mdxMode } = useContext(MdxModeContext) as { mdxMode: boolean };

  useEffect(() => {
    setSection(sections.find(s => s.id === sectionId));
    // Scroll to top when section changes
    window.scrollTo(0, 0);
  }, [sectionId]);

  if (!section) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700 dark:text-red-300">
            {t('sectionNotFound') || 'Section not found. Please select a valid course section.'}
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
  const SectionComponent = (sectionComponentsLazyMap as Record<string, React.ComponentType | undefined>)[section.id];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {section.id !== 'introductionCourse' && section.id !== 'welcome' && (
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t(`${section.translationKey}Title`)}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t(`${section.translationKey}Description`)}
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
          <Link 
            to={`/section/${prevSection.id}`} 
            className="button inline-flex items-center px-4 py-2 border border-blue-400 bg-blue-400/60 text-blue-900 dark:bg-blue-900 dark:border-blue-500 dark:text-blue-200 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 text-base font-normal min-w-[200px] justify-center relative overflow-hidden"
            style={{ background: 'rgba(59,130,246,0.6)' }}
            onMouseEnter={e => {
              const bg = e.currentTarget.querySelector('.button-bg') as HTMLElement | null;
              if (bg) bg.style.transform = 'scaleX(1)';
            }}
            onMouseLeave={e => {
              const bg = e.currentTarget.querySelector('.button-bg') as HTMLElement | null;
              if (bg) bg.style.transform = 'scaleX(0)';
            }}
          >
            <span className="button-content relative z-10 flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('previous')}: {t(`${prevSection.translationKey}Title`)}
            </span>
            <span className="button-bg absolute top-0 left-0 w-full h-full rounded-md" style={{transition: 'all 0.475s', background: 'linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)', transform: 'scaleX(0)', transformOrigin: '0 50%', zIndex: 0}}></span>
          </Link>
        ) : (
          <div></div>
        )}
        {nextSection ? (
          <Link 
            to={`/section/${nextSection.id}`} 
            className="button inline-flex items-center px-4 py-2 border border-blue-400 bg-blue-400/60 text-blue-900 dark:bg-blue-900 dark:border-blue-500 dark:text-blue-200 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 text-base font-normal min-w-[200px] justify-center relative overflow-hidden"
            style={{ background: 'rgba(59,130,246,0.6)' }}
            onMouseEnter={e => {
              const bg = e.currentTarget.querySelector('.button-bg') as HTMLElement | null;
              if (bg) bg.style.transform = 'scaleX(1)';
            }}
            onMouseLeave={e => {
              const bg = e.currentTarget.querySelector('.button-bg') as HTMLElement | null;
              if (bg) bg.style.transform = 'scaleX(0)';
            }}
          >
            <span className="button-content relative z-10 flex items-center">
              {t('next')}: {t(`${nextSection.translationKey}Title`)}
              <ArrowRight className="h-5 w-5 ml-2" />
            </span>
            <span className="button-bg absolute top-0 left-0 w-full h-full rounded-md" style={{transition: 'all 0.475s', background: 'linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)', transform: 'scaleX(0)', transformOrigin: '0 50%', zIndex: 0}}></span>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SectionPage;
