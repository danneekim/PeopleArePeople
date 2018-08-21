import React, { Component } from 'react';
import Interests from './Interests';


class NewUser extends Component{
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            cohort: '',
            horoscope: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);

    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }




    render() {
        return(
            <div>
                new user:
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='first_name'
                        value={this.state.first_name}
                        onChange={this.handleChange} 
                        placeholder="First name"
                    />
                    <input 
                        type='text' 
                        name='last_name'
                        value={this.state.last_name} 
                        onChange={this.handleChange} 
                        placeholder="Last name"
                    />
                    <input 
                        type='text' 
                        name='cohort'
                        value={this.state.cohort} 
                        onChange={this.handleChange} 
                        placeholder="Cohort"
                    />
                    <input 
                        type='text' 
                        name='horoscope'
                        value={this.state.horoscope}
                        onChange={this.handleChange} 
                        placeholder="Horoscope" 
                    />
                    <input 
                        type="submit"
                        value="create new user"
                    />
                    </form>
            </div>
        )
    }

}


export default NewUser;