function mincost(arr){
 let total = 0;

     arr.sort((a, b) => a - b);

    while (arr.length > 1) {
       
        const rope1 = arr.shift();
        const rope2 = arr.shift();

       
        const cost = rope1 + rope2;

        total += cost;

        
        arr.push(cost);

   
         arr.sort((a, b) => a - b);
    }

    return total;
}

module.exports=mincost;
