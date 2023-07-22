import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiPalette,
  mdiVuejs,
} from '@mdi/js';
import { MenuAsideItem } from './interfaces';

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },

  {
    href: '/users/users-list',
    label: 'Users',
    icon: mdiTable,
  },
  {
    href: '/advertisements/advertisements-list',
    label: 'Advertisements',
    icon: mdiTable,
  },
  {
    href: '/audiences/audiences-list',
    label: 'Audiences',
    icon: mdiTable,
  },
  {
    href: '/brands/brands-list',
    label: 'Brands',
    icon: mdiTable,
  },
  {
    href: '/buyers/buyers-list',
    label: 'Buyers',
    icon: mdiTable,
  },
  {
    href: '/campaigns/campaigns-list',
    label: 'Campaigns',
    icon: mdiTable,
  },
  {
    href: '/company/company-list',
    label: 'Company',
    icon: mdiTable,
  },
  {
    href: '/goals/goals-list',
    label: 'Goals',
    icon: mdiTable,
  },
  {
    href: '/growth/growth-list',
    label: 'Growth',
    icon: mdiTable,
  },
  {
    href: '/history/history-list',
    label: 'History',
    icon: mdiTable,
  },
  {
    href: '/markets/markets-list',
    label: 'Markets',
    icon: mdiTable,
  },
  {
    href: '/personality/personality-list',
    label: 'Personality',
    icon: mdiTable,
  },
  {
    href: '/sentiments/sentiments-list',
    label: 'Sentiments',
    icon: mdiTable,
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
  {
    href: '/api-docs',
    label: 'Swagger API',
    icon: mdiAccountCircle,
  },
];

export default menuAside;
