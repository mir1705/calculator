const output = document.getElementById("output");
const  button = Array.from(document.getElementsByClassName("button"));

button.map((button)=>
{
    button.addEventListener("click",(e)=>{
        
        switch(e.target.innerText){
            case 'C':
                output.innerText="";
                break;
            case '< -':
               output.innerText=output.innerText.slice(0,-1);
                break;
            case '=':
               
                output.innerText=eval(output.innerText);
                break;
            
           
            default:
                output.innerText+=e.target.innerText;
        }



    })
})