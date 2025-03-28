import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Navbar from './navbar.jsx';
import ThanhToan from './ThanhToan.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './User.js';
import Home from './Home.jsx';
import Login from './Login.js';
import AddMoney from './AddMoney.js';
import { useNavigate } from "react-router-dom";
function App() {
  const [gioHang, setGioHang] = useState([]);
  const [user, setUser] = useState([]);
  const [whoLogin, setWhoLogin] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem('usersData');
    if (data) {
      setUser(JSON.parse(data));
    }
  }, [])
  const handleAddToCart = (item) => {
    setGioHang([...gioHang, item]);
  }
  const handleRemoveItem = (id) => {
    setGioHang(gioHang.filter((_, element) => element != id));
  }
  const handleRemoveAll = () => {
    setGioHang([]);
  }
  const handleAddUser = (newUser) => {
    setUser([...user, newUser])
  }
  const handleAddMoney = (newMoney) => {
    const check = user.find((item) => item.taiKhoan === whoLogin.taiKhoan);
    check.money += parseInt(newMoney, 10);
    const newUser = user.map((item) => {
      return item.taiKhoan === check.taiKhoan ? check : item;
    })
    setUser(newUser);
    console.log(check.money);
  }
  console.log(user);
  console.log(gioHang);
  const handleLogin = (newUser) => {
    const check = user.find((item) => item.taiKhoan === newUser.taiKhoan && item.matKhau === newUser.matKhau);
    if (check) {
      alert("Đăng nhập thành công");
      setWhoLogin(check);
      navigate('/');
    }
  }
  const handleLogOut = () => {
    setWhoLogin(null);
  }
  return (
    <>
      <Navbar isLogin={whoLogin} logOut={handleLogOut} />
      <Routes>
        <Route path="/" element={<Home addToCart={handleAddToCart} />} />
        <Route path="/cart" element={<ThanhToan gioHang={gioHang} onDelete={handleRemoveItem} onDeleteAll={handleRemoveAll} whoLogin={whoLogin} users={user} setUsers={setUser} />} />
        <Route path="/register" element={<User onAdd={handleAddUser} users={user} />}></Route>
        <Route path="/login" element={<Login onLogin={handleLogin} isLogin={whoLogin} />}></Route>
        <Route path="/money" element={<AddMoney onAddMoney={handleAddMoney} />}></Route>
      </Routes>
    </>


  );
}

export default App;
