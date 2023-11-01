import { useContext } from "react";
import {data} from "./App";

function ChildB2(){
    const name=useContext(data)
    

    return(
        <>
        <p>{name}</p>
        
        </>
    )
}
export default ChildB2;