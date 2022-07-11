import { NOTIFIER_MESSAGE_TYPES } from '@constants/common';
import { translate } from './locale';

export const getNotifierMessage = (type: string, name: string = '') => {
  switch (type) {
    case NOTIFIER_MESSAGE_TYPES.linkingAccount:
      return 'Oh! Be a little patient! We are in process of linking your account.';
    case NOTIFIER_MESSAGE_TYPES.linkingFailed:
      return 'Oops sorry! Something is out of track. We could not link your account. Try Again!';
    case NOTIFIER_MESSAGE_TYPES.linkingSuccess:
      return `Yep, We have done it! ${name} has been linked Successfully :) `;
    case NOTIFIER_MESSAGE_TYPES.deleteSuccess:
      return `${name} has been deleted from the list. `;
    case NOTIFIER_MESSAGE_TYPES.syncingSingleTransaction:
      return `Oh! Be little patient! We are in process of Syncing your ${name} Transactions.`;
    case NOTIFIER_MESSAGE_TYPES.syncingSingleTransactionSuccess:
      return `${name} transactions have been synchronized successfully. `;
    case NOTIFIER_MESSAGE_TYPES.syncingTransactions:
      return 'Syncing up the transactions from all sources.';
    case NOTIFIER_MESSAGE_TYPES.syncingTransactionsSuccess:
      return 'All the transactions have been synchronized successfully.';
    case NOTIFIER_MESSAGE_TYPES.syncingTransactionsFailed:
      return 'Oops sorry! Something is out of track. We could not sync your transactions. ';
    case NOTIFIER_MESSAGE_TYPES.deleteFailed:
      return 'Oops sorry! Something is out of track. We could not process your delete request';
    default:
      return '';
  }
};

export const getLoginApiNotifierMessage = (message: string) => {
  if (message.includes('User with email')) {
    return translate('notifierMessage.userAlreadyExists');
  }
  if (message.includes('Invalid Credentials')) {
    return translate('notifierMessage.signInError');
  }
  if (message.includes('not found')) {
    return translate('notifierMessage.userNotFound');
  }
  if (
    message.includes('New password cannot be same as your previous password')
  ) {
    return translate('notifierMessage.sameOldPassword');
  }
  return '';
};

/*  This function will return the  list[x][returnValueKey]:
     id: this value is used for the comparison
     list: an array of objects from which the find operation is performing
     keyForComparison: the value of this object key will be compared with the id
     returnValueKey: the value of this object key will be returned as result of this function
*/
export const getValueFromArray = (
  id: string,
  list: Array<object>,
  keyForComparison: string,
  returnValueKey: string
): string =>
  list?.find(item => item[keyForComparison] === id)?.[returnValueKey];

/*  For creating time stamp by appending the given date and time
    params :
     date: in Date format
     time: in Date format*/
export const createTimeStamp = (date: Date, time: Date) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const upadtedTimeStamp = new Date(date);
  upadtedTimeStamp.setHours(hours, minutes, seconds, 0);
  return upadtedTimeStamp.toISOString();
};
