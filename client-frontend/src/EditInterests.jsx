import React from 'react';

function EditInterests(props){

    return(
    <div>
        {
        props.oneUserInterests.map(interest => {
            return(
                <div key={interest.interests_id}>
                    {interest.interests}

                    <button 
                    onClick={()=>props.removeRemove((props.userToEdit.id), (interest.interests_id))}>
                        delete interest
                        </button>
                    <br></br><br></br>
                </div>

            )
        })
        }
    </div>
    )
}




export default EditInterests;