
//var input = [2 , 4 , 8, 10 ] ;


// function total(){
//     var sumGroup1 = 0;

//     sumGroup1 = input[0] + input[1];
//     console.log(sumGroup1)

//     var sum2 = sumGroup1 + input[2]
//     console.log(sum2)

//     var sum3 = sumGroup1 + sum2;
//     console.log('final total : ' + sum3);

//     var max = sum3;

//     return max;
// }

    



// var sumGroup2 = input[0] + input[2];
// console.log(sumGroup2)

// var sumGroup3 = sumGroup2 + input[1]
// console.log(sumGroup3)

// var sumGroup4 = sumGroup2 + sumGroup3;
// console.log('final total : ' + sumGroup4);

// // var min = sumGroup4;

// var totalArr =  total();


// if(sumGroup4 < totalArr){
//     console.log("The maximum value " + max + " is the highest value in total array")

// }else{
//     console.log("The maximum value " + sumGroup4 + " is the highest value in total array")
// }


// var input = [2 , 4 , 8, 10 ] ;

// var x;
// for(x=0; x < input.length; x++ ){
//     var first = input[0];
//     var total = input[x] + input[x+1];
//     total = total + input[x+2];
//     total = total + input[x+3];
//     console.log(total);

// }


// function fib(n){
//     if(n==0 || n==1){
//         return n;
//     }else{
//         return (fib(n-1) + fib(n-2));
//     }
// }



// console.log(fib(11));






//


// function fact(n){
//     if(n==0 || n==1){
//         return n;
//     }else{
//         return n*fact(n-1);
//     }
// }

// console.log(fact(4));


// 

// function sum(n){
//     if(n == 1){
//         return 1;
//     }else{
//         return n +sum(n-1);
//     }
// }
// // 1+2+3+4+5 = 15
// console.log(sum(5));



//* */

// function sum(x , y){
//     if(x == y){
//         return x;
//     }else{
//         return y + sum(x, y-1);
//     }

// }


// // mjmoo3 bean r8mean (4,6) => 4+5+6

// console.log(sum(4,6));




//* */


// function f(n){
//     if(n < 0){
//         return;
//     }else{
//         for(let i=0 ; i<n ; i++){
//             document.write("*")
//         }

//     }
//     document.write("</br>");
//     f(n-1);
// }


// f(5);


//* */


// function star(n){
//     if(n<0){
//         return;
//     }
//     star(n-1);
//     for( let i=0 ; i<n  ; i++){
//         document.write('*');
//     }
//     document.write('</br>');
// }


// star(7);


// var string = "regular string expression";
// result = string.replace(/[a-e]/gi, "@");

// console.log(result);



// var string = "I Love";
// result = string.replace(/v/i, "@");

// console.log(result);


// // i => bdawer 3la al7arf 93'eer wel kbeeer 



/*
regular string expression
Search / Replace / Match /Split /Test
*/



// function swap(&x , y ){
//     var z;
//     z=x;
//     x=y;
//     y=z;

// }

// var k = 50 , r= 10;
// swap(k , r);
// console.log("k = " + k + " r = " +r);




// function f (n){
//     if(n < 1){
//         return;
//     }else{
//         console.log('round: ' + n);

//     }

//     f(n-1);

// }


// f(8);



//

// var arr = [1,2,3] , sum = 0;

// for(var i=0 ; i < arr.length; i++){
//     sum =sum + arr[i];
// }

// console.log(sum);




// function sum(arr,n){
//     if(n<= 0){
//         return 0;
//     }
//     return (sum(arr, n-1) + arr[n-1])
// }

// var arr = [1,2,3,4,8]
// var n = arr.length;
// console.log(sum(arr,n));




// var top = -1;
// var arr = [];

// function push(element){
//     top++;
//     arr[top]= element;

// }

// function pop(element){
//     element = arr[top];
//     top--;
// }




// arr.push(1);
// arr.push(5);
// arr.push(7);
// arr.push(9);
// arr.pop();
// arr.push(15);
// arr.push(18);
// arr.push(20);
// arr.pop();
// console.log(arr);




// function Stack(){
//     this.data = []
// }

// Stack.prototype.pushToStack= function(element){
//     this.data.push(element)
// }
// Stack.prototype.popFromStack= function(element){
//     return this.data.pop()
// }
// var myStack = new Stack()
// console.log(myStack.data);
// for (let index = 0; index < 20; index++) {
//     myStack.pushToStack(index)
    
// }

// console.log('Data in Stack is :', myStack.data  )
// for (let index = 0; index < 10; index++) {
//     myStack.popFromStack()
    
// }

// console.log('>>> Data in Stack is :', myStack.data  )






// function onButtonClick(){
//     document.getElementById('textInput').className="hide";
//   }



// function sum(arr,n){
//   if(n<= 0){
//       return 0;
//   }
//   return (sum(arr, n-1) + arr[n-1])
// }


// var arr = [1,2,3,4,8]
// var n = arr.length;
// console.log(sum(arr,n));




var intTextBox = 0;

function addElement() {
  intTextBox++;
  var NewDiv = document.createElement('div');
  NewDiv.setAttribute('id', 'div_' + intTextBox);

  
  NewDiv.innerHTML = 'Column ' + intTextBox + '<br></br>' ;
  
  
  document.getElementById('content').appendChild(NewDiv);
  document.getElementById("content").classList.add("item");

}


function removeElement() {
  if(0 < intTextBox) {
      document.getElementById('content').removeChild(document.getElementById('div_' + intTextBox));
      intTextBox--;
  } else {
      alert("No column to remove");
  }
}



function start() {
  setInterval(function(){ alert("Hello"); }, 2000);
}





function myFunction() {
  document.getElementById("myDIV").classList.add("mystyle");
}







