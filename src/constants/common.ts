/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { uniqBy } from 'lodash';

import { showLanguageSwitchButton } from '@config/index';
import { LocalStorage } from '@services/storage';

export enum TopBarConstants {
  MY_SOURCES = 'My Sources',
  SYNC_TRANSACTIONS = 'Sync Transactions',
  IMPORT_TRANSACTIONS = 'Import Transactions',
  DASHBOARD = 'Dashboard',
  TAX_REPORT = 'Tax Report',
  SETTINGS = 'Settings',
  SUBSCRIPTION_PLANS = 'Subscription Plans',
  DOWNLOAD_REPORT = 'Download Report',
  LINK_TRANSACTIONS = 'Link Transactions',
  MY_TRANSACTIONS = 'My Transactions',
  EDIT_TRANSACTION = 'Edit Transaction',
  EDIT = 'Edit',
  DELETE = 'Delete'
}

export enum NotifierTypes {
  LOADING = 'loadingState',
  LINKERROR = 'linkErrorState',
  DELETE = 'deleteState',
  SYNCERROR = 'syncErrorState',
  SUCCESS = 'successState',
  ERROR = 'errorState'
}

export enum Currency {
  RUPEE = '₹',
  DOLLAR = '$'
}

export const LANGUAGE_LOCAL_STATE = 'language';

export enum APP_LANGUAGES {
  EN = 'en'
}

const currentLanguage =
  LocalStorage.get<string>(LANGUAGE_LOCAL_STATE) ?? APP_LANGUAGES.EN;

// showLanguageSwitchButton is currently set only for dev environment.Change it for future use
export const CURRENT_APP_LANGUAGE = showLanguageSwitchButton
  ? currentLanguage
  : APP_LANGUAGES.EN;

export const DATE_FORMAT = 'dd MMM yyyy';

export const DATE_TIME_FORMAT = 'dd MMM yyyy, hh:mm:ss a';

export const DEFAULT_DATE_FORMAT = 'dd/MM/yyyy';

export const DEFAULT_TIME_FORMAT = 'hh:mm:ss a';

export const DATE_TIME_NO_SEC_FORMAT = 'dd MMM yyyy, hh:mm a';

export const ROWS_PER_PAGE = 10;

export const NOTIFIER_MESSAGE_TYPES = {
  linkingAccount: 'linkingAccount',
  linkingFailed: 'linkingFailed',
  linkingSuccess: 'linkingSuccess',
  deleteSuccess: 'deleteSuccess',
  syncingTransactions: 'syncingTransactions',
  syncingTransactionsSuccess: 'syncingTransactionsSuccess',
  syncingTransactionsFailed: 'syncingTransactionsFailed',
  syncingSingleTransaction: 'syncingSingleTransaction',
  syncingSingleTransactionSuccess: 'syncingSingleTransactionSuccess',
  deleteFailed: 'deleteFailed'
};

export const TRANSACTION_TYPES = {
  buy: 'buy',
  sell: 'sell',
  trade: 'trade',
  transferIn: 'transfer-in',
  transferOut: 'transfer-out',
  deposit: 'deposit',
  withdrawal: 'withdrawal'
};

export const TRANSACTION_TRANSFER_IN_TAGS = {
  giftFromRelative: 'gift-from-relative',
  gitFromOthers: 'gift-from-others',
  internalTransfer: 'internal-transfer',
  stakingReward: 'staking-reward',
  airdrop: 'airdrop',
  fork: 'fork',
  interest: 'interest',
  income: 'income'
};

export const TRANSACTION_TRANSFER_OUT_TAGS = {
  giftSent: 'gift-sent',
  internalTransfer: 'internal-transfer',
  external: 'external',
  lost: 'lost'
};

export const TRANSACTION_TAGS = {
  ...TRANSACTION_TRANSFER_IN_TAGS,
  ...TRANSACTION_TRANSFER_OUT_TAGS
};

export const TRANSACTION_TYPE_DROPDOWN_VALUES = [
  { id: TRANSACTION_TYPES.buy, name: 'Buy' },
  { id: TRANSACTION_TYPES.sell, name: 'Sell' },
  { id: TRANSACTION_TYPES.trade, name: 'Trade' },
  { id: TRANSACTION_TYPES.deposit, name: 'Deposit' },
  { id: TRANSACTION_TYPES.withdrawal, name: 'Withdrawal' },
  { id: TRANSACTION_TYPES.transferIn, name: 'Transfer In' },
  { id: TRANSACTION_TYPES.transferOut, name: 'Transfer Out' }
];

