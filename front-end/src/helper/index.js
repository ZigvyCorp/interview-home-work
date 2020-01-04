import moment from 'moment'

export const convertCreatedAt = (value) => moment(value).format('LL')
export const convertCreatedAtFromNow = (value) => moment(value).fromNow()

export const trimPostContent = (value) => `${value.substring(0, 100)} ... `

export const getTotalComments = (value) => value > 1 ? `${value} replies` : `${value} reply`