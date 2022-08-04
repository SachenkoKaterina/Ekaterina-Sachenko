const abc = ['a', 'b', 'c'];
const cba = [1 , 2 , 3];
const arr2 = abc.concat(cba);
console.log("Задание №1:" , arr2);


const exs1 = ['a', 'b', 'c'];
exs1.push(1 , 2 , 3);
console.log("Задание №2.1:", exs1);

const exs2 = ['a', 'b', 'c'];
exs2.splice(3, 0, 1, 2, 3);
console.log("Задание №2.2:", exs2);


const exs3 = [1, 2, 3, 4, 5];
exs3.splice(1,2);
console.log("Задание №3:", exs3);


const exs4 = [1, 2, 3, 4, 5];
exs4.splice(3, 0, 'a','b','c');
console.log("Задание №4:", exs4);


const arr = [1, 2, 3, 4, 5];
const arr1 = []
for (let i=0; i<5; i++){
    arr1.push(arr[i]*10)
}
console.log("задание №5", arr1)


let arr3 = [];
for (let i=4; i<=400; i++) {
    arr3.push(i)
}
console.log("Задание №6:", arr3)



let exs6 = [];
for (let i=4; i<=13; i+=3) {
    exs6.push(i)
}
console.log("Задание №7:", exs6)


let exs8 = [];
for (let i=654; i>=0; i--) {
    exs8.push(i)
}
console.log("Задание №8:", exs8)


let exs9 = [];
for (let i=1983; i<=2017; i++) {
    exs9.push(i)
}
console.log("Задание №9:", exs9)


let exs10 = [];
for (let i=-4; i<=100; i+=2) {
    exs10.push(i)
}
console.log("Задание №10:", exs10)


let exs11 = 0;
for (let i=0; i<=100; i++) {
    exs11 += i
}
console.log("Задание №11:",exs11)



let exs12 = [];
let str = 'x';
let length = prompt("Задание №12:", str);
for (let i = 0; i < length; i++) {
    exs12.push(str);
     str = str + 'x';
 }
console.log("Задание №12:", exs12);



let exs13 = [];
let length1 = prompt("Задание №13:", exs13);
for (let i = 1; i <= length1; i++) {
    let str1 = '';
    for (let j=0; j<i; j++){
        str1 +=i
    }
    exs13.push(str1);
}
console.log("Задание №13:", exs13);



/////задание №14


/////задание №15

let sdf=[]
for (let i=1;i<=10;i++){
    sdf[i]=[]
    for (let j=1;j<=10;j++){
        sdf[i][j]=i*j
    }
}
console.log("Задание №15:",sdf)

/////задание №16