export const TRANSACTION_TRANSFER_IN_TAGS_DROPDOWN_VALUES = [
  { id: TRANSACTION_TRANSFER_IN_TAGS.income, name: 'Income' },
  {
    id: TRANSACTION_TRANSFER_IN_TAGS.giftFromRelative,
    name: 'Gift from Relative'
  },
  { id: TRANSACTION_TRANSFER_IN_TAGS.gitFromOthers, name: 'Gift from Others' },
  {
    id: TRANSACTION_TRANSFER_IN_TAGS.internalTransfer,
    name: 'Internal Transfer'
  },
  { id: TRANSACTION_TRANSFER_IN_TAGS.stakingReward, name: 'Staking Reward' },
  { id: TRANSACTION_TRANSFER_IN_TAGS.airdrop, name: 'Airdrop' },
  { id: TRANSACTION_TRANSFER_IN_TAGS.fork, name: 'Fork' },
  { id: TRANSACTION_TRANSFER_IN_TAGS.interest, name: 'Interest' }
];

export const TRANSACTION_TRANSFER_OUT_TAGS_DROPDOWN_VALUES = [
  { id: TRANSACTION_TRANSFER_OUT_TAGS.external, name: 'External' },
  { id: TRANSACTION_TRANSFER_OUT_TAGS.giftSent, name: 'Gift Sent' },
  {
    id: TRANSACTION_TRANSFER_OUT_TAGS.internalTransfer,
    name: 'Internal Transfer'
  },
  { id: TRANSACTION_TRANSFER_OUT_TAGS.lost, name: 'Lost' }
];

export const TRANSACTION_TAGS_OBJECT_LIST = uniqBy(
  [
    ...TRANSACTION_TRANSFER_IN_TAGS_DROPDOWN_VALUES,
    ...TRANSACTION_TRANSFER_OUT_TAGS_DROPDOWN_VALUES
  ],
  'id'
);

export const INDIAN_RUPEE = {
  code: 'INR',
  name: 'Indian Rupee'
};

export const IS_AUTHENTICATED = 'isAuthenticated';
export const PAGE_HAS_BEEN_FORCE_REFRESHED = 'pageHasBeenForceRefreshed';

export const TRANSACTION_MODES = {
  manual: 'manual',
  scheduler: 'scheduler',
  import: 'import'
};

export const NoDataObj = {
  title: 'No result found.',
  message: 'Please try again with another keyword or try using a generic term.',
  filterMessage: 'Oops! We could not find any results for this search'
};

export const SUMMARY_DISPLAY_TEXT = {
  [TRANSACTION_TYPES.buy]: 'Total Cost',
  [TRANSACTION_TYPES.sell]: 'Market Value',
  [TRANSACTION_TYPES.trade]: 'Market Value',
  [TRANSACTION_TYPES.deposit]: 'Total Amount',
  [TRANSACTION_TYPES.withdrawal]: 'Total Amount',
  [TRANSACTION_TYPES.transferIn]: 'Market Value',
  [TRANSACTION_TYPES.transferOut]: 'Market Value'
};

export const DATE_FILTER_TYPE = {
  from: 'From',
  to: 'To'
};

export const COINDCX_CODE = 'DCX';

export const LISTBOX_PADDING = 8; // px

export const API_RESPONSE_STATUS = {
  OK: 'ok',
  NOT_OK: 'nok'
};

export const FILE_UPLOAD_STATUS = {
  uploading: 'uploading',
  failed: 'failed',
  success: 'success'
};

export const SUPPORTED_FILE_FORMATS = {
  GENERIC: {
    'text/csv': ['.csv']
  },
  WRX: {
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
      '.xlsx'
    ]
  },
  DEFAULT: {
    'text/csv': ['.csv'],
    'application/vnd.ms-excel': ['.xls'],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
      '.xlsx'
    ]
  }
};

export const SUPPORTED_FILE_EXTENSIONS = {
  GENERIC: '.csv',
  WRX: '.xlsx',
  DEFAULT: '.csv, .xls or .xlsx'
};

export const REGEX = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  name: /([a-zA-Z ]+$)/,
  noWhiteSpace: /^(\S+$)/g
};

export const TOKEN_EXPIRED_ERROR = {
  malformedToken: 'Malformed token',
  invalidToken: 'Token is invalid or expired',
  invalidLink: 'link has been expired'
};

export const SUPPORTEMAIL = 'support@taxcryp.com';

export const FIAT_CURRENCIES = [
  {
    id: INDIAN_RUPEE.code,
    name: INDIAN_RUPEE.name
  }
];

export const SUBSCRIPTION_PLAN_TYPE = {
  free: 'FREE',
  unlimited: 'UNLIMITED'
};

export const FREE_PLAN_TRANSACTION_COUNT = 100;

export const AVAILABLE_SUBSCRIPTION_FY = [
  { label: 'FY 2021-22', name: '21-22' }
];
