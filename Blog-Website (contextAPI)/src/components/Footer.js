import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () =>{

    const{page,handlePageChange,totalPages}=useContext(AppContext);


    return(
    <div className=" bottom-0 text-center w-full fixed bg-white p-3 border shadow-md ">
        <div className="mx-auto w-[530px] flex justify-between ">
        <div className="flex  gap-x-2">
            {
                page>1 &&(
                    <button 
                    className="rounded-md border px-4 py-1"
                    onClick={() =>handlePageChange(page-1)}>Previous</button>

                )
            }

            {
                page<totalPages &&(
                    <button
                    className="rounded-md border px-4 py-1"
                    onClick={() => handlePageChange(page+1)}>Next</button>

                )
            }
        </div>
        <div>
            <p className="font-bold text-sm">Page {page} of {totalPages} </p>
        </div>
        </div>
    </div>)
}
export default Footer;