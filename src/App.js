import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AttractionList from './containers/attractions/list'
import AttractionDetail from './containers/attractions/detail'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      attractions: []
    }
  }

  render() {
    const { attractions } = this.state
    console.log('attractions::', attractions)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AttractionList} />
          <Route exact path="/attractions" component={AttractionList} />
          <Route exact path="/attraction/:id" component={AttractionDetail} />
        </Switch>
      </Router>
    )
  }
}

export default App
