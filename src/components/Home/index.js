// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogIn: false}

  onTextChange = () => {
    this.setState(prevState => ({isLogIn: !prevState.isLogIn}))
  }

  render() {
    const {isLogIn} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <Message isLogIn={isLogIn} />
          {isLogIn ? (
            <Logout logout={this.onTextChange} />
          ) : (
            <Login login={this.onTextChange} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
