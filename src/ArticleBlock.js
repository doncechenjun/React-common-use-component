import { useEffect } from "react";

const ArticleBlock = () => {

    useEffect(()=>{
        var file_block = document.getElementById("showfile");
        fetch("/article/testfile.txt")
        .then(r => r.text())
        .then(text => {
            file_block.innerHTML=text;
        });
    })
    

     return (
         <div>
             <div id="showfile"></div>
         </div>
     )
}

export default ArticleBlock