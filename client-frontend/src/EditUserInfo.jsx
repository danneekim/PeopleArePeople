import React, { Component } from 'react';
import EditInterests from './EditInterests';


class EditUserInfo extends Component {
    constructor(props){
        super(props)
        this.state={
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
        this.props.updateOne((this.state), (this.props.idToEdit));
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

render(){
    return(
        <div className = "childContainer">
            <div>
            You are editing user id:
            {this.props.idToEdit}
            </div>
            <div>
                {this.props.userToEdit.first_name} {this.props.userToEdit.last_name}
                {this.props.userToEdit.horoscope} {this.props.userToEdit.cohort}
            </div>
            <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='first_name'
                        value={this.state.first_name}
                        onChange={this.handleChange} 
                        placeholder={this.props.userToEdit.first_name}
                    />
                    <input 
                        type='text' 
                        name='last_name'
                        value={this.state.last_name} 
                        onChange={this.handleChange} 
                        placeholder={this.props.userToEdit.last_name}
                    />
                    <br/>
                    <input 
                        type='text' 
                        name='cohort'
                        value={this.state.cohort}
                        onChange={this.handleChange} 
                        placeholder={this.props.userToEdit.cohort}
                    />
                    <input 
                        type='text' 
                        name='horoscope'
                        value={this.state.horoscope}
                        onChange={this.handleChange} 
                        placeholder={this.props.userToEdit.horoscope}  
                    />
                    <br/>
                    <input 
                        type="submit"
                        value="Update user"
                    />
                    </form>
                    <div>
                        <br></br><br></br>
                    <EditInterests 
                    oneUserInterests={this.props.oneUserInterests}
                    removeRemove={this.props.removeRemove} 
                    userToEdit={this.props.userToEdit}
                    />
                    </div>
        </div>
    )
}
}


export default EditUserInfo;