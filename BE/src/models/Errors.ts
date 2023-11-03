import { capitalize } from 'lodash'
import { ServerStatus } from '~/constants/enum'
import { USER_REPONSE_MESSAGES } from '~/constants/messages.contants'

export type ErrorEntityObject = {
  msg: string
  [key: string]: any
}

export type EntityErrorType = Record<string, ErrorEntityObject>

export type ErrorWithStatusType = {
  message: string
  status: ServerStatus
}

export type ErrorEntityStatusType = {
  message?: string
  errors: EntityErrorType
}

export class ErrorWithStatus {
  message: string
  status: ServerStatus
  constructor({ message, status }: ErrorWithStatusType) {
    this.message = capitalize(message)
    this.status = status
  }
}

export class ErrorEntityStatus extends ErrorWithStatus {
  errors: EntityErrorType
  constructor({ message = USER_REPONSE_MESSAGES.VALIDATION.ERROR, errors }: ErrorEntityStatusType) {
    super({ message, status: ServerStatus.UNPROCESSABLE_ENTITY })
    this.errors = errors
  }
}
