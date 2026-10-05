import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartItem = (props)=>{
    const {items,setItems} = useContext(CartContext)
    
    return (
        <div className="border border-gray p-4 m-4 rounded-lg">
            <h3>{props.item}</h3>
            <p>Price: {props.price}</p>
            <button className="counter !mb-0 mt-3" onClick={()=> setItems([...items,{item:props.item,price:props.price}])}>Add item</button>
        </div>
    )
}