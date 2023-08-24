//let num=document.getElementById("num").value

//console.log(num)

const primeCheck=(num)=>{
    if(num<=1){
        return false
    }
    for(i=2;i<num;i++){
        if(num % i==0){
            return false

        }
    }
return true

}



const primeOrNot=()=>{
    let num=document.getElementById("num").value

    const res = primeCheck(num)

   if(res){
    document.getElementById("result").innerHTML="YES"
   }
   else{
    document.getElementById("result").innerHTML="NO"
   }
    
}

