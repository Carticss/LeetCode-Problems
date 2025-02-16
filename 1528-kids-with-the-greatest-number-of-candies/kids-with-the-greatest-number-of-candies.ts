function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandies = 0;
    let booleanArray = [];
    for(let i = 0; i < candies.length; i++){
        if (candies[i] > maxCandies) maxCandies = candies[i];
    }

    for(let i = 0; i < candies.length; i++){
        booleanArray.push(candies[i] + extraCandies >= maxCandies)
    }

    return booleanArray;
};