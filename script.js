function mincost(arr){
 let totalCost = 0;

    // Sort the array of rope lengths in ascending order
    arr = arr.sort();

    // Continue until there's only one rope left
    while (arr.length > 1) {
        // Take the two shortest ropes
        const rope1 = arr.shift();
        const rope2 = arr.shift();

        // Calculate the cost of connecting them
        const cost = rope1 + rope2;

        // Add the cost to the total
        totalCost += cost;

        // Insert the connected rope back into the array
        arr.push(cost);

        // Sort the array (not needed for this implementation)
        arr = arr.sort();
    }

    return totalCost;
}

module.exports=mincost;
