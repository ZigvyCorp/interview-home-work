import { MESSAGE_SUCCESS, VALIDATOR } from './constants/message.js';

const ListMessageError = { ...VALIDATOR() }

const ListMessageSuccess = { ...MESSAGE_SUCCESS() }

export { ListMessageError, ListMessageSuccess }
