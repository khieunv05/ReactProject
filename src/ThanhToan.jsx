import React,{ useState} from 'react';
function ThanhToan(props){
    const [isDisplay,setIsDisplay] = useState(false);
    var totalMoney = 0;
    props.gioHang.map((item)=>{
        totalMoney += item.price * item.quantity;
    })
    const handleBuy = (e)=>{
        e.preventDefault();
        if(props.whoLogin.money<totalMoney){
          setIsDisplay(true);
        }
        else{
            props.whoLogin.money = props.whoLogin.money - totalMoney;
            alert("Thanh toán thành công");
            props.onDeleteAll();
            const newUser = props.users.map((item) =>{
                return item.taiKhoan === props.whoLogin.taiKhoan ? props.whoLogin : item;
            })
            props.setUsers(newUser);
            setIsDisplay(false);
        }
      }
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
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                        {props.whoLogin !== null && (<>
                        <button onClick={handleBuy}>Thanh toán</button>
                        {isDisplay === true && (
                            <div style={{position:"fixed",width:'100%',height:'100%',backgroundColor:"rgba(0,0,0,0.5)",zIndex:'1000',textAlign:"center",paddingTop:"200px",top:"0",left:"0"} } onClick={()=>{setIsDisplay(false)}}>
                                <div style={{backgroundColor:"white",width:"50%",margin:"auto",padding:"20px"}}>
                                    <h2 >Vấn đề tiền nong</h2>
                                    <img src="data:image/jpeg;base64,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" alt="" />
                                </div>
                            </div>

                        )}
                        </>
                        )
                        }
                        <button onClick={props.onDeleteAll}>Xóa tất cả giỏ hàng</button>
                    </div>
                    <h2 style={{color:"red"}}>Tổng tiền :{totalMoney}</h2>
                </div>
            </div>
        </div>
        

    )
}
export default ThanhToan;