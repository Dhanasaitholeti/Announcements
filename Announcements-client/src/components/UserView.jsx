import animeboy from "../assets/images/boyAnime.png";
import animegirl from     "../assets/images/girlAnime.png";
import "../styles/userView.css"
const UserView = ({data}) => {
    return ( 
        <div className="userDetails-view">
            <div className="image-container">
                <img src={data.Gender==="FEMALE"?animegirl:animeboy} />
            </div>

            <div className="userDetails-container">
            <div className="userDetails-details">
            <p>Name:{data.Name}</p>
            <p>Gender:{data.Gender}</p>
            <p>Email:{data.Email}</p>
            <p>Role:{data.Admin?"Admin":data.POR}</p>
            <p>Phone_Number:{data.Phone_Num}</p>
            </div>
            </div>
        </div>
     );
}
 
export default UserView;