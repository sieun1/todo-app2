//데이터 타입, 함수, 조건문, 반복문
// null //undefined 라는 값
// 변수는 어딘가에 저장해두는 공간 or 주머니

// me = {
//     name:"kang",
//     gender:"female",
//     age:23
// }

// you = {
//     name:"kim",
//     gender:"female",
//     age:20,
//     sum: sum
// }
// console.log("sum: " + you.sum(20,20))

// function sum(x,y) {
    
//     result = x + y;
//     return result;
// }

// function hi (name) {
//     console.log('hi~ ' + name);
// }

// hi('kang')

// abc=sum(22,25);
// console.log("abc:",abc);
 
// console.log("abc: "+ sum(22,25));

//조건문

// if(name ==='kang') {
//     console.log('hi kang');
// } else if (name ==='kim'){
//     console.log("hi kim");
// } else {
//     console.log("hi");
// }


// switch(name){
//     case 'kang':
//     console.log('hi kang');
//     break;
//     case 'kim':
//     console.log('hi kim');
//     break;
//     default:
//         console.log("hi")

// }

// 구구단

// for(let i=2; i<=9; i++) {
//     for(let j=1; j<=10; j++){
//         console.log(i+ ' X ' + j + ' = ' + i*j);
//     }
  
// }

//배열
const A = [2,3,4,5,6,7,8,9];
const result = [];

function fn(elem, idx){
    if(elem % 2 === 1){
        result.push(elem);
    }
}

A.forEach(fn)
A.filter


console.log(result);


const B = [1,2,3,4,5,6,7,8,9]

// console.log(A);
// console.log(A[1]);
// console.log(A[A.length-1]);


//
const products = [
    { name: "사과", category: "fruit" },
    { name: "브로콜리", category: "vegetable" },
    { name: "바나나", category: "fruit" },
    { name: "스테이크", category: "meat" },
    { name: "오렌지", category: "fruit" },
    { name: "당근", category: "vegetable" },
    { name: "제육볶음", category: "meat" },
    { name: "토마토", category: "vegetable" },
  ];
  
  // 예제1 filter,map 사용해서 채소 나오게 하기
  
  const vegetableExport = products
    .filter((product) => product.category === "vegetable")
    .map((vegetable) => vegetable.name)
    .reduce((acc, current) => acc + "," + current);
  
  console.log(vegetableExport);
  
  // 예제2 과일만 추출하기
  
  const fruitResult = products
    .filter((product) => product.category === "fruit")
    .map((fruit) => fruit.name)
    .reduce((acc, current) => acc + "," + current);
  
  console.log(fruitResult);
  