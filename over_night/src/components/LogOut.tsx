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
        <button className="h-fit hover:text-gray-100 text-white text-2xl " onClick={handlePatch}>Log Out</button>
        </>
    )
}