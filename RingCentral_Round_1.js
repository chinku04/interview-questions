console.log(1);
setTimeout(() => console.log(2), 0);
new Promise((res, rej) => {
console.log(3);
res(false);
})
.then(() => console.log(4))
.catch(() => console.log(5))
console.log(6);

Output for block 1:
1
3
6
4
2

--------------

Promise.resolve()
.then(() => 1)
.catch(() => 2)
.then((data) => console.log(data))
.then((data) => console.log(data))
.then((data) => throw 'error')
.catch(err => 1)
.then((data) => console.log(data))

Output for block 2:
1
undefined
1


div(od) -> div(id) -> button(btn)

document.getEleById('id').addEvventLis('click', () => {console.log('id2')}, true)
document.getEleById('od').addEvventLis('click', () => {console.log('od2')}, true)
document.getEleById('od').addEvventLis('click', () => {console.log('od1'))
document.getEleById('id').addEvventLis('click', () => {console.log('id1'))



Promise.all
input -> array of promises/non-promise
output -> promise

if all the promises in the assay resolve, them the returned promise also resolves -> [] of results of all the promises in same order
if any promise rejects, then the promise rejects with error from rejected promise

Polyfile for promise.all

const myPromiseAll = () => {
}





/////////////////testing////////////////////
// params that we will pass to mypromise all
const myPromiseAll = (promises) => {
    return new Promise((resolve,reject)=>{
        const result=[];
        let done=0;
        
        promises.forEach((promise,index)=>{
            Promise.resolve(promise)
                .then((value)=>{
                  result[index]=value;
                  done+=1;
                  if(done===promises.length){
                      resolve(result);
                  }
                })
                .catch(reject);
        })
      
    })
    
}


let shouldReject = true;
const prom1 = new Promise(res => {
    setTimeout(() => {res('prom1')}, 1000)
})
const prom2 = new Promise((res,rej) => {
    setTimeout(() => {
        if(shouldReject){
            res('prom2')
        }else{
            rej('prom2 rejected')
        }
    }, 600)
})
const prom3 = new Promise(res => {
    setTimeout(() => {res('prom3')}, 300)
})
Promise.all([prom1, 'string1', prom2, 'string2', prom3]).then(data => {
    console.log('original', JSON.stringify(data))
}).catch(err => {
    console.log('original rejected', err)
})
myPromiseAll([prom1, 'string1', prom2, 'string2', prom3]).then(data => {
    console.log('myPromiseAll', JSON.stringify(data))
}).catch(err => {
    console.log('myPromiseAll rejected', err)
})



//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////////////////////////////////////////////////


/*Write a function makeRequests that takes an array of links and a number indicating the maximum number of simultaneous requests.
Only the specified number of requests should be executed at the same time.
The function should return an array of results in the same order as the request addresses.
Duplicate requests should not be made, but their corresponding results should still be present in the resulting array.


// mock request
function sendRequest(url) {
return new Promise(resolve => {
setTimeout(() => {
resolve(`Result for ${url}`);
}, Math.floor(Math.random() * 3000));
});
}


makeRequest([
'url1',
'url2',
'url1',
'url3'
], 2)
.then(data => console.log(data)) // [res1, res2, res1, res3]
*/

// // params that we will pass to mypromise all
// const myPromiseAll = (promises) => {
//     return new Promise((resolve,reject)=>{
//         const result=[];
//         let done=0;
        
//         promises.forEach((promise,index)=>{
//             Promise.resolve(promise)
//                 .then((value)=>{
//                   result[index]=value;
//                   done+=1;
//                   if(done===promises.length){
//                       resolve(result);
//                   }
//                 })
//                 .catch(reject);
//         })
      
//     })
    
// }


// let shouldReject = true;
// const prom1 = new Promise(res => {
//     setTimeout(() => {res('prom1')}, 1000)
// })
// const prom2 = new Promise((res,rej) => {
//     setTimeout(() => {
//         if(shouldReject){
//             res('prom2')
//         }else{
//             rej('prom2 rejected')
//         }
//     }, 600)
// })
// const prom3 = new Promise(res => {
//     setTimeout(() => {res('prom3')}, 300)
// })
// Promise.all([prom1, 'string1', prom2, 'string2', prom3]).then(data => {
//     console.log('original', JSON.stringify(data))
// }).catch(err => {
//     console.log('original rejected', err)
// })
// myPromiseAll([prom1, 'string1', prom2, 'string2', prom3]).then(data => {
//     console.log('myPromiseAll', JSON.stringify(data))
// }).catch(err => {
//     console.log('myPromiseAll rejected', err)
// })


// mock request
function sendRequest(url) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve(`Result for ${url}`);
    }, Math.floor(Math.random() * 3000));
    });
    }
    
    
    makeRequest([
    'url1',
    'url2',
    'url1',
    'url3'
    ], 2)
    .then(data => console.log(data)) // [res1, res2, res1, res3]
    
    
    function makeRequest(urls,limit){
      const result =[];
      const urlMap = new Map();
      let index=0;
    
      return new Promise((resolve,reject)=>{
          let activeCall=0;
    
            function requester(){
                      while(activeCall<limit){
                const currIndex=index;
                const url =urls[index];
                  activeCall++;
                  index++;
                  if(!urlMap.has(url)){
                       urlMap.set(url,sendRequest(url)); 
                  }
    
              urlMap.get(url)
                  .then(res=>{
                      result[currIndex]=res;
                  })
                   .catch(reject)
                    .finally(()=>{
                          activeCall--; 
    requester();
                      })
                  
            }
    }
        requester();
    requester();
    
    
          })
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
