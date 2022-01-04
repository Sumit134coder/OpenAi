import {
  HomeIcon,
  CogIcon,
  DocumentIcon,
} from '@heroicons/react/outline';

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: HomeIcon,
    navLink: '/dashboard',
  },
  {
    id: 'second-page',
    title: 'Second Page',
    icon: DocumentIcon,
    navLink: '/second-page',
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: CogIcon,
    navLink: '/settings',
  },
];
