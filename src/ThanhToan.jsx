import CardContext from "./CartContext";
import {useContext} from 'react';
function ThanhToan(){
    const [gioHang,setGioHang] = useContext(CardContext);
    var totalMoney = 0;
    gioHang.map((item)=>{
        totalMoney += item.price * item.quantity;
    })
    return(
        <div className="container">
            <div className="main-content">
                <h2>Giỏ hàng của bạn</h2>
                <div className="ruler"></div>
                <div className="items">
                    {gioHang.map((item,index)=>{
                        return(
                            <div className="item">
                                <div className="item-container" key={item.id}>
                                    <h2 style={{flex:1,textAlign:"left"}}>{item.title}</h2>
                                    <div >
                                        <p style={{color:'red'}}>Giá:{item.price}đ</p>
                                        <p>Số lượng:{item.quantity}</p>
                                    </div>
                                </div>
                                <div className="ruler"></div>
                            </div>
                        )
                        
                    })}
                </div>
                <div className="totalMoney"><h2>Tổng tiền :{totalMoney}</h2></div>
            </div>
        </div>
        

    )
}
export default ThanhToan;