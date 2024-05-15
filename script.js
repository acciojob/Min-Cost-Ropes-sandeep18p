function mincost(arr){
 let totalCost = 0;

    arr = arr.sort();

    while (arr.length > 1) {
       
        const rope1 = arr.shift();
        const rope2 = arr.shift();

       
        const cost = rope1 + rope2;

        totalCost += cost;

        
        arr.push(cost);

   
        arr = arr.sort();
    }

    return totalCost+arr[0];
}

module.exports=mincost;
