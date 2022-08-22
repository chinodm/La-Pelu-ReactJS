import carritoimg from "../img/carrito.png";

function CartWidget() {
    return ( 
    <>
    <a href="#app"><img src={carritoimg} className="carrito" alt="carrito"  /></a>
    </>  
    );
}

export default CartWidget;