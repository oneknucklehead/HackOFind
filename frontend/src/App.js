import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/SignIn/login'
import TinderCards from './screens/TinderCard/TinderCards'
import Chats from './screens/Chats/Chats'
import SwipeButtons from './screens/SwipeButtons/SwipeButtons'
function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/login'>
            <Header />
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
