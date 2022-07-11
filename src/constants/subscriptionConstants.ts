export const PLAN_TYPES = {
  FREE: 'FREE',
  UNLIMITED: 'UNLIMITED'
};

export const PLAN_LIST = [
  {
    id: PLAN_TYPES.FREE,
    type: 'Free',
    price: '0',
    description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit,',
    benefits: [
      {
        label: 'Unlimited Transactions',
        isAvailable: true
      },
      {
        label: 'Unlimited Wallet Addresses',
        isAvailable: true
      },
      {
        label: 'Automatic Sync with 70+ Exchanges with heavy duty',
        isAvailable: false
      }
    ]
  },
  {
    id: PLAN_TYPES.UNLIMITED,
    type: 'Unlimited',
    price: '200',
    description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit,',
    benefits: [
      {
        label: 'Unlimited Transactions',
        isAvailable: true
      },
      {
        label: 'Unlimited Wallet Addresses',
        isAvailable: true
      },
      {
        label: 'Automatic Sync with 70+ Exchanges',
        isAvailable: true
      }
    ]
  }
];
