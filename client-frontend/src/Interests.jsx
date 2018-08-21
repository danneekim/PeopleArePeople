import React, { Component } from 'react';
import './App.css';


class Interests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hereCategory: [],
            allCategories: ['Music', 'Sports', 'Movies', 'DIY', 'Pet-Peeves'],
            checkedItems: [],
        
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({ hereCategory: 'Food' })
        this.props.callingInterests('Food');
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            hereCategory: this.state.allCategories[0]
        })
        this.props.callingInterests(this.state.allCategories[0]);
    }

    handleChange(e) {
       const { name } = e.target;
       const { interests } =  this.props.interests 
       if(e.target.checked) {
           this.setState(prevState => ({interests: [...prevState.interests, name]}))
       } else {
           this.setState(prevState => ({interests: prevState.interests.filter(el => el!== name)}))
       }
    }

    render() {
        return (
            <div className='interests'>
            <div>     
               {this.state.hereCategory} 
            </div>

                <form onSubmit={this.handleSubmit}>
                    {
                    this.props.interests.map(interest => {
                        return(
                            <div>
                            <label key={interest.id}>{interest.interests}</label>
                            <input 
                                type="checkbox" 
                                id={interest.id} 
                                name={this.state.hereCategory}
                                value={interest.id} 
                                onChange={this.handleChange}
                            />
                            <br></br>
                            </div>
                        )
                    })
                    }
                    <input type="submit"></input>
                </form>
            </div>
        )
    }

}

export default Interests;