import React,{useState} from 'react';
function AddMoney(props){
    const [money,setMoney] = useState(0);
    const handleMoney = (e) =>{
        setMoney(e.target.value);
    }
    const handleAddMoney = (e) =>{
        e.preventDefault();
        props.onAddMoney(money);
        setMoney(0);
        alert("Nạp tiền thành công");
    }
    return(
        <div>
            <h2>Nạp tiền vào tài khoản</h2>
            <br></br>
            <form className='form-money'>
                <label>Số tiền:</label>
                <input type="number" onChange={handleMoney} value={money}></input>
                <br></br>
                <input type="submit" value="Nạp tiền" onClick={handleAddMoney}></input>
            </form>
        </div>
    )
}
export default AddMoney;