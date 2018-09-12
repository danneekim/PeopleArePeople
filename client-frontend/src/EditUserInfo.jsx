import React, { Component } from 'react';
import EditInterests from './EditInterests';
import { fetchOneUser } from './services/api';


class EditUserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: this.props.userToEdit.first_name,
            last_name: this.props.userToEdit.last_name,
            cohort: this.props.userToEdit.cohort,
            horoscope: this.props.userToEdit.horoscope,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.updateOne((this.state), (this.props.idToEdit))
       
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="childWrapper">
                <div className="childEditUserInfoContainer">
                    
                    <p className="childEditParagraph">Greetings,<br/> {this.props.userToEdit.first_name} {this.props.userToEdit.last_name}
                    {/* {this.props.userToEdit.horoscope}*/} from {this.props.userToEdit.cohort},<br/> would you like to edit your user profile?
                    </p>
                   
                
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
                        <br />
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
                        <br />
                        <input
                            className="childEditSubmit"
                            type="submit"
                            value="Update user"
                        />
                    </form>

                   
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