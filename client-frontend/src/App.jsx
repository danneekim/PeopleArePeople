import React, { Component } from 'react';
import Header from './Header';
import SplashPage from './SplashPage';
import NewUser from './NewUser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'SplashPage'
    }
  }









  determineWhichToRender() {
    const { currentView } = this.state;
    const { newUser } = this.state;

    switch (currentView) {
      case 'SplashPage':
        return <SplashPage />;
        break;
      // case 'NewUser':
      //   return <NewUser />;
      //   break;
    }
  }

  handleLinkClick(link) {
    this.setState({currentView: link});
  }

  render() {
    const links = [
      'SplashPage',
      // 'NewUser',
    ];

    return (
      <div>
        <Header links={links}/>
      </div>
    )
  }
}

export default App;
