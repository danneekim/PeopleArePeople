import React, { Component } from 'react';
import Header from './Header';
import SplashPage from './SplashPage';
import NewUser from './NewUser';
import UserIndex from './UserIndex';
import FilterPage from './FilterPage';
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
      users: ['elizabeth', 'fun', 'nofun'],
      first_name: '',
      last_name: '',
    }
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










<<<<<<< HEAD

 determineWhichToRender() {
   const { currentView } = this.state;
   // const { NewUser } = this.state;

   switch (currentView) {
     case 'SplashPage':
       return <SplashPage />;
     
     case 'NewUser':
       return <NewUser />;
   }
 }

 handleLinkClick(links) {
   this.setState({currentView: links});
 }

 render() {
   const links = [
     'NewUser',
   ];

   return (
     <div>
       <Header
         onClick={this.handleLinkClick.bind(this)}
         links={links}/>
     </div>
   )
 }
=======
  determineWhichToRender() {
    const { currentView } = this.state;
    // const { user } = this.state;

    switch (currentView) {
      case 'SplashPage':
        return <SplashPage />;
      case 'NewUser':
        return <NewUser users={this.state.users}/>;
      case 'FilterPage':
        return <FilterPage />;
      case 'UserIndex':
        return <UserIndex users={this.state.users} />;
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
      'UserIndex'
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
>>>>>>> 1f462296c6a75854e8d684ac158b3fc80c4b80a7
}

export default App;