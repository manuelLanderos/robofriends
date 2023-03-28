import React, { Component } from "react"
import Cardlist from "../components/Cardlist"
import SearchBox from "../components/SearchBox.js"
import Scroll from "../components/Scroll"
import "./app.css"
import ErrorBoundry from "../components/ErrorBoundry"



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''

    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))

  }

  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })


  }


  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {

      return (
        <div className="tc" >
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.OnSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
  }
}


export default App