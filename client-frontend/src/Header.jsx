import React from 'react';

function Header(props) {
    const { links } = props;
    return(
        <div>
        <div className = "parentContainer">
            {links.map(link => {
                return<div
                    key={link}
                    onClick={()=> props.onClick(link)}
                >{link}
                <br></br>
                <br></br>
                </div>
            })
            }
            
        </div> 
        </div>    
    )
}



export default Header;