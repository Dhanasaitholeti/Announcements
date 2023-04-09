import animeboy from "../assets/images/boyAnime.png";
import animegirl from     "../assets/images/girlAnime.png";
import "../styles/userView.css"
const UserView = ({data}) => {
    return ( 
        <div className="userDetails-view">
            <div className="image-container">
                <img src={animeboy} />
            </div>
            {/* <p>{`${data.Admin}`}</p> */}
            <p>{data.Name}</p>
            <p>{data.Email}</p>
            <p>{data.Gender}</p>
        </div>
     );
}
 
export default UserView;