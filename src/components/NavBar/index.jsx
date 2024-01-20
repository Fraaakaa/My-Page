import "./style.scss"

function NavBar(){
    return <div className="navContainer">
        <a href="#quienSoy" className="linkers">Quien soy</a>
        <div className="cut"></div>
        <a href="#misProyectos" className="linkers">Mis proyectos</a>
    </div>
}

export default NavBar;