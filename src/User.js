import React, { useState, useEffect } from "react";
function User(props) {
    const [hoTen, setHoTen] = useState("");
    const [taiKhoan, setTaiKhoan] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [isHoTenValid, setIsHoTenValid] = useState(true);
    const [isTaiKhoanValid, setIsTaiKhoanValid] = useState(true);
    const [isMatKhauValid, setIsMatKhauValid] = useState(true);
    const [isHoTenEmpty, setIsHoTenEmpty] = useState(false);
    const [isTaiKhoanEmpty, setIsTaiKhoanEmpty] = useState(false);
    const [isMatKhauEmpty, setIsMatKhauEmpty] = useState(false);
    useEffect(() => {
        if (hoTen.length !== 0) setIsHoTenEmpty(false);
        if (taiKhoan.length !== 0) setIsTaiKhoanEmpty(false);
        if (matKhau.length !== 0) setIsMatKhauEmpty(false);
        if (hoTen.length >= 30) {
            setIsHoTenValid(false);
        }
        else setIsHoTenValid(true);
        if (taiKhoan.length >= 30) {
            setIsTaiKhoanValid(false);
        }
        else setIsTaiKhoanValid(true);
        if (matKhau === "") setIsMatKhauValid(true);
        else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(matKhau)) {
            setIsMatKhauValid(true);
        }
        else setIsMatKhauValid(false);
    }, [hoTen, taiKhoan, matKhau])
    useEffect(() => {
        if (props.users.length === 0) return;
        localStorage.setItem('usersData', JSON.stringify(props.users));
    }, [props.users])
    const handleHoTenEmpty = (e) => {
        if (e.target.value === "") setIsHoTenEmpty(true);
        else setIsHoTenEmpty(false);
    }
    const handleTaiKhoanEmpty = (e) => {
        if (e.target.value === "") setIsTaiKhoanEmpty(true);
        else setIsTaiKhoanEmpty(false);
    }
    const handleMatKhauEmpty = (e) => {
        if (e.target.value === "") setIsMatKhauEmpty(true);
        else setIsMatKhauEmpty(false);
    }
    const handleHoTen = (e) => {
        setHoTen(e.target.value);

    }
    const handleTaiKhoan = (e) => {
        setTaiKhoan(e.target.value);

    }
    const handleMatKhau = (e) => {
        setMatKhau(e.target.value);

    }
    const handleAddUser = (e) => {
        e.preventDefault();
        if (isHoTenValid === true && isTaiKhoanValid === true && isMatKhauValid === true && hoTen !== "" && taiKhoan !== "" && matKhau !== "") {
            const newUser = { hoTen: hoTen, taiKhoan: taiKhoan, matKhau: matKhau, money: 0 };
            props.onAdd(newUser);
            setHoTen("");
            setTaiKhoan("");
            setMatKhau("");
            alert("Đăng kí thành công");
        }
    }
    return (
        <form className="form">
            <div>
                <label>HỌ VÀ TÊN</label>
                <input type="text" onChange={handleHoTen} value={hoTen} onBlur={handleHoTenEmpty}></input>
                {isHoTenEmpty === true ? <label style={{ color: 'red' }}>Không được để trống</label> : null}
                {isHoTenValid === false ? <label style={{ color: 'red' }}>Không đặt tên dài quá 30 kí tự</label> : null}
            </div>
            <div>
                <label>TÀI KHOẢN</label>
                <input type="text" onChange={handleTaiKhoan} value={taiKhoan} onBlur={handleTaiKhoanEmpty}></input>
                {isTaiKhoanEmpty === true ? <label style={{ color: 'red' }}>Không được để trống</label> : null}
                {isTaiKhoanValid === false ? <label style={{ color: 'red' }}>Không đặt tên tài khoản dài quá 30 kí tự và không được để trống</label> : null}
            </div>
            <div>
                <label>MẬT KHẨU</label>
                <input type="password" onChange={handleMatKhau} value={matKhau} onBlur={handleMatKhauEmpty}></input>
                {isMatKhauEmpty === true ? <label style={{ color: 'red' }}>Không được để trống</label> : null}
                {isMatKhauValid === false ? <label style={{ color: 'red' }}>Mật khẩu phải chứa ít nhất 1 chữ số, 1 chữ thường, 1 chữ hoa và dài từ 8-16 kí tự</label> : null}
            </div>
            <div>
                <input type="submit" value="Đăng kí" onClick={handleAddUser}></input>
            </div>
        </form>
    )
}
export default User;