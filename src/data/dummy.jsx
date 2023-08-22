import {
  transaction,
  transaction2,
  transaction3,
  usefriend,
  usercog,
  usertimes,
  sack,
  scroll,
  sliders,
  piggy,
  galaxy,
  group,
  guarantor,
  clipboard,
  chart,
  badge,
  briefcase,
  home,
  Vectore
} from '../assets/Icons/Index'

export const Dashboard = [
  {
    title: 'Dashboard',
    name: 'Dashboard',
    icon: home
  }
]

export const customer = [
  {
    title: 'costumers'
  },

  {
    name: 'Users',
    icon: usefriend
  },
  {
    name: 'Guarantors',
    icon: guarantor
  },

  {
    name: 'Loans',
    icon: sack
  },
  {
    name: 'Decision Models',
    icon: Vectore
  },

  {
    name: 'Savings',
    icon: piggy
  },

  {
    name: 'Loan Request',
    icon: group
  },

  {
    name: 'Whitelist',
    icon: usercog
  },

  {
    name: 'Karma',
    icon: usertimes
  }
]

export const business = [
  {
    title: 'BUSINESSES'
  },

  {
    name: 'Organization',
    icon: briefcase
  },
  {
    name: 'Loan Products',
    icon: group
  },
  {
    name: 'Savings Products',
    icon: transaction3
  },
  {
    name: 'Fees and Charges',
    icon: transaction2
  },

  {
    name: 'Transactions',
    icon: transaction
  },
  {
    name: 'Services',
    icon: galaxy
  },
  {
    name: 'Service Account',
    icon: usercog
  },
  {
    name: 'Settlements',
    icon: scroll
  },
  {
    name: 'Reports',
    icon: chart
  }
]

export const setting = [
  {
    title: 'SETTINGS'
  },

  {
    name: 'Preferences',
    icon: sliders
  },
  {
    name: 'Fees and Pricing',
    icon: badge
  },
  {
    name: 'Audit Logs',
    icon: clipboard
  }
]
