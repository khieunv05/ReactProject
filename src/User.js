import React,{useState} from "react";
function User(props){
    const [hoTen,setHoTen] = useState("");
    const [taiKhoan,setTaiKhoan] = useState("");
    const [matKhau,setMatKhau] = useState("");
    const handleHoTen = (e) =>{
        setHoTen(e.target.value);
    }
    const handleTaiKhoan = (e) =>{
        setTaiKhoan(e.target.value);
    }
    const handleMatKhau = (e) =>{
        setMatKhau(e.target.value);
    }
    const handleAddUser = (e) =>{
        e.preventDefault();
        const newUser = {hoTen:hoTen,taiKhoan:taiKhoan,matKhau:matKhau,money:0};
        props.onAdd(newUser);
        setHoTen("");
        setTaiKhoan("");
        setMatKhau("");
    }
    return(
        <form className="form">
            <div>
                <label>HỌ VÀ TÊN</label>
                <input type="text" onChange={handleHoTen} value={hoTen}></input>
            </div>
            <div>
                <label>TÀI KHOẢN</label>
                <input type="text" onChange={handleTaiKhoan} value={taiKhoan}></input>
            </div>
            <div>
                <label>MẬT KHẨU</label>
                <input type="password" onChange={handleMatKhau} value={matKhau}></input>
            </div>
            <div>
                <input type="submit" value="Đăng kí" onClick={handleAddUser}></input>
            </div>
        </form>
    )
}
export default User;