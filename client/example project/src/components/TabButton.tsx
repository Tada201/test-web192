import React from 'react';

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 rounded-t-md font-medium focus:outline-none transition-colors duration-200 ${
      active
        ? 'bg-blue-700 text-white dark:bg-blue-800' 
        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
    }`}
    onClick={onClick}
    type="button"
  >
    {label}
  </button>
);

export default TabButton;
