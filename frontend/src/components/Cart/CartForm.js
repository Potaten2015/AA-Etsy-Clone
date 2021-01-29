const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");
const { default: CartItem } = require("./CartItem");

const CartForm = () => {

    const [cartLoaded, setCartLoaded] = useState(false);
    const cartItems = useSelector(state => Object.values(state.cart));

    useEffect(() => {
        if(cartItems) setCartLoaded(true);
        console.log(cartItems)
    }, [cartItems])

    return cartLoaded && (
        <form>
            {cartItems.map(item => <CartItem cartEntry={item} />)}
        </form>
    )
}

export default CartForm;
