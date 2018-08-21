import React from 'react';

function UserIndex(props) {
    return (
        <div>
            here is the list of users:
            {
            props.users.map(user => {
                return (
                    <div key={user.id}>
                    {user.first_name} {user.last_name}
                    </div>
                )
            })
            }
            </div>
    )
}





export default UserIndex;