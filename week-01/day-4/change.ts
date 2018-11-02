let numList: number[]= [1,2,3,8,5,6]


let newList=numList.map((element)=>{
if (element==8){
    return element= 4;
}
else {
   return element;
}
})
console.log (newList);

