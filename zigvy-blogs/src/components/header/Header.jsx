import React from 'react';
import { Row, Col, Avatar, Input } from 'antd'
import UserInfo from './UserInfo'

const { Search } = Input
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(value) {
    const { setFilter } = this.props
    setFilter({ search: value })
  }
  render() {
    const { location: { pathname }} = this.props
    const isRenderSearch = pathname === '/'
    return (
      <Row gutter={[15, 15]}>
        <Col>
          <Row>
            <Col><Avatar src="/public/zigvy-logo.jpg" /></Col>
            <Col><h3>Zigvy Blogs</h3></Col>
          </Row>
        </Col>
        <Col flex={1} />
        <Col>
          {isRenderSearch && (
            <Search
              style={{display: 'inline-block', verticalAlign: 'middle'}}
              placeholder="Search by keywords"
              onSearch={this.handleSearch}
            />
          )}
        </Col>
        <Col>
          <UserInfo />
        </Col>
      </Row>
    )
  }
}
