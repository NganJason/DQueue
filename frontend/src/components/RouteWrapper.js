import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const RouteWrapper = ({ component: Component, layout: Layout, auth, isPrivate = true, ...rest }) => {

  const renderComponent = props => {
    /**
     * Redirect user to the visited Component if
     * 1. Route is private and user is already authenticated or
     * 2. Route is not private
     * 
     * Else, go to the login / signup page
     */
    if ((isPrivate && auth.isAuthenticated) || !isPrivate) {
      return (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )
    } else {
      return <Redirect to="/" />
    }
  }

  return (
    <Route {...rest} render={props => renderComponent(props)} />
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(RouteWrapper)