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
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 " onClick={handlePatch}>Log Out</button>
        </>
    )
}