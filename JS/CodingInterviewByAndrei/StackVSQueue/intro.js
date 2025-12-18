// Stacks
// browser history
// eg ->  you search google->udemy.com-> youtube
// In stack
// 1. youtube 2.udemy.com 3.google
// can build with Arrays or LinkedLists
// It depends on the operation that you want to optimized
// For arrays, the index is side by side in memory. 
// And once the elements is filled in the allocated location,
// it need to reallocate a new memory space and copy all the elements to the new location with dobule size
// For LinkedLists, it scatter all over the memory
// moreover, it has to allocate the space for pointers as well

// Queue
//waitlist app
// eg -> people waiting in line for movie tickets
// Matt -- Joy -- Samir -- Pavel
// can build with Arrays or LinkedLists
// LinkedList can be better 
// Array have indexes and [Matt,Joy,Samir,Pavel]
// Once i pop Matt, the array need to shift all indexes
// In LinkedList, just change the head to next node


const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

one();

// Call stack in js engine
// one(); (1)
// two(); (2)
// console.log(); (3)
// In stack
// console.log(); (3) -> call, reomove from the stack
// two(); (2)
// one(); (1)


// recursion function
function foo(){
    foo();
}

foo(); // can cause stack overflow -> can not allocate the space in the memory

console.log('1');
// Async task
setTimeout(()=>{
    console.log('2');
},2000) //wait 2 seconds; even though 0 seconsd, this still got 
// into WEB API, callback queue and then event loop
// by the time, it is happening, the call stack had already moved
// on to the console.log('3') 
// once the console.log('3') is done and the stack is empty, the event loop call
// console.log('2');
console.log('3');

// if there is no async task in '2' -> output will be 1,2,3
// but because of the async task -> output will be 1,3,undefined,2 
// since 2 need to wait for 2 secons


// Call stack
// 1. console.log('1'); (1) -> done, remove;
// 2. setTimeout(...) (2)
// 3. console.log('3'); (3)
// 4. console.log('2); (4)

// Wep API
// 2. setTimeout -> wait for 2 seconds -> after 2 seconds, need to done console.log(), so push the callback function to callback queue

// Callback queue
// call callback()

// Event loop
// check call stack is empty or not
// if empty, push the callback from callback queue to call stack
// Call stack