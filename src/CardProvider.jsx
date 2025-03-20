import CardContext from './CartContext';
import react,{useState} from 'react';
function CardProvider({children}){
    const [gioHang,setGioHang] = useState([]);
    return(
        <CardContext.Provider value={[gioHang,setGioHang]}>
            {children}
        </CardContext.Provider>
    )
}
export default CardProvider;