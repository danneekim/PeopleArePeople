import React from 'react';

function EditInterests(props){
    
    return(
    <div>
        {
        props.oneUserInterests.map(interest => {
            return(
                <div key={interest.interest_id}>
                    {interest.interests}

                    <button type="submit"
                    onClick={()=>props.removeRemove((props.userToEdit.id), (interest.interest_id))}>
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