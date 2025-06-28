import  { Section } from '../data/sections';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import styled from 'styled-components';
import ColorfulOutline from './ColorfulOutline';

interface SectionCardProps {
  section: Section;
}

const StyledWrapper = styled.div`
  .codepen-button {
    display: block;
    cursor: pointer;
    color: white;
    margin: 0 auto;
    position: relative;
    text-decoration: none;
    font-weight: 600;
    border-radius: 6px;
    overflow: hidden;
    padding: 3px;
    isolation: isolate;
    width: fit-content;
    min-width: 140px;
    background: none;
  }
  .codepen-button span {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.5rem;
    font-size: 1.08rem;
    background: #2563eb;
    border-radius: 3px;
    height: 100%;
    z-index: 2;
    color: #fff;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(99,102,241,0.12);
    border: none;
    outline: none;
    transition: background 0.3s;
    overflow: hidden;
  }
  .codepen-button .button-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    z-index: 1;
    transition: all 0.475s;
    background: linear-gradient(82.3deg, #a767e5 10.8%, #6366f1 94.3%);
    opacity: 0;
    pointer-events: none;
  }
  .codepen-button:hover .button-bg,
  .codepen-button:focus .button-bg {
    opacity: 1;
  }
  .codepen-button:hover span,
  .codepen-button:focus span {
    background: linear-gradient(82.3deg, #a767e5 10.8%, #6366f1 94.3%);
    color: #fff;
  }
  .codepen-button:focus-visible span {
    outline: 2px solid #fff700;
    outline-offset: 2px;
  }
`;

const SectionCard = ({ section }: SectionCardProps) => {
  const Icon = section.icon;
  const { t } = useTranslation();

  // Handler for hover/focus background animation
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bg = e.currentTarget.querySelector('.button-bg') as HTMLElement | null;
    if (bg) bg.style.transform = 'scaleX(1)';
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bg = e.currentTarget.querySelector('.button-bg') as HTMLElement | null;
    if (bg) bg.style.transform = 'scaleX(0)';
  };

  return (
    <ColorfulOutline>
      <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-700 hover-lift animate-scale-in min-h-[260px] flex flex-col overflow-hidden">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3 flex items-center justify-center" style={{ width: 40, height: 40, minWidth: 40, minHeight: 40 }}>
            <Icon className="h-6 w-6" style={{ display: 'block' }} />
          </div>
          <h3 className="text-lg font-semibold text-white">{t(`${section.translationKey}Title`)}</h3>
        </div>
        <p className="text-gray-300 mb-4 h-20 overflow-hidden flex-1">
          {t(`${section.translationKey}Description`)}
        </p>
        <StyledWrapper>
          <Link 
            to={`/section/${section.id}`}
            className="button inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover-glow transition-all duration-300 relative overflow-hidden h-12"
            style={{ background: '#2563eb' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
            aria-label="View Content"
          >
            <span className="button-content relative z-10 flex items-center gap-2">
              View Content <ArrowRight className="ml-1 h-4 w-4" />
            </span>
            <span className="button-bg absolute top-0 left-0 w-full h-full rounded-md" style={{transition: 'all 0.475s', background: 'linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)', transform: 'scaleX(0)', transformOrigin: '0 50%', zIndex: 0}}></span>
          </Link>
        </StyledWrapper>
      </div>
    </ColorfulOutline>
  );
};

export default SectionCard;
