import  React from 'react';
import {Link} from 'react-router-dom';
function Navbar(props){
    return(
        <div style=
        {{display:'flex',justifyContent:'space-between',
        padding:'10px',backgroundColor:'rgb(2, 20, 36)',
        color:'white',alignItems:'center'
        ,padding:'10px 50px'
        }}>
            <Link to='/'> <img src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/logo.png" alt="" /></Link>
            <div >
                <div style={{display:'flex'}}>
                    <Link to='/cart'> <p style={{fontSize:'1.5rem', margin:"10px"}}>Giỏ hàng</p></Link>
                    <Link to='/register'><p style={{fontSize:'1.5rem', margin:"10px"}}>Đăng kí</p></Link>
                    {props.isLogin === null && <Link to='/login'><p style={{fontSize:'1.5rem', margin:"10px"}}>Đăng nhập</p></Link>}
                    {props.isLogin !== null && <Link to='/login'><p style={{fontSize:'1.5rem', margin:"10px"}} onClick={props.logOut}>Đăng xuất</p></Link>}
                    {props.isLogin !== null && <Link to='/money'><p style={{fontSize:'1.5rem', margin:"10px"}}>Thêm tiền</p></Link>}
                </div>
                <div>
                    {props.isLogin !== null && <p style={{fontSize:'1.5rem', margin:"10px"}}>Số tiền: {props.isLogin.money}</p>}
                    {props.isLogin !== null && <p style={{fontSize:'1.5rem', margin:"10px"}}>Chào: {props.isLogin.hoTen}</p>}
                </div>
            </div>
            
            
            
        </div>
    )
}
export default Navbar;