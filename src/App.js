import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import City from './Components/City/City'
import Login from './Components/Login/Login'
import Info from './Components/Info/Info'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    logged: false,
    login: undefined,
    followedCities: undefined
  };

  handleChange = name => event => {
    this.setState({ [name]: event} )
    console.log(event)
}

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Link to="/login">
                  <Icon type="user" />
                  <span>Login</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="user" />
                <span>Register</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/followCity">
                  <Icon type="environment" />
                  <span>Follow City</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/info">
                  <Icon type="fire" />
                  <span>More Info</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '14px 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route name="login" path="/login" render={() => <Login setUser={this.setUser} /> } />
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