import React, { Component } from 'react';
import { get as _get } from 'lodash';
import { message } from 'antd';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
      state = {
        error: null
      }

      componentWillMount () {
        this.reqInterceptor = axios.interceptors.request.use( req => {
          this.setState( { error: null } );
          return req;
        } );
        this.resInterceptor = axios.interceptors.response.use( res => res, error => {
          this.setState({error: error});
          if(error.response) {
            const errorText = _get(error, 'response.data.message', 'Something when wrong!')
            message.error(errorText, 1.5, () => {
              this.setState({error: null});
            })
          } else {
            message.error('Oops! Please try again later!', 1.5, () => {
              this.setState({error: null});
            })
          }
        });
      }

      componentWillUnmount () {
        axios.interceptors.request.eject( this.reqInterceptor );
        axios.interceptors.response.eject( this.resInterceptor );
      }

      render () {
        return (
          <WrappedComponent {...this.props} />
        );
      }
    }
}

export default withErrorHandler;