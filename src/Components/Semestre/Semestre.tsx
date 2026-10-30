import type { Module, Semestre } from "../../Models";

function SemestreCom({sem}:{sem:Semestre})
{

    return(
        <div>
            <h3>{sem.nom}</h3>
            <span>{sem.code}</span>
            <a  href="#">{
                sem.modules.length
                } Modules</a>
        </div>
    )
}
export default SemestreCom;