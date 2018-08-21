import React, { Component } from 'react';
import './App.css';


class Interests extends Component {
    constructor(props){
        super(props);
        this.state = {
            hereCategory: [],
            allCategories: ['Music', 'Sports', 'Movies', 'DIY', 'Pet-Peeves'],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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



    render() {
        return(
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
                                name="food" 
                                value={interest.id} 
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