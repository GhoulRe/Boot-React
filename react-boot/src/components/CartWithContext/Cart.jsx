import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export const Cart = () =>{
    const {items,setItems} = useContext(CartContext)
    const total = items.reduce((sum,item)=>sum + item.price,0)
    return(
        <div>
            {items && items.map((item)=>(
            <li key={item.price}>{item.item} - {item.price}</li>
            ))}
            <h3>Total: {total}</h3>
        </div>
    )
}