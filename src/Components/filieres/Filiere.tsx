
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Semestre } from '../../Models';
import ListSemestre from '../Semestre/ListSemestre';
import { useState } from 'react';

function Filiere({id,nom,description,image,sems}: {id: string, nom: string, description: string, image: string,sems:Semestre[]}) {

    const [displaysesm,setDisplaysem]=useState(false);
    return(
       <div >
        {  !displaysesm &&
        <div className="card col-md-4" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{nom}</h5>
                    <p className="card-text">{description}</p>
                    <a onClick={()=>setDisplaysem(!displaysesm)} className   ="btn btn-primary">
                            {
                                sems.length
                            } Semstres
                    </a>
                </div>
                           
        </div>
}
         { displaysesm &&
                <div>
                    <h3>Liste semestre</h3>
                    <div>
                        {
                            <ListSemestre sems={sems} />
                        }
                    </div>
                </div>
}
        </div>
       
    )
}
export default Filiere;