import React from 'react';

function Header(props) {
    const { links } = props;
    return (
        <div>


         <div className="parentContainer">
            <div className="logo">    
                <ul>
                <li>people</li>
                <li className="bigAre">are</li>
                <li>people</li>
                </ul>
            </div>

                {links.map(link => {
                    return <div
                        key={link}
                        onClick={() => props.onClick(link)}
                    >{link}

                    </div>
                })
                }

            </div>
        </div>
    )
}



export default Header;