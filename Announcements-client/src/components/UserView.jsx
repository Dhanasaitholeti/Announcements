import animeboy from "../assets/images/boyAnime.png";
import animegirl from     "../assets/images/girlAnime.png";
import "../styles/userView.css"
const UserView = ({data}) => {
    return ( 
        <div className="userDetails-view">
            <div className="image-container">
                <img src={data.Gender==="FEMALE"?animegirl:animeboy} />
            </div>
         
            <div className="userDetails-details grid-container">
            <p className="userDetails-title">Name   :</p>
            <p className="userDetails-value">{data.Name}</p>
            <p className="userDetails-title">Gender :</p>
            <p className="userDetails-value">{data.Gender}</p>
            <p className="userDetails-title">Email  :</p>
            <p className="userDetails-value">{data.Email}</p>
            <p className="userDetails-title">Role   :</p>
            <p className="userDetails-value">{data.Admin ? "Admin" : data.POR}</p>
            <p className="userDetails-title">Phone  :</p>
            <p className="userDetails-value">{data.Phone_Num}</p>
      </div>
            
        </div>
     );
}
 
export default UserView;