let drinks: string[]=["Gin","Whiskey","Wine","Beer"];

drinks.forEach((element,index,array)=>{
    array[index]=element+element;
   
})
console.log (drinks);