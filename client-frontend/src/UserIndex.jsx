import React from 'react';

function UserIndex(props) {
    return (
        <div className="childWrapper">
            <div className= "childUserIndexContainer">

                    <div className="userIndexTitle">
                    <strong>Here are our current list of users:</strong>
                    </div>
            
                    <div className="userIndexWrapper">
                    {
                    props.users.map(user => {
                        return (
                            <div 
                            className = "userIndex"
                            key={user.id}
                            onClick={()=>props.setIdToEdit(user.id)}
                            ><ul>
                            <li>{user.first_name} {user.last_name}</li>
                            </ul>
                            </div>
                        )
                    })
                    }
                    </div>
            </div>
        </div>
    )
}





export default UserIndex;