const Pagination=({CurrentPage,totalPage,setPage})=>{
    
    var pageIndex=[]

    if (totalPage < 8){
        for(let i = 1;i<totalPage+1 ; i++){
            pageIndex.push(i)
        }}
    else{
        if(CurrentPage>(totalPage-4)){
            pageIndex.push(1,'...',(totalPage-4),(totalPage-3),(totalPage-2),(totalPage-1),totalPage)
        }
        else if(CurrentPage<5){
            pageIndex.push(1,2,3,4,5,'...',totalPage)
        }
        else{
            pageIndex.push(1,'...',CurrentPage-1,CurrentPage,CurrentPage+1,'...',totalPage)
        }
    }
    
    
    return (
        
        <div className="w3-center w3-padding-32">
            <div className="w3-container">
                <button className=" w3-button w3-white w3-round" onClick={()=>{if(CurrentPage>1){setPage(CurrentPage-1)}}}>«</button>

                {pageIndex.map((index)=>
                {
                    if(CurrentPage===index){
                        return <button className=" w3-button w3-black w3-round">{index}</button>
                    }
                    return <button className=" w3-button w3-white w3-round" onClick={()=>{setPage(index)}}>{index}</button>
                })}

                <button  className=" w3-button w3-white w3-round" onClick={()=>{if(CurrentPage<totalPage){setPage(CurrentPage+1)}}}>»</button>
            </div>
        </div>
    )
}

export default Pagination