import React, { Component } from 'react';
import Header from './Header';
import NewUser from './NewUser';
import UserIndex from './UserIndex';
import FilterPage from './FilterPage';
import Interests from './Interests';
import 'bulma/css/bulma.css'
import {
  fetchUsers,
  fetchOneUser,
  saveUser,
  fetchInterestsByCategory,
  saveInterests,
  fetchInterests,
  fetchUsersByInterest,
  updateUser,
  fetchInterestsByUserId,
  removeInterest,
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
      userToEdit: [],
      matches: [],
      selectedCategory: null,
      selectedInterests: null,
      oneUserInterests: [],
      //we want to declare these variables because we're going to use them in the filterpage later
    }
    this.createUser = this.createUser.bind(this);
    this.callingInterests = this.callingInterests.bind(this);
    this.setIdToEdit = this.setIdToEdit.bind(this);
    this.callingMatches = this.callingMatches.bind(this);
    this.updateOne = this.updateOne.bind(this);
    this.removeRemove = this.removeRemove.bind(this);
    this.turnToFilter = this.turnToFilter.bind(this);
  }



  componentDidMount() {
    fetchUsers()
      .then(data => {
        this.setState({ users: data })
      })
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
      fetchOneUser(id)
        .then(data => this.setState({userToEdit: data}))
      fetchInterestsByUserId(id)
        .then(data => this.setState({oneUserInterests: data}))
  }


  createUser(user) {
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

  updateOne(user, id) {
    if (user.first_name === '') {
        user.first_name = this.state.userToEdit.first_name
  }
    updateUser(user, id)
      .then(data => fetchUsers())
      .then(data => {
        this.setState({
          currentView: "UserIndex",
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

  removeRemove(userId, interestId) {
    removeInterest(userId, interestId)
    .then(data => fetchInterestsByUserId(userId))
    .then(data => {
      this.setState({
        oneUserInterests: data,
      })
    })
  }
 
  determineWhichToRender() {
    const { currentView } = this.state;
    const { user } = this.state;

    switch (currentView) {
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
          turnToFilter={this.turnToFilter}
        />; 
      case 'EditUserInfo':
        return <EditUserInfo
          users={this.state.users}
          idToEdit={this.state.idToEdit}
          userToEdit={this.state.userToEdit}
          callOneUser={this.callOneUser}
          updateOne={this.updateOne}
          oneUserInterests={this.state.oneUserInterests}
          removeRemove={this.removeRemove}
        />
      default:
    }

  }

  handleLinkClick(links) {
    this.setState({ currentView: links });
  }

  turnToFilter(){
    this.setState({currentView: 'FilterPage'})
  }

  render() {
    const links = [

      'NewUser',
      'FilterPage',
      'UserIndex',
    ];

    return (
        <div className = "grandparentContainer">

          <Header
            onClick={this.handleLinkClick.bind(this)}
            links={links} />
          {this.determineWhichToRender()}
        </div>
    )
  }
}

export default App;