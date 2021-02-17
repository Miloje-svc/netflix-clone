/* eslint-disable react-hooks/exhaustive-deps */
import './App.scss'
import { Switch, Route, } from 'react-router-dom'
import { routes } from './routes'
import Home from './pages/Home'
import Browse from './pages/Browse'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from './state/GlobalState'
import { auth } from './firebase/firebase'

function App() {
  const { user } = useContext(GlobalContext)
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log(authUser)
      } else {
        console.log("No User")
      }
    })

    user ? history.push(routes.BROWSE) : history.push(routes.HOME)
  }, [])

  return (
    <Switch>
      {user && <Route exact path={routes.BROWSE} component={Browse} />}
      <Route exact path={routes.SIGNIN} component={SignIn} />
      <Route exact path={routes.SIGNUP} component={SignUp} />
      <Route exact path={routes.HOME} component={Home} />
    </Switch>
  )
}

export default App
