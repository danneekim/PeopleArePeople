import React from 'react';

function Header(props) {
    const { links } = props;
    return(
        <div>
            <span>I'm the header</span>
            <br></br>
            <br></br>
        <div>
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