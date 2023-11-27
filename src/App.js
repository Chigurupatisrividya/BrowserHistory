import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import TeamCard from './components/TeamCard'
const App = () => (
  <h1>
    (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route path="/team-card/:id" component={TeamCard} />>
      <Route component={NotFound} />
    </Switch>
    )
  </h1>
)

export default App
