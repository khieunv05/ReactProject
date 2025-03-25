import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
function Login(props){
    const navigate = useNavigate();
    const [taiKhoan,setTaiKhoan] = useState("");
    const [matKhau,setMatKhau] = useState("");
    const handleTaiKhoan = (e) =>{
        setTaiKhoan(e.target.value);
    }
    const handleMatKhau = (e) =>{
        setMatKhau(e.target.value);
    }
    const handleLogin = (e)=>{
        e.preventDefault();
        const user = {taiKhoan:taiKhoan,matKhau:matKhau};
        props.onLogin(user);
        setTaiKhoan("");
        setMatKhau("");
        navigate('/');
    }
    return(
        <form className="form">
            <div>
                <label>TÀI KHOẢN</label>
                <input type="text" onChange={handleTaiKhoan} value={taiKhoan}></input>
            </div>
            <div>
                <label>MẬT KHẨU</label>
                <input type="password" onChange={handleMatKhau} value={matKhau}></input>
            </div>
            <div>
                <input type="submit" value="Đăng nhập" onClick={handleLogin}></input>
            </div>
        </form>
    )
}
export default Login;