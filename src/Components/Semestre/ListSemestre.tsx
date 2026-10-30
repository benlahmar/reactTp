import type { Semestre } from "../../Models";
import SemestreCom from "./Semestre";



function ListSemestre({sems}:{sems:Semestre[]})
{
    return (
        <div>
            {
                sems.map(s=>
                    <SemestreCom sem={s}  key={s.id} />
                )
            }
        </div>
    )
}
export default ListSemestre;