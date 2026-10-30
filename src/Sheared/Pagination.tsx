import { useState } from "react";

function Pagination({ totapage,itemperpage, onChangePage }:
     { totapage: number, itemperpage: number, onChangePage: (page: number) => void }) {
 
    const [cureentpage, setcurrentpage] = useState(1);

    const gotopage = () => {
        if (cureentpage < totapage) {
            setcurrentpage(cureentpage + 1);
            onChangePage(cureentpage );
        }
    }
     
    return (
        <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a  href="#"  className={cureentpage==1 ? "page-item disabled" : "page-item"}>Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className={cureentpage>=1+totapage/itemperpage ? "page-item disabled" : "page-item"}>
      <a className="page-link" onClick={gotopage}>Next</a>
    </li>
  </ul>
</nav>
    );

}
export default Pagination;