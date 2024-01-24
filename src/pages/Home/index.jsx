import "./style.scss";
import Description from "../../components/Description";
import NavBar from "../../components/NavBar";
import Tecnologies from "../../components/Tecnologies";
import Card from "../../components/Card";
import Abilities from "../../components/Abilities";


function Home() {
  
  return <div className="Home">
    <NavBar/>
    <main className="pageContainer">
    <div id="quienSoy" className="titleContainer">
      <h1 className="title">Facundo Fandiño</h1> 
    </div>

    <div className="descriptionContainer">
      <Description/>
    </div>
    
    <div className="tecnologiesContainer">
      <h1 className="tecTitle">Tecnologias que empleo</h1>
      <Tecnologies/>
    </div>

    <div className="abilitiesContainer">
    <h1 id="habilidades" className="tecTitle">Habilidades</h1>
    <Abilities/>
    </div>

    <div id="misProyectos" className="projectsContainer">
      <h1 className="tecTitle">Mis proyectos</h1>
      <div className="cardwrapper">
      <Card/>
      </div>

    </div>
    </main>
  </div>;
}

export default Home;
