import "./style.scss"

function NavBar(){
    return <div className="navContainer">
        <div className="linkersContainer">
        <a href="#quienSoy" className="linkers">Quien soy</a>
        <div className="cut"></div>
        <a href="#habilidades" className="linkers">Habilidades</a>
        <div className="cut"></div>
        <a href="#misProyectos" className="linkers">Mis proyectos</a>
        </div>
    </div>
}

export default NavBar;