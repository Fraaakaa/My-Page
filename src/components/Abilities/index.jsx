import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import data from "../../Data/abilities.json"
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Icon from "../Icon"

function Abilities(){
    const [click, setClick] = useState(false);
   function handleClick(){
    setClick(true);
   }

    return<>
    {data.map((ability, key) => {
        return <div className="abilityContainer" key={key}>
            <div className="containerIcon">
            <h1 className="abilityTitle">{ability.name}</h1>
            <Icon desc={ability.desc} />
            </div>

        </div>
    })}
    </>
}

export default Abilities;