import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Icon(props){
    const [click, setClick] = useState(false);
    const [visible, setVisible] = useState("iconButton");
    const [unvisible, setUnvisible] = useState("unvisible")
   function handleClick(){
    setVisible("visible")
    setClick(true);
    setUnvisible("iconButton");
   }

   function Click(){
    setVisible("iconButton")
    setClick(false);
    setUnvisible("unvisible");
   }

    return <>
    <button onClick={handleClick} className={visible}><FontAwesomeIcon icon={faSortDown} beat style={{color: "#4242a7",}} /></button>
    <button onClick={Click} className={unvisible}><FontAwesomeIcon icon={faSortUp} beat style={{color: "#4242a7",}} /></button>
        {click == true
           ? <p className="abilityDesc">{props.desc}</p>
           : <p></p>}
    </>
}

export default Icon;