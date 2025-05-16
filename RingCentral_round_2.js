let y = 0;
if(function d() {}) { 
	y += typeof d;
	console.log(y); //
};
console.log(y); //

Undefined 
Undefined

—-------------------------

function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); //undefined
  console.log(getY()); // 6
}
outer();

—----------------------

const toggle = (...args) => {
   let index=0;
   return function(){
        const value=args[index];
        index=(index+1)%args.length;
        return value;
   }
  // Implement this
}




const sequence = toggle("1", "2", "3");
console.log(sequence()); // "1"
console.log(sequence()); // "2"
console.log(sequence()); // "3"
console.log(sequence()); // "1"

—---------------------------------------------------

Polyfill for JSON.stringify

// Polyfill for JSON.stringify

// Json.stringify=function(obj)
// { "key1":"value1", "key2":246, "key3":true, "key4":null, "key5":[1,2,3], "key6":{ "nestedKey":"nestedValue" } }

function StringifyFunction(Obj){
    var type=typeof Obj;
    
    if(Obj===null){
        return "null";
    }
//     number,boolean,string
    if(type==="number" || type==="boolean"){
      return String(Obj)
    }
    if(type==="string"){
        return '"'+Obj.replace(/"/g,'"') +'"'
    }
// arrays
    if(Array.isArray(Obj)){
      var resArray=[];
      for(var i=0;i<Obj.length;i++){
         resArray.push(StringifyFunction(Obj[i]))
      }
    return "["+ resArray.join(",")+"]";
    }
// objects
    if(type==="object"){
        var resobject=[];
//         for loop for iterating over object
        for(var key in Obj){
            if(Obj.hasOwnProperty(key)){
                var value=StringifyFunction(Obj[key]);
                if(value){
//                   "key:value"
                  resobject.push('"'+key+'":'+value);
                }
            }  
        }
            return "{"+ resobject.join(",")+"}";
    }
}
console.log(StringifyFunction({ "key1":"value1", "key2":246, "key3":true, "key4":null, "key5":[1,2,3], "key6":{ "nestedKey":"nestedValue" } }))

