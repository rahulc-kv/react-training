/* eslint-disable no-unused-vars */
export enum TAB_BAR_CONSTANTS {
  ASSET = 'asset',
  SOURCES = 'sources'
}

export const TAB_BAR_ITEMS = [
  {
    id: 'asset',
    label: 'Asset',
    isActive: true,
    minWidth: 'sm:min-w-[150px] min-w-[70px]'
  },
  {
    id: 'sources',
    label: 'Sources',
    isActive: true,
    minWidth: 'sm:min-w-[150px] min-w-[70px]'
  }
];

export const HomePageBgColorMapper = {
  Id1: 'bg-blue-500',
  Id2: 'bg-red-500',
  Id3: 'bg-yellow-500'
};
