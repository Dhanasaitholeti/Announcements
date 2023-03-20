import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const checkToken = () => {
    const navigator = useNavigate()
    const Token = Cookies.get('jwtToken')
    if(!Token){
        navigator('/')
    }
}
 
export default checkToken;