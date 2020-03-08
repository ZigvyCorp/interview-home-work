import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import { Menu, Avatar, Typography } from 'antd'

import { useToggle } from '../../hooks'
import { UserActions, UserSelectors } from '../../store/redux/user'
import Popup from './Popup'
import messages from './messages'

const { Text } = Typography
const { Item: MenuItem, SubMenu } = Menu

const Setting = ({ intl, isSignedIn, profile, signOut }) => {
  const popup = useToggle(false)

  const { name, picture } = profile

  const handleMenuClick = e => {
    console.log(e)
    if (e.key === 'signIn') {
      popup.onClick()
    } else if (e.key === 'signOut') {
      signOut()
    }
  }

  return (
    <>
      <Menu theme="dark" mode="horizontal" onClick={handleMenuClick}>
        {!isSignedIn ? (
          <MenuItem key="signIn">Sign In</MenuItem>
        ) : (
          <SubMenu
            title={
              <>
                <Avatar src={picture} shape="circle" size="large" alt={name || 'User'} />
                <Text strong>{name}</Text>
              </>
            }
          >
            {/* <MenuItem key="info">Thông tin người dùng</MenuItem> */}
            <MenuItem key="signOut">
              <Text strong className="text-white">
                <FormattedMessage {...messages.signOut} />
              </Text>
            </MenuItem>
          </SubMenu>
        )}
      </Menu>
      <Popup intl={intl} visible={popup.value} toggle={popup.onClick} />
    </>
  )
}

Setting.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
}

export default connect(
  createStructuredSelector({
    isSignedIn: UserSelectors.makeSelectIsSignedIn(),
    profile: UserSelectors.makeSelectProfile(),
  }),
  {
    signOut: UserActions.signOut,
  },
)(Setting)
