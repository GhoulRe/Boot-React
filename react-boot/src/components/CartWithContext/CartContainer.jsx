import { CartContextProvider } from "../../context/CartContext"
import { Cart } from "./Cart"
import { CartItem } from "./CartItem"

export const CartContainer = ()=>{
    return(
        <CartContextProvider>
        <section id="center">
            <div className="flex flex-wrap">
            <CartItem item="Mac book" price={100000}/>
            <CartItem item="Asus laptop" price={54000}/>
            <CartItem item="Phone" price={20000}/>
            </div>
            <Cart/>
        </section>
        </CartContextProvider>
    )
}