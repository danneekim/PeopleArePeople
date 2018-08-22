import React from 'react'

function FilterPage(props){
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
                    {props.matches.map(match => {
                        return(
                            <div key={match.user.id}>
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