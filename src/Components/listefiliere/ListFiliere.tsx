import { useState } from "react";
import { filiersData } from "../../Data/filiersdata";
import Filiere from "../filieres/Filiere";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "../../Sheared/Pagination";
const data=filiersData;



function ListFiliere() {

    const itemPerPage = 3;
    const totalPages = Math.ceil(data.length / itemPerPage);


    const [debut,Setdebut] = useState(0);

const [fin,Setfin]= useState(itemPerPage);


const gotopage=()=>{
    Setdebut(debut+itemPerPage);
    Setfin(fin+itemPerPage);
    console.log(debut,fin)
}

    return (
        <div>
            <h1>Liste des filières</h1>
            <section className="row">
                {
                data.map((filiere, index) => (
                    index >=debut  && index < fin
                     && 
                    <Filiere
                        key={filiere.id}
                        id={filiere.id.toString()}
                        nom={filiere.nom}
                        description={filiere.description}
                        image={filiere.image}
                        sems={filiere.semestres}
                    />
                ))}
            </section>
            <Pagination totapage={totalPages} itemperpage={itemPerPage} onChangePage={gotopage} />
        </div>
    )

}
export default ListFiliere;