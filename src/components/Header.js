import React from 'react';
import Logo from './Logo';


const Header = () => (
    <header className="container">
        <div className="card"> 
        <div className= "card-header" >
        <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
            <button type="button">
                <img src="/images/misc/user.png" alt="User Profile"/>
            </button>
        </li>
        
        <li className="nav-item">
            <Logo/>
           
        </li>
        <li className="nav-item">
            <button type="button">
                
                <img src="/images/misc/liked.jpg" alt="Liked Cars" 
                height="120" width="120"/>
            
            </button>
            </li>
            </ul>
            </div>
        </div>
        
        
    </header>
)

export default Header;


