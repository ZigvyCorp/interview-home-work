// Utilities
import React from "react";

// Interface
import { Account } from "../../../lib/redux/users/account/interface.ts"
interface AccountComponent {
  account: Account
}

// Components
import { MdOutlineAccountCircle } from 'react-icons/md';

// Styles
import "./account.scss";

export default function AccountComponent({ account }: AccountComponent) {
  const { name, username } = account

  return (
    <div className="account">
      <div className="account__icon"><MdOutlineAccountCircle /></div>
      <div className="account__name">{ username }</div>
    </div>
  )
}