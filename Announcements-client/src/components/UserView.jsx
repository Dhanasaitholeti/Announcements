import "../styles/userView.css"
const UserView = ({data}) => {
    return ( 
        <div className="userDetails-view">
            <h1>{`${data.Admin}`}</h1>
            <h1>{data.Name}</h1>
            <h1>{data.Email}</h1>
            <h1>{data.Gender}</h1>
        </div>
     );
}
 
export default UserView;