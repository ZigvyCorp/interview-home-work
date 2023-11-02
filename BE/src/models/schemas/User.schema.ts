import { ObjectId } from 'mongodb'
import { UserVerifyStatus } from '~/constants/enum'

interface UserType {
  _id?: ObjectId
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export default class User {
  _id?: ObjectId
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }

  constructor(user: UserType) {
    const date = new Date()
    this._id = user._id
    this.id = user.id
    this.name = user.name
    this.username = user.username
    this.email = user.email
    this.address = user.address
    this.phone = user.phone
    this.website = user.website
    this.company = user.company
  }
}
