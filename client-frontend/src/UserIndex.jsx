import React from 'react';

function UserIndex(props) {
    return (
        <div className= "childContainer">
            <strong>here is the list of users:</strong>
            {
            props.users.map(user => {
                return (
                    <div 
                    key={user.id}
                    onClick={()=>props.setIdToEdit(user.id)}
                    >
                    {user.first_name} {user.last_name}
                    </div>
                )
            })
            }
            </div>
    )
}





export default UserIndex;