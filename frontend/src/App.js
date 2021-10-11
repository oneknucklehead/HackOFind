import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/SignIn/Login'
import TinderCards from './screens/TinderCard/TinderCards'
import Chats from './screens/Chats/Chats'
import Register from './screens/SignIn/Register'
import ProfileScreen from './screens/Profile/ProfileScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/chat'>
            <Chats />
          </Route>
          <Route path='/profile' component={ProfileScreen}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/' component={TinderCards}></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
