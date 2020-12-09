import './App.css';
import React from 'react'
// import { useEffect, useState } from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    githubUsers: [],
    githubUserName: "",
  }


  componentDidMount() {
    console.log("component mount and axio call coming")
    setTimeout(() => {
      axios.get("https://api.github.com/users/jordan-hanson")
        .then((response) => {
          console.log(response.data)
          this.setState({
            githubUsers: response.data.name
          }
          )
          console.log(this.state)
        })
        .catch(err => console.log(err))
    }, 3000)

  };
  handleChange = (e) => {
    this.setState({ githubUserName: e.target.value })
  }

  handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.githubUserName}`)
      .then(resp => {
        this.setState({
          githubUsers: resp.data.name
        })
      })
      .catch(err => console.log(err))
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("App: Updated")
  //   console.log("PROPS.........")
  //   console.log(prevProps, this.props)
  //   console.log("STATE..........")
  //   console.log(prevState, this.state)
  // };

  render() {
    console.log("App: Rendered")
    return (
      <div>
        <div>
          <h1>React GitHub User Card</h1>
        </div>
        <div>
          <form onSubmit={this.handleSearch}>
            <input type="text" onChange={this.handleChange} placeholder="Search GitHub User"></input>
            <button >Search</button>
          </form>
        </div>
        <div className="githubUserCard">
          {/* {
            this.state.githubUser.map(user => {
              return (<p src={user} />)
            })
          } */}
          <p>{this.state.githubUsers}</p>
        </div>
      </div>
    )
  }
}


export default App;
