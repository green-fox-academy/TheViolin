let animals: string[]=["koal","pand","zebr"];

animals.forEach((element,index,array)=>{
    array[index]=element+"a";
   
})
console.log (animals);