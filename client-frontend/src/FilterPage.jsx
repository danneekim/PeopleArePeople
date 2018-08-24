import React from 'react'

function FilterPage(props) {

    let emptyMessage = null;

    if (props.selectedCategory && props.selectedInterests && props.matches.length === 0) {
        emptyMessage = 'Sorry you have no matches!';
    }

    // the if statement: if all the items are strictly zero, it will show this message 

    return (
        <div className="childWrapper">

            <div className="childFilterContainer">  

                <div>
                    <h4>Find people with similar interests..</h4>
                </div>

                <div className="filterButtonsWrapper">
                    <div className="filterButtons">  

                        <button onClick={() => props.callingInterests("Food")}>
                            Cuisine</button>
                        <button onClick={() => props.callingInterests("Music")}>
                            Music</button>
                        <button onClick={() => props.callingInterests("Sports")}>
                            Sports</button>
                        <button onClick={() => props.callingInterests("Movies")}>
                            Movies</button>
                        <button onClick={() => props.callingInterests("DIY")}>
                            DIY</button>
                        <button onClick={() => props.callingInterests("Pet-Peeves")}>
                        Pet-Peeves</button>

                    </div>
                </div>
            
                
                <div className="filterItemsWrapper">
                    <div className = "filterItems" >
                        {props.interests.map(interest => {
                            return (
                                <div>
                                    <button key={interest.id} onClick={() => props.callingMatches(interest.id)}>
                                        {interest.interests}
                                    </button>

                                </div>
                            )
                        })}
                    </div>
                </div>
            
    
                    <div>
                         {emptyMessage ? <div className="emptyMessage">{emptyMessage}
                     </div> : null}
                         {/* returns the called emptyMessage if statement returns true */}
                         {props.matches.map(match => {
                             return (
                                 <div key={match.id}>
                                    <p>{match.first_name} {match.last_name} in {match.cohort}</p>
                                 </div>
                                 
                                 
                             )
                         })

                         }
                     </div>
                 </div>
                


            </div>



            
       
    )
}

export default FilterPage;