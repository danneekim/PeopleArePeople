import React, { Component } from 'react';
import './App.css';


class Interests extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: ['food', 'movies', 'music'],
            interests: ['Mexican', 'Italian', 'Chinese', 'French', 'Thai']
        }
    }


    render() {
        return(
            <div className='interests'>
                {/* Pick your favorite:{this.props.categories[0]} */}
                <form>
                    {
                    this.state.interests.map(interest => {
                        return(
                            <div>
                            <label key={interest.id}>{interest}</label>
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
             
                </form>
            </div>
        )
    }

}

export default Interests;