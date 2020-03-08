import React from 'react'
import { Input, Avatar } from 'antd'

import Setting from '../Setting'

export default ({ intl }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="d-flex justify-content-between w-100">
        <Avatar icon="user" />
        <Input.Search className="mr-auto" />
        <Setting intl={intl} />
      </div>
    </nav>
  )
}
