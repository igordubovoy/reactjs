import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount () {
      this.props.authenticated ? void 0 : this.context.router.push('/')
    }

    componentWillUpdate (nextProps) {
      nextProps.authenticated ? void 0 : this.context.router.push('/')
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps ({authenticated}) {
    return { authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
