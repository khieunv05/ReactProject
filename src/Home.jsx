import Card from "./Card";
import React, { useState, useEffect } from "react";
function Home(props) {
  const [mayTinh, setMayTinh] = useState([]);
  useEffect(() => {
    fetch(`/computer.json`)
      .then(response => response.json())
      .then(data => setMayTinh(data))

  })


  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 5;
  const indexOfLastProduct = Math.min(currentPage * productPerPage, mayTinh.length);
  const indexOfFirstProduct = Math.max(0, indexOfLastProduct - productPerPage);
  const handlePageIncrease = () => {

    if (currentPage * productPerPage >= mayTinh.length) {
      setCurrentPage(c => c = Math.ceil(mayTinh.length / productPerPage));
    }
    else setCurrentPage(c => c + 1);
  }
  const handlePageDecrease = () => {
    if (currentPage <= 1) {
      setCurrentPage(c => c = 1);
    }
    else setCurrentPage(c => c - 1);
  }
  return (
    <div className="App main">
      <h1>PC GAMING</h1>
      <div className='card-container'>
        <div style={{ width: '100%', overflowX: 'hidden' }}>
          <div style={{ fontSize: '2rem' }} className="running">Sản phẩm bán chạy</div>
        </div>
        <div>
          <button onClick={handlePageDecrease}>Previous</button>
          <button onClick={handlePageIncrease}>Next</button>
        </div>

        <div className="card-item">
          {mayTinh.slice(indexOfFirstProduct, indexOfLastProduct).map((item, index) => {
            return (
              <Card src={item.src} cardTitle={item.cardTitle} cardText={item.cardText} price={item.price} id={index} handleAddToCard={props.addToCart} />
            )
          })}
        </div>
      </div>
      <div className='card-container'>
        <div>
        </div>
        <div style={{ width: '100%', overflowX: 'hidden' }}>
          <div style={{ fontSize: '2rem' }} className="running">Sản phẩm hiệu năng cao</div>
        </div>
        <div className="card-item">
          {mayTinh.slice(5, 10).map((item, index) => {
            return (
              <Card src={item.src} cardTitle={item.cardTitle} cardText={item.cardText} price={item.price} id={index} handleAddToCard={props.addToCart} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Home;