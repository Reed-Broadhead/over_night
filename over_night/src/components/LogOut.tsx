import user from "../states/user"
import { setUser } from "../states/user"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

// logs users out by setting redux state to null
export default function LogOut(){
    // setup for redux
    const user = useSelector((state: any)=>state.user.value)
    const dispatch = useDispatch()
    
    // handles click 
    const handlePatch=(): void => {
    dispatch(setUser(null))
    }
    
    return(
        <>
            <button className="h-fit hover:text-gray-100 text-white text-2xl transition-opacity duration-1000 " onClick={handlePatch}>Log Out</button>
        </>
    )
}