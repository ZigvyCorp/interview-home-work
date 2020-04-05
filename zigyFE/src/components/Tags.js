import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Badge } from 'reactstrap';
export default function Tags(props) {

    return (
        <div className="pull-right">
            {props.tags.map((tag,i) => {
                return (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                )
            })}
        </div>         
    );
}
//  <div>
// <span class="badge">Posted 2012-08-02 20:47:04</span><div class="pull-right"><span class="label label-default">alice</span> <span class="label label-primary">story</span> <span class="label label-success">blog</span> <span class="label label-info">personal</span> <span class="label label-warning">Warning</span>
// <span class="label label-danger">Danger</span></div>         
//      </div>
Tags.propTypes = {
  tags: PropTypes.array,
};
Tags.defaultProps = {
  tags: []
};

{/* <Badge variant="primary">Primary</Badge>{' '}
            <Badge variant="secondary">Secondary</Badge>{' '}
            <Badge variant="success">Success</Badge>{' '}
            <Badge variant="danger">Danger</Badge>{' '}
            <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>{' '}
            <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge> */}