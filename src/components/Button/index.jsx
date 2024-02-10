import archives from "../../archives/vitae.pdf"
import "./style.scss" 

function Button(){
    return <a className="Curriculum" href={archives}>Curriculum Vitae</a>
}

export default Button;