import React from 'react';
import { Layout, Menu, Icon, Badge } from 'antd';
import City from './Components/City/City'
import Login from './Components/Login/Login'
import Info from './Components/Info/Info'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    login: undefined,
    followedCities: undefined,
    followedCount: 0
  };

  handleChange = name => event => {
    this.setState({ [name]: event} )
    console.log(event)
    if (name === "followedCities") {
      const followedCount = event.length
      this.setState({ followedCount })
    }
}

  setLogin = (login) => {
    this.setState({ login })
    console.log(login)
  }

  logout = () => {
    this.setState({ login: undefined, followedCities: undefined, followedCount: 0})
  }

  render() {
    console.log()
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} >
            <div className="logo" />
              {
                (!this.state.login) ?
                (
                  <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                      <Link to="/login">
                        <Icon type="user" />
                        <span>Login</span>
                      </Link>
                    </Menu.Item>
                  </Menu>
                )
                :
                (
                  <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                      <Link to="/followCity">
                        <Icon type="environment" />
                        <span>Follow City</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/info">
                        <Badge count={this.state.followedCount} offset={[12,0]}>
                          <Icon type="fire" />
                          <span>More Info</span>
                        </Badge>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={this.logout}>
                      <Link to="/login">
                        <Icon type="poweroff" />
                        <span>Logout</span>
                      </Link>
                    </Menu.Item>
                  </Menu>
                )
              }
          </Sider> 
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <h2 style={{ margin: '0px 16px', padding: 0}}>Przykładowa aplikacja pogody</h2>
            </Header>
            <Content style={{ margin: '14px 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route exact name="login" path="/login" render={() => <Login handleChange={this.handleChange} setLogin={this.setLogin} /> } />
                <Route name="followCity" path="/followCity" render={() => <City handleChange={this.handleChange} followed={this.state.followedCities} />} />
                <Route name="info" path="/info" render={() => <Info followed={this.state.followedCities}/>} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App