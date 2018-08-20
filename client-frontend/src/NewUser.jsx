import React from 'react';

function NewUser(props) {
    return(
        <div>
            new user:
            {props.users.map(user => {
                return (
                    <div key={user}>
                    {user.first_name}{user.last_name}
                    </div>
                )
            })
            }
            <form>
                <input 
                type='text' 
                name='first_name'
                value={this.state.first_name} />
                </form>
        </div>
    )
}


export default NewUser;