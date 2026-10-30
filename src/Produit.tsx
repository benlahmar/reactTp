import './Produit.css'

function Produit(props:any){ 

    return (
        <>
                <div key={props.p.id} className="prd">
                            <h2>{props.p.desgin}</h2>
                            <p>Prix: {props.p.prix}</p>
                            <p>Quantité: {props.p.quantite}</p>
                            <p>Catégorie: {props.p.categorie}</p>
                </div>
</>
    )
}
export default Produit;