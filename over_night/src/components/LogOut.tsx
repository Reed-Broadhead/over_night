import user from "../states/user"
import { setUser } from "../states/user"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

export default function LogOut(){
    const user = useSelector((state: any)=>state.user.value)
    const Dispatch = useDispatch()
    
    const handlePatch=(): void => {
        console.log("logout button activated")
    axios.patch('/api/logout')
    .then(response => Dispatch(setUser(null)))
    }
    
    return(
        <>
        <button className="mt-1.5 mr-3 h-fit hover:text-black text-white text-2xl " onClick={handlePatch}>Log Out</button>
        </>
    )
}