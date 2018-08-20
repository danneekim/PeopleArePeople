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

   this.handleLinkClick = this.handleLinkClick.bind(this);
 }









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
}

export default App;