import React from 'react';

function UserIndex(props) {
    return (
        <div>
            here is the list of users:
            {
            props.users.map(user => {
                return (
                    <div key={user}>
                    {user}
                    </div>
                )
            })
            }
            </div>
    )
}





export default UserIndex;