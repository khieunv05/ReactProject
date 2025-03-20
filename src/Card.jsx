import react,{useState} from 'react';
import {useContext} from 'react';
import CardContext from './CartContext';
function Card(props){
    const [isDisplay,setDisplay] = useState(false);
    const [count,setCount] = useState(1);
    const [gioHang,setGioHang] = useContext(CardContext);
    const handleCountIncrement = () =>{
        setCount(c => c + 1);
    }
    const handleCountDecrement = () =>{
        setCount(c => c - 1);
        if(count === 0){
            setCount(0);
        }
    }
    const handleDisplay = () =>{
        setDisplay(!isDisplay);
        console.log(isDisplay);
    }
    const handleAddToCart = () =>{
        setGioHang(gh => [...gh,{id:props.id,title:props.cardTitle,price:props.price,quantity:count}]);
        setCount(1);
        console.log(gioHang);
    }
    return(
        <>
        {isDisplay === true ? 
        <div style={{position:'fixed',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)',zIndex:'1',paddingLeft:'25%',top:'0'}}>
            <div className="detail" style={{backgroundColor:'white',width:'60%',marginTop:'10%',padding:'20px',textAlign:'center'}}>
                <img src={props.src} alt="" />
                <h2>{props.cardTitle}</h2>
                <p>{props.cardText}</p>
                <div>
                    <button onClick={handleCountIncrement} style={{padding:'5px'}}>+</button>
                    <span>{count}</span>
                    <button onClick={handleCountDecrement} style={{padding:'5px'}}>-</button>
                </div>
                <button  style={{padding:'10px'}} onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                <button onClick={handleDisplay} style={{padding:'10px'}}>Thoát</button>
            </div>
        </div>
        
        
        : null
            
        }

        <div className="card" >
            <img src={props.src} alt="" />
            <h2>{props.cardTitle}</h2>
            <p>{props.cardText}</p>
            <button onClick={handleDisplay}>Thêm vào giỏ</button>
        </div>
        
        </>
        
        
        
    )
}
export default Card;