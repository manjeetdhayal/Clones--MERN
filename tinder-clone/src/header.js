import React from 'react'
import "./header.css"
import PersonIcon from '@material-ui/icons/Person'; // to import icon from package 
import IconButton from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';


function Header () {
    return <div className="header" >
     
       <IconButton><PersonIcon fontSize="large" className="header-icon"/> </IconButton> {/* to use the imported person icon  */}
    <img src="./tinderlogo.png" alt="" /> 
    
    <IconButton><ChatIcon/></IconButton>
    </div>
    ;
}


export default Header;