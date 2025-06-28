// Section data for navigation and rendering
export interface Section {
  id: string;
  translationKey: string;
}

export const sections: Section[] = [
  { id: 'welcome', translationKey: 'welcome' },
  { id: 'introductionCourse', translationKey: 'introductionCourse' },
  { id: 'foundations', translationKey: 'foundations' },
  { id: 'encapsulation', translationKey: 'encapsulation' },
  { id: 'inheritance', translationKey: 'inheritance' },
  { id: 'polymorphism', translationKey: 'polymorphism' },
  { id: 'arrayofobjects', translationKey: 'arrayOfObjects' },
  { id: 'collection', translationKey: 'collections' },
  { id: 'dynamicmemory', translationKey: 'dynamicMemory' },
  { id: 'exception', translationKey: 'exception' },
  { id: 'io', translationKey: 'fileIO' },
];
