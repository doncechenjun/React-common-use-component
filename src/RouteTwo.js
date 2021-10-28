import { Link } from "react-router-dom"

const RouteTwo=(props)=>{
    console.log(props.match.params.id)
    return(

        <div>
            <h6>this is route 2</h6>
            <Link to="/two/1" style={{padding:"0 1vw",margin:"0 2vw",border:"1px solid black",textDecoration:"none"}}>param : 1</Link>
            <Link to="/two/2" style={{padding:"0 1vw",margin:"0 2vw",border:"1px solid black",textDecoration:"none"}}>param : 2</Link>
        
        </div>
    )
}

export default RouteTwo