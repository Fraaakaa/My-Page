import "./style.scss"
import data from "../../Data/Projects.json"

function Card(){
    return <>
    {data.map((project, key) => {
        return <div className="cardContainer" key={key}>
        <a className="url" href={project.urlGit}><img className="urlImg" src="https://imgs.search.brave.com/ARSWNMWzk28CfxSgNPEQ-U5yWqbbQowGo5TujIQOxvc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL3Nt/YWxsL2dpdGh1Yl9Q/Tkc3Mi5wbmc" alt="" /></a>
        <h1 className="titleProject">{project.name}</h1>
        <a className="url" href={project.urlVercel}><img className="urlImg" src="https://imgs.search.brave.com/DrEY9INGwOhk_vR0NpLxB_m4ScXzdh-12307J-2AJlg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9sb2dvLXZl/cmNlbC1pY29uLTUx/Mng0NDQtc3psa3Fs/N2cucG5n" alt="" /></a>
    </div>
    })}
    
    </>
}

export default Card;