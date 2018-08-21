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
  fetchInterestsByCategory,
} from './services/api';
import './App.css';
import { debug } from 'util';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'SplashPage',
      users: [],
      interests: [],
      categories: [],
    }
    this.createUser = this.createUser.bind(this);
    this.callingInterests = this.callingInterests.bind(this);
  }

  componentDidMount() {
    fetchUsers()
      .then(data => this.setState({ users: data }));

    fetchInterestsByCategory('Food')
      .then(data => this.setState({ interests: data }))
  }

  callingInterests(category) {
    fetchInterestsByCategory(category)
    .then(data => this.setState({ interests: data }))
  }


  createUser(user) {
    console.log(user)
    saveUser(user)
    .then(data => fetchUsers())
    .then(data => {
        this.setState({
          currentView: 'Interests',
          users: data,
        });
      })
      .catch(e =>{
        console.log(e);
      })
  }

 



  determineWhichToRender() {
    const { currentView } = this.state;
    const { user } = this.state;

    switch (currentView) {
      case 'SplashPage':
        return <SplashPage />;
      case 'NewUser':
        return <NewUser
          onSubmit={this.createUser}
          onClick={this.handleLinkClick.bind(this)}

        />;
      case 'FilterPage':
        return <FilterPage />;
      case 'UserIndex':
        return <UserIndex users={this.state.users} />;
      case 'Interests':
        return <Interests interests={this.state.interests} callingInterests={this.callingInterests}/>; //don't need to put state because it's a function
      default:
      }
  }

  handleLinkClick(links) {
    this.setState({ currentView: links });
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
      <div className='bigContainer'>
        <div className='Nav'>
          {/* <div className='Nav'> */}
          <Header
            onClick={this.handleLinkClick.bind(this)}
            links={links} />
          {this.determineWhichToRender()}
        </div>
      </div>
    )
  }
}

export default App;