let btn=document.querySelector(".searchbox")
let input=document.querySelector(".inputbox")
let flag=document.querySelector('.flag')
let name=document.querySelector('.name')

// console.log(btn)
btn.onclick=(e)=>{
e.preventDefault()
fetchdata();}
// input.addEventListener('change',handlechange)


async function fetchdata(){

   let ivalue=input.value


// console.log(ivalue)

   let Data=await fetch('https://flagcdn.com/en/codes.json')
   let Data1=await Data.json()   
   console.log(Data1)
    
   let Data2=Object.entries(Data1)
   console.log(Data2)
   flag.innerHTML=''
   

   Data2.forEach((item)=>{
  
   if(item[1].toLowerCase()===ivalue.toLowerCase()){

      let img=document.createElement("img") //<img>
      // console.log(img)
   img.src=(`https://flagcdn.com/256x192/${item[0]}.png`) //<img src='https://flagcdn.com/'+ item[0]+'/codes.json'>
      
      flag.append(img);

      let name=document.createElement('div')
      flag.append(name)
      name.innerHTML=item[1]
      name.setAttribute("class",'flagname ')

      
      l
      
      
      
      input.value=''
      // flag.remove(flag.firstElementChild)
      
   }
   
 
   // img.src  =''

   // else{
   
   // flag.innerText='Notfound'
   // }
   
   }
   )
    
}





