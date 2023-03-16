import { Link } from "react-router-dom";
const Startpage = () => {
    return ( 
        <>

        <h1>Welcome to the Announcements</h1>


        <Link to="/login"><button type="button">Login</button></Link>
        <Link to="/signup"><button type="button">Signup</button></Link>

        </>
     );
}
 
export default Startpage;