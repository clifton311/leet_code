function maxProfit(prices) {
    let globalProfit = 0;
    // minBuyPrice is set to Infinity because we can guarantee the first element will be set to the buy price 
    let minBuyPrice = Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      if (minBuyPrice > prices[i]) {
        minBuyPrice = prices[i];
      }
  
      const currentProfit = prices[i] - minBuyPrice;
  
      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
      }
    }
  
    return globalProfit;
  }

module.exports = maxProfit;
