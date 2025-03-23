import React,{ useState} from 'react';
function ThanhToan(props){
    var totalMoney = 0;
    props.gioHang.map((item)=>{
        totalMoney += item.price * item.quantity;
    })
    return(
        <div className="container">
            <div className="main-content">
                <h2>Giỏ hàng của bạn</h2>
                <div className="ruler"></div>
                <div className="items">
                    {props.gioHang.map((item,index)=>{
                        return(
                            <div className="item">
                                <div className="item-container" key={item.id}>
                                    <h2 style={{flex:1,textAlign:"left"}}>{item.title}</h2>
                                    <div >
                                        <p style={{color:'red'}}>Giá:{item.price}đ</p>
                                        <p>Số lượng:{item.quantity}</p>
                                    </div>
                                    <div>
                                        <button style={{border:"1px solid black", padding:"15px",marginLeft:"10px"}} onClick={()=>{props.onDelete(index)}}>Xóa</button>
                                    </div>
                                </div>
                                <div className="ruler"></div>
                            </div>
                        )
                        
                    })} 
                </div>
                <div className="totalMoney">
                    <button onClick={props.onDeleteAll}>Xóa tất cả giỏ hàng</button>
                    <h2 style={{color:"red"}}>Tổng tiền :{totalMoney}</h2>
                </div>
            </div>
        </div>
        

    )
}
export default ThanhToan;