// 2 parms// 1 tota bill amount
// // 2nd amount given by customer

// returns list of valid cusrency asre
// 1
// 2
// 5
// 10
// 20
// 50
//  100
// validDenominations=[1
// 2
// 5
// 10
// 20
// 50
//  100 ]

function calculateReturn(billAmount,paidAmount){
    if(paidAmount<billAmount){
        return "insufficieant amount paid"
    }
    
    const denominations=[100,50,20,10,5,2,1];
    let change=paidAmount-billAmount;
    let result={};
    for(let denom of denominations){
        if(change>=denom){
            const count = Math.floor(change/denom);
            result[denom]=count;
            change-=denom*count
        }
    }
  return result;  
// count-    10/denom
// result[denom]:count
// change-=denom*count; ->1    
}
console.log(calculateReturn(17,20));
console.log(calculateReturn(52,100));
console.log(calculateReturn(67,100));


// app from scratch
// all requiremts form prod side 









// questions around all kinds of caching
// - in memory caching
// - redis caching
// - database caching
// - CDN caching
// - browser caching
// - server-side caching
// - cache invalidation strategies
// - cache eviction policies
// - cache consistency

// questions around global variables 