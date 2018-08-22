import React from 'react';

function EditUserInfo(props) {
    return(
        <div>
            You are editing user id:
            {props.idToEdit}
        </div>
    )

}


export default EditUserInfo;