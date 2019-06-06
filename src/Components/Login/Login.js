import React from 'react';
import { Icon, Input, Button, Card } from 'antd';
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: undefined
  }

  setUsername = (v) => {
    this.setState({ username: v.target.value })
  }

  setLogin = () => {
    if (this.state.username) {
      this.props.setLogin(this.state.username)
    }
  }

  render() {
    return(
      <Card style={{ width: 350, marginLeft: 'auto', marginRight: 'auto' }}>
        <Input
          style={{ margin: '15px 0px' }}
          onChange={this.setUsername}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
          placeholder="Username"
        />
        <Input
          style={{ margin: '15px 0px' }}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
        <Link to="/followCity">
          <Button type="primary" onClick={this.setLogin} >Login</Button>
        </Link>
      </Card>
    )
  }
}

export default Login