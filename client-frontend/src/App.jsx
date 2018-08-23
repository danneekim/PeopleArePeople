import React, { Component } from 'react';
import Header from './Header';
import SplashPage from './SplashPage';
import NewUser from './NewUser';
import UserIndex from './UserIndex';
import FilterPage from './FilterPage';
import Interests from './Interests';
import 'bulma/css/bulma.css'
import {
  fetchUsers,
  saveUser,
  fetchInterestsByCategory,
  saveInterests,
  fetchInterests,
  fetchUsersByInterest,
} from './services/api';
import './App.css';
import { debug } from 'util';
import EditUserInfo from './EditUserInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'SplashPage',
      users: [],
      interests: [],
      categories: [],
      checkedInterests: [],
      idToEdit: '',
      matches: [],
      selectedCategory: null,
      selectedInterests: null,
      //we want to declare these variables because we're going to use them in the filterpage later
    }
    this.createUser = this.createUser.bind(this);
    this.callingInterests = this.callingInterests.bind(this);
    this.setIdToEdit = this.setIdToEdit.bind(this);
    this.callingMatches = this.callingMatches.bind(this);
  }



  componentDidMount() {
    fetchUsers()
      .then(data => this.setState({ users: data }))
  }

  callingInterests(category) {
    fetchInterestsByCategory(category)
      .then(data => this.setState({
        interests: data,
        selectedCategory: category,
        selectedInterests: null, //keep track of knowing whether or not to use the emptymessage
        matches: [], //we need it to be empty(reset) so we can get rid of the emptymessage
      })
    );
  }

  callingMatches(interestId) {
    fetchUsersByInterest(interestId)
      .then(data => this.setState({ 
        matches: data,
        selectedInterests: interestId,
      }));
  }


  setIdToEdit(id) {
    this.setState({
      idToEdit: id,
      currentView: "EditUserInfo",
    })
  }


  createUser(user) {
    console.log(user)
    saveUser(user)
      .then(data => fetchUsers())
      .then(data => {
        this.setState({
          currentView: "Interests",
          users: data,
        })
      })
      .catch(e => {
        console.log(e);
      })
  }

  createInterests(final) {
    saveInterests(final)
      .then(data => fetchInterests())
      .then(data => {
        this.setState({
          checkedInterests: data
        })
      })
      .catch(e => {
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
        return <FilterPage
          callingInterests={this.callingInterests}
          interests={this.state.interests}
          callingMatches={this.callingMatches}
          matches={this.state.matches}
          selectedCategory={this.state.selectedCategory}
          selectedInterests={this.state.selectedInterests}
        />;
      case 'UserIndex':
        return <UserIndex
          users={this.state.users}
          setIdToEdit={this.setIdToEdit}
        />;
      case 'Interests':
        return <Interests
          users={this.state.users}
          interests={this.state.interests}
          callingInterests={this.callingInterests}
          onSubmit={this.createInterests}
        />; //don't need to put state because it's a function
      case 'EditUserInfo':
        return <EditUserInfo
          users={this.state.users}
          idToEdit={this.state.idToEdit}
        />
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