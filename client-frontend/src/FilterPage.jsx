import React from 'react'

function FilterPage(props){

    let emptyMessage = null; 

    if(props.selectedCategory && props.selectedInterests && props.matches.length === 0){
        emptyMessage = 'Sorry you have no matches!';
    }

    // the if statement: if all the items are strictly zero, it will show this message 

    return(
        <div>
            <span>Filter by:</span>
            <br></br><br></br>
            <button onClick={()=>props.callingInterests("Food")}>
            Cuisine</button>
            <br></br><br></br>
            <button onClick={()=>props.callingInterests("Music")}>
            Music</button>
            <br></br><br></br>
            <button onClick={()=>props.callingInterests("Sports")}>
            Sports</button>
            <br></br><br></br>
            <button onClick={()=>props.callingInterests("Movies")}>
            Movies</button>
            <br></br><br></br>
            <button onClick={()=>props.callingInterests("DIY")}>
            DIY</button>
            <br></br><br></br>
            <button onClick={()=>props.callingInterests("Pet-Peeves")}>
            Pet-Peeves</button>
            <br></br><br></br>
            <div className='interests'>
                <div>
                    {props.interests.map(interest => {
                        return(
                            <div>
                            <button key={interest.id} onClick={()=>props.callingMatches(interest.id)}>
                                {interest.interests}
                            </button>
                            <br></br><br></br>
                            </div>
                        )
                    })}
                </div>
                <div>

                    { emptyMessage ? <div className="emptyMessage">{ emptyMessage}</div> : null}
                    {/* returns the called emptyMessage if statement returns true */}

                    {props.matches.map(match => {
                        return(
                            <div key={match.id}>
                            {match.first_name}
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