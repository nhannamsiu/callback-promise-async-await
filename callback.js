const fs  = require('fs')

//util functions
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function random(max){
  return Math.floor((Math.random() * max));
}

//callback functions
function doSomethingNow(a,b,callback) {
  let max = a+b
  let param1 = random(max)
  let param2 = random(max)
  let param3 = random(max)
  callback(param1,param2,param3);
}

async function doSomethingAfterAwhile(a,b,callback){
  let max = a+b
  //mimic real case of using callback
  await wait(2000)
  let param1 = random(max)
  let param2 = random(max)
  let param3 = random(max)
  callback(param1,param2,param3)
}

//execution starts here
doSomethingAfterAwhile(5,7,(x,y,z)=>{
  console.log('after awhile ',x,y,z)
})

doSomethingNow(5,7,(a,b,c)=>{
  console.log('now ',a,b,c)
});


/*
In callback method, we have param and function as input
The method will use param to run the function body and generate data
We pass this data to the callback function (without callback body)
The callback body will be implemented when we actually use the function

let's not worry about the keyword Promise, Async for now
some callback syntax you will see:
foo(5,7,function(a,b,c){
  ...
})

foo(5,7, async function(a,b,c){
  ...
})

foo(5,7, (a,b,c)=>{
  ...
})

bar(1,(3)=>{
  ...
})

barz(1,3=>{
  ...
})

when we call doSomethingNow(...), those will happen:
1. run line 14-17
3. pass the value to the function name at line 18
4. go back to the implementation of the function at line 37

when we call doSomethingAfterAwhile(...), those will happen:
1. run line 22
2. wait for 2 seconds at line 24, mimic real cases, where we make remote call and
dont know when the function will return
3. run 25-27
4. pass the value to the function name at line 28
5. go back to the implementation of the function at line 33

when we use both of them, the doSomethingNow() will print first
then after 2 seconds the doSomethingAfterAwhile() will print
even we put the doSomethingAfterAwhile() first, but the callback return 2s afterward so the
implementation of callback will be run after the doSomethingNow()
*/
