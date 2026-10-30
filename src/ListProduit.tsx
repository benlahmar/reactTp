import Produit from "./Produit";

function ListProduit(){

    const prds=[
        {"id":1,"desgin":"Clavier","prix":100,"quantite":10,"categorie":"informatique"},
        {"id":2,"desgin":"Souris","prix":50,"quantite":20,"categorie":"informatique"},
        {"id":3,"desgin":"Ecran","prix":300,"quantite":5,"categorie":"informatique"}]


    return (
        <div>
            <h1>Produits</h1>
            {
                prds.map((p,index)=>{
                    return(
                       <Produit p={p} key={index}/>
                    )
                }
            )
        }
        </div>
    )
}
export default ListProduit;