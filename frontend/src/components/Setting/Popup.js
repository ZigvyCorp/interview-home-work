import React, { useState, useEffect } from 'react'
import { Modal, Tabs } from 'antd'
import { FormattedMessage } from 'react-intl'

import SignIn from './SignIn'
import SignUp from './SignUp'
import messages from './messages'

const { TabPane } = Tabs

export default ({ intl, visible, toggle }) => {
  const [currentTabPane, setCurrentTabPane] = useState('signIn')

  useEffect(() => {
    if (!visible) {
      setCurrentTabPane('signIn')
    }
  }, [visible])

  const handleTabPaneChange = activeKey => {
    setCurrentTabPane(activeKey)
  }

  const modalProps = {
    visible,
    closable: false,
    destroyOnClose: true,
    footer: null,
    bodyStyle: { padding: 0 },
    width: 360,
    onCancel: toggle,
  }

  return (
    <Modal {...modalProps}>
      <Tabs
        type="card"
        activeKey={currentTabPane}
        onChange={handleTabPaneChange}
        tabBarGutter={0}
        style={{ borderRadius: '4px' }}
        destroyInactiveTabPane
      >
        <TabPane tab={<FormattedMessage {...messages.signIn} />} key="signIn">
          <SignIn intl={intl} toggle={toggle} />
        </TabPane>
        <TabPane tab={<FormattedMessage {...messages.signUp} />} key="signUp">
          <SignUp intl={intl} toggle={toggle} />
        </TabPane>
      </Tabs>
    </Modal>
  )
}
