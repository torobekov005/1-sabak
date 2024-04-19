
// const start= document.querySelector("#text");

// const btns = document.querySelectorAll('button');

// console.log(start.innerHTML);

// let count = 0;

// console.log(btns);

// btns[0].onclick =()=>{
//     count++;
//     start.innerHTML = count;
//     start.style.color = 'red'
// };

// console.log(btns);

// btns[1].onclick =()=>{
//     count --;
//     start.innerHTML = count;
//     start.style.color = 'blue'
// };

// console.log(btns);

// btns[2].onclick =()=>{
//     count =0;
//     start.innerHTML = count ;
//     start.style.color = 'green'
// };



let x;

console.log(document);

document.getElementById("text").onclick = function(){
    x= Math.floor(Math.random() * 50);
    document.getElementById("san").innerHTML = x;
};
x=alert("Тап")=32

