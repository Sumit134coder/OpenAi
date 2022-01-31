import {
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineDocumentText,
} from 'react-icons/hi';

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: HiOutlineHome,
    navLink: '/dashboard',
  },
  {
    id: 'second-page',
    title: 'Second Page',
    icon: HiOutlineDocumentText,
    navLink: '/second-page',
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: HiOutlineCog,
    navLink: '/settings',
  },
];
