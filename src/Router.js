import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const Dashboard = lazy(() =>
  import("./views/pages/Dashboard")
)

const Search = lazy(() =>
  import("./views/pages/Search")
)

const Report = lazy(() =>
  import("./views/pages/Report")
)

const Share = lazy(() =>
  import("./views/pages/Share")
)

const Hire = lazy(() =>
  import("./views/pages/Hire")
)

const Setting = lazy(() =>
  import("./views/pages/Setting")
)

const login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={Dashboard}
          />
          <AppRoute
            path="/search"
            component={Search}
          />
          <AppRoute
            path="/report"
            component={Report}
          />
          <AppRoute
            path="/share"
            component={Share}
          />
          <AppRoute
            path="/hire"
            component={Hire}
          />
          <AppRoute
            path="/setting"
            component={Setting}
          />
          <AppRoute
            path="/pages/login"
            component={login}
            fullLayout
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
