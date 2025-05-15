// Implement an EventEmitter class

class EventEmitter {
  constructor(){
      this.event={};
  }
  
  on(eventName,callback){
    if(!this.event[eventName]){
        this.event[eventName]=new Set();
    }
    this.event[eventName].add(callback);
  }
  
  off(eventName,callback){
      if(this.event[eventName]){
        this.event[eventName].delete(callback);
    }
  }
  
  emit(eventName,...args){

    if(this.event[eventName] &&this.event[eventName].size ){
        for(let callbacks of this.event[eventName]){
              callbacks(...args);
        }
      return true;
        
    }
    else{
      return false;
    }

  }
  

}

const emitter = new EventEmitter();
function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}

emitter.on('foo', addTwoNumbers);
emitter.off('foo', addTwoNumbers);
emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));

emitter.emit('foo', 2, 5);

// // > "The sum is 7"

// emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));

// emitter.emit('foo', 4, 5);

// // > "The sum is 9"

// // > "The product is 20"

// emitter.off('foo', addTwoNumbers);

// emitter.emit('foo', -3, 9);

// > "The product is -27"

--------------

// Implement a counter hook 

export function UseCounterHook(defValue = 0) {
    const [count, SetCount] = useState(defValue)
  
    const reset = () => {
      SetCount(defValue)
    }
    const countUp = () => {
      SetCount((count) => count + 1)
    }
    const countDown = () => {
      SetCount((count) => count - 1)
    }
  
    return {countDown, countUp, reset, count}
  }
  
  function App() {
    const {countDown, countUp, reset, count} = UseCounterHook(0)
    return (
      <>
        <div>
          <div>My Counter</div>
          <div>counter Value:{count}</div>
          <button onClick={countUp}> + </button>
          <button onClick={countDown} disabled={count < 1}>
            {' '}
            -{' '}
          </button>
          {
            <button onClick={reset} disabled={count === 0}>
              {' '}
              reset{' '}
            </button>
          }
        </div>
      </>
    )
  }
  ---------------------------------

//   AUtomation testing and unit test 

  ---------------------

//   website performance how would you improve