import  React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div style=
        {{display:'flex',justifyContent:'space-between',
        padding:'10px',backgroundColor:'rgb(2, 20, 36)',
        color:'white',alignItems:'center'
        ,padding:'10px 50px'
        }}>
            <Link to='/'> <img src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/logo.png" alt="" /></Link>
            <Link to='/cart'> <p style={{fontSize:'1.5rem'}}>Trang chủ</p></Link>
            
            
            
        </div>
    )
}
export default Navbar;