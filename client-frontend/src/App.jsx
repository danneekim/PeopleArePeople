import React, { Component } from 'react';
import Header from './Header';
import SplashPage from './SplashPage';
import NewUser from './NewUser';
import UserIndex from './UserIndex';
import FilterPage from './FilterPage';
import Interests from './Interests';
import {
  fetchUsers,
  saveUser,
} from './services/api';
import './App.css';

class App extends Component {
 constructor(props) {
   super(props);
    this.state = {
      currentView: 'SplashPage',
      users: [],
    }
    this.beginInterestFill = this.beginInterestFill.bind(this);
  }

  componentDidMount() {
    fetchUsers()
      .then(data => this.setState({users: data.users}));
  }

  createUser(user) {
    console.log(user)
    saveUser(user)
    .then(data => fetchUsers())
    .then(data => {
      this.setState({
        currentView: 'UserIndex',
        users: data.users
      });
    });
  }

  beginInterestFill() {
    this.setState({
      currentView: 'Interests'
    })
  }



  determineWhichToRender() {
    const { currentView } = this.state;
    // const { user } = this.state;

    switch (currentView) {
      case 'SplashPage':
        return <SplashPage />;
      case 'NewUser':
        return <NewUser 
                  onSubmit={this.createUser} 
                  onClick={this.handleLinkClick.bind(this)}
                  beginInterestFill = {this.beginInterestFill}
              />;
      case 'FilterPage':
        return <FilterPage />;
      case 'UserIndex':
        return <UserIndex users={this.state.users} />;
      case 'Interests':
        return <Interests />;
    }
  }

  handleLinkClick(links) {
    this.setState({currentView: links});
  }

  render() {
    const links = [
      'SplashPage',
      'NewUser',
      'FilterPage',
      'UserIndex',
      'Interests'
    ];

    return (
      <div>
        <Header 
          onClick={this.handleLinkClick.bind(this)}
          links={links}/>
          {this.determineWhichToRender()}
      </div>
    )
  }
}

export default App;