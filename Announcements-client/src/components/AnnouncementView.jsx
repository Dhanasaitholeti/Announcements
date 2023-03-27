import "../styles/annoucement.css"
const AnnouncementView = ({data}) => {
    return ( 
        <>
        {
            data.map((eachobj)=>{
                return ( 
                    <div className="each-Anno">
                        <h1>{eachobj.subject}</h1>  
                        <h2>{eachobj.Description}</h2>  
                    </div>
                )
            })
        }
        </>
     );
}
 
export default AnnouncementView;