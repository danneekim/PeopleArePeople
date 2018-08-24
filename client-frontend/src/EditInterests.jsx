import React from 'react';

function EditInterests(props){
    
    return(
    <div className="editInterestWrapper">
        {
        props.oneUserInterests.map(interest => {
            return(
                <div 
                className="editInterest"
                key={interest.interest_id}> 
                    {interest.interests}
                <div className="editButtonSpace">
                    <button
                    type="submit"
                    onClick={()=>props.removeRemove((props.userToEdit.id), (interest.interest_id))}>
                        delete interest
                        </button>
                </div>    
                </div>

            )
        })
        }
    </div>
    )
}




export default EditInterests;