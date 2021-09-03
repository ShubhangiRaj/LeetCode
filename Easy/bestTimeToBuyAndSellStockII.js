function maxProfit(prices){
    let currentMinPrice = 0;
    let currentMaxPrice = 0;
    let profit = 0;
    for(let i = 1; i < prices.length;){
        if(prices[i - 1] >= prices[i]){
            i++;
        } else if(prices[i - 1] < prices[i]){
            currentMinPrice = prices[i - 1];
            currentMaxPrice = prices[i];
            profit += currentMaxPrice - currentMinPrice;
            i++;
        }
    }
    console.log(profit);
    return profit;
}
maxProfit([3,3,2,5]);
maxProfit([7,1,5,3,6,4]);
maxProfit([1,2,3,4,5]);
maxProfit([7,6,5,4,3,2,1]);