import React from 'react';
import logo from '../Image/logo.jpg';

const Navbar = () => {
    return (
        <>
            <div className="row bg-primary m-0 p-3">
            <div className="col-12">
                <img src={logo} alt="logo" height5="50" width="50"/> 
                 <h2 style={{display:"inline",marginLeft:"1rem"}}>Deepak Keep</h2>
            </div>
            
            </div>
        </>
    )
}

export default Navbar;
