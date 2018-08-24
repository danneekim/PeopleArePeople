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

                    <button type="submit"
                    onClick={()=>props.removeRemove((props.userToEdit.id), (interest.interest_id))}>
                        delete interest
                        </button>
                    
                </div>

            )
        })
        }
    </div>
    )
}




export default EditInterests;