import React from 'react';

function Header(props) {
    return(
        <div>
            I'm the header
            {props.links}
        </div>
    )
}



export default Header;