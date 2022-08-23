import '../style/css/style.css';
import ItemListContainer from './ItemListContainer';

function NavBar() {
    return (
        <header>
        
        <nav className="navbar" id="app">
            <img src={image} className="logo" alt="logo"/>
            <a href="#app">Inicio</a>
            <a href="#app">Sobre MI</a>
            <a href="#app">Productos</a>
            <a href="#app">Contacto</a>
            <ItemListContainer />
        </nav>

        </header>
    );
}

export default NavBar;