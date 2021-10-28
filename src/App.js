import './App.css';
import {useState,useRef} from 'react'
import {Link} from 'react-router-dom';
import Pagination from './Pagination';
import ArticleBlock from './ArticleBlock';





const App=(props)=> {
	//pagination
	const[page,setPage] = useState(1);

	//right click menu
	const menuRef = useRef();
	function rightclick(e) {
		e.preventDefault();
		menuRef.current.style.display='block';
		menuRef.current.style.left=e.pageX + 'px';
		menuRef.current.style.top=e.pageY + 'px';
	  	}
	function leftclick() {
		menuRef.current.style.display='none';
		}
	
	//filter
	const collect =[
		{
			"index":"0",
			"feature":"alpha"
		},
		{
			"index":"1",
			"feature":"beta"
		},
		{
			"index":"2",
			"feature":"alpha"
		},
		{
			"index":"3",
			"feature":"beta"
		}
	]
	const [shownItem,setShownItem]=useState(collect);
	function collectFilter(feature){
		let collectfilted=[];
		for (let i=0;i<collect.length;i++){
			if(feature ===collect[i].feature){
				collectfilted.push(collect[i])
			}
		}
		setShownItem(collectfilted)
	}


	return (
		<div>
			{/* Pagination */}
			<h1>pagination</h1>
			<Pagination CurrentPage={page} totalPage={10} setPage={(i)=>setPage(i)}/>

			{/* Right Click Menu */}
			<h1>Right click menu</h1>
			<button style={{marginLeft:'20vw'}} onContextMenu={(e)=>rightclick(e)} onClick={()=>leftclick()}>Right/Left click me</button>
			<ul id='menu' ref={menuRef} style={{display:'none',position:'absolute',listStyleType:'none'}}>
				<li style={{border:'black 1px solid',padding:'0 10px',backgroundColor:'white'}} onClick={()=>{console.log('delete')}}>delete</li>
				<li style={{border:'black 1px solid',padding:'0 10px',backgroundColor:'white'}} onClick={()=>{console.log('edit')}}>edit</li>
				<li style={{border:'black 1px solid',padding:'0 10px',backgroundColor:'white'}} onClick={()=>{console.log('save')}}>save</li>
				<li style={{border:'black 1px solid',padding:'0 10px',backgroundColor:'white'}} onClick={()=>{console.log('copy')}}>copy</li>
				<li style={{border:'black 1px solid',padding:'0 10px',backgroundColor:'white'}} onClick={()=>{console.log('...')}}>...</li>
			</ul>

			{/* Link Icon */}
			<h1>link icon</h1>
			<div style={{marginLeft:'20vw' ,fontSize:'30px'}}>
				<i className="fa fa-facebook-official w3-hover-opacity"></i>
				<i className="fa fa-instagram w3-hover-opacity"></i>
				<i className="fa fa-snapchat w3-hover-opacity"></i>
				<i className="fa fa-pinterest-p w3-hover-opacity"></i>
				<i className="fa fa-twitter w3-hover-opacity"></i>
				<i className="fa fa-linkedin w3-hover-opacity"></i>
				<i className="fa fa-phone w3-hover-opacity"></i>
				<i className="fa fa-envelope w3-hover-opacity"></i>
			</div>

			{/* Filter */}
			<h1>filter</h1>
			<button onClick={()=>collectFilter("alpha")}>alpha</button>
			<button onClick={()=>collectFilter("beta")}>beta</button>
			{shownItem.map((i)=>{return(<div>{i.index+"_"+i.feature}</div>)})}

			{/*Read Static File*/}
			<h1>Read File (STATIC)</h1>
			<ArticleBlock/>

			{/*HashRouter*/}
			<h1>HashRouter</h1>
			<nav>
				<Link to="/" style={{padding:"0 1vw",margin:"0 2vw",border:"1px solid black",textDecoration:"none"}}>click to link Route1</Link>
                <Link to="/two" style={{padding:"0 1vw",margin:"0 2vw",border:"1px solid black",textDecoration:"none"}}>click to link Route2</Link>
            </nav> 
			{props.children}

		</div>
		
	)
}

export default App
