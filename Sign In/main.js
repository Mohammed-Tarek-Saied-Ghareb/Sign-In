// window.alert("Hello in JS File");
// window.close();
// document.write("<h1> Mohammed Tarek </h1> ");
// console.log("Mohammed Tarek");
// console.error("Stop to Error");
// console.table(["Mohammed" , "Ahmed" , "Mahmoud"]);
// console.log("%cMohammed %cTarek" , "color:red; font-size:35pt;" , "color:blue; font-size:35pt;");
// var myname="Mohammed Tarek";
// console.log(`Hello ${myname}`);
// const user = "Mohammed";
// console.log(user);
// console.log("Elzero/nWeb \"School\"");
// let a = "We Love";
// let b = "JavaScript";

// document.write(a , " " , b);

// console.log(a, b);
// let a = "Mohammed";
// let b ="Tarek";
// let c ="Saied";
// let d="Ghareb";

// console.log(`${a} ${b} ${c} ${d}`);
// let pageTitle="Elzero",pageDescription="Elzero Web School",pageDate="25/10";
// let pageStructure = ` <div class="container">
//                         <h3>${pageTitle}</h3>
//                         <p>${pageDescription}</p>
//                         <span>${pageDate}</span>
//                       </div> `;
// document.write(pageStructure.repeat(4));
// let a="Mohammed";
// document.write(a . repeat( 4 ));
// let num = 3;
// console.log(num%3);
// console.log(100);
// console.log("100");

// let a =10;
// a+=90;
// a/=10;
// a-=10;
// a+=2;
// a**=2;
// a%=3;

// console.log(a);
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// console.log(12323e6);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);

// console.log((100).toString());
// console.log((100.1).toString());

// console.log((100.554555).toFixed(2));

// console.log(Number("100.123123"));
// console.log(+"100 Osama");
// console.log(parseInt("555555555.231255553123"));
// console.log(parseInt("1234567 Osama"));
// console.log(parseInt("Osama 100 Osama"));
// console.log(parseInt("100.500 Osama"));
// console.log(parseFloat("100.500 Osama"));
// console.log(parseFloat("2342.312312"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.5));
// console.log(Number.isInteger(100));
// console.log(Number.isInteger(200));

// console.log(Number.isNaN("Osama" / 20));
// console.log(Math.round(99.93923423423));
// console.log(Math.pow(2,4));
// console.log(Math.ceil(99.1));
// console.log(Math.floor(99.9));
// console.log(Math.max(100,200.1000,5000));
// console.log(Math.random());
// console.log(Math.trunc(99.23123123178));
// let theName ="Mohammed Tarek";
// console.log(theName);
// console.log(theName[1]);
// console.log(theName.charAt(0));
// console.log(theName.length);
// console.log(theName.trim());
// // console.log(theName.toUpperCase();
// console.log(theName.toLowerCase());

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));

// console.log(a.slice(2, 7));
// console.log(a.split("q",2));

// let a = "Elzero Web School";
// console.log(a.length);
// console.log(a.substring(a.length-5 , a.length-3));

// console.log(a.substr(-5,3));
// let a = "Elzero Web School";

// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// // 8 H
// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// //Return Array
// console.log(a.split(" ", 1 )); // [Elzero]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(a.substr(0, 6) + " " + a.substr(-6)); // Elzero School

// // Solution Must Be Dynamic And String May Change
// console.log(a.charAt().toLowerCase() + a.slice(1,a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl

// console.log(100 == "200");
// console.log(100 != "100");
// console.log(100 === 100);
// console.log(100 !== "100");

// console.log(!(100 == "100"));
// console.log(100 === 100 || 3 > "5");

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// theName == "Aya" ? console.log("أنثي") : console.log("ذكر");

// let price;

// console.log(price );
// console.log(`The Price Is ${price ?? 200}`);

// let namee = 0;
// switch (namee) {
//   case 0:
//     console.log("Mohammed");
//     break;
//   case 2:
//     console.log("Ahmed");
//     break;
//   default:
//     console.log("No Name Please");
// }

// console.log(`Hello ${nona[1][0]}`)
// console.log(`Hello ${nona[3][0][2]}`)

// console.log(nona);

// nona.unshift("Osama", "Gamal");
// nona.push("Nada", "Mrawan");
// let First = nona.shift();

// console.log(nona);

// console.log(First);

// let Last = nona.pop();

// console.log(nona);

// console.log(Last);

// console.log(nona.indexOf("Ahmed", 2));
// console.log(nona.lastIndexOf("Ahmed", -2));

// console.log(nona.includes("Tarek"));

// let nona = ["Ahmed", "Mohammed", "Saied", "Alaa", "Mrawan"];

// console.log(nona.slice(0, 2));

// nona.splice(1, 0, "Mohav", "Teto");
// console.log(nona);

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());

// for (let i = 1; i <= 10; i++) {
//   console.log(`Number is ${i}`);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(index[i]);
// }

// let index = [1, "Mohammed", "Ahmed", 3, "Saied", 7, "Ali", "Tarek"];

// let names = [];
// let products = [30, "Keyboard", "Mouse", 10, 20, "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainloop: for (i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]);
// }

// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let index = 0;
// while (index < products.l) {
//   console.log(products[index]);
//   index += 1;
// }

//   if (age < 20) {
//     console.log("هذا التطبيق غير مناسب لك");
//   } else {
//     console.log(`Hello ${userName} the age is ${age}`);
//   }
// }
// moh("Noha", 35);
// moh("Ali", 40);
// moh("Mohammed", 18);

// function Go(Start, End) {
//   for (i = Start; i <= End; i++) {
//     console.log(i);
//   }
// }
// Go(2000, 2021);

// function calc(n1, n2) {
//   return n1 + n2;
// }
// let roro = calc(50, 50);

// console.log( ` the ruslt ${roro + 100}`);

// console.log("Blowing from the west\nFallen leaves gather\nIn the east.");

// function calc(...numbers) {
//     // console.log(Array.isArray(numbers));
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       result += numbers[i]; // result = result + numbers[i]
//     }
//     return `Final Result Is ${result}`;
//   }

//   console.log(calc(10, 20, 10, 30, 50, 30));

// function Say(Firt, last) {
//   let massage = `Hello man`;
//   function concat() {
//     massage = `${massage} ${Firt} ${last} `; }
//     concat();
//     return massage;

// }
// console.log(Say("Moahmmed", "Tarek"));

// function Say(Firt, last) {
//     let massage = `Hello man`;
//     function concat() {
//       massage = `${massage} ${Firt} ${last} `; }
//       concat();
//       return massage;

//   }
//   console.log(Say("Moahmmed", "Tarek"));

// function calc() {
//   return 10;
// }

// let calc = (num1, num2) => num1 + num2;
// console.log(calc(10,20));

// var a = 1;
// let b = 2;

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// function show() {
//     var a = 100;
// let b = 200;

//   console.log(` Fan  From Global ${a}`);
//   console.log(` Fan  From Global ${b}`);
// }

// show();

let MyNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (i = 0; i < MyNums.length; i++) {
//   newArray.push(MyNums[i] + MyNums[i]);
// }

// console.log(newArray);

// let Mymap = MyNums.map(function (el, index, arr) {
//   return el + el;
// });

// console.log(Mymap);

// let arr = ["Ahmed", "Mohammed", "Ahaaa", "jhsdsdfj", "Anas"];

// let Good = arr.filter(function (el) {
//   return el.startsWith("A");
// });
// console.log(Good);

// your code goes here
// var breakfast = {
//   name: "The Lumberjack",
//   price: "$9.95",
//   ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
// };
// console.log(breakfast);

// let num = [10, 20, 15, 30];

// let add = num.reduce(function (re, to) {
//   return re + to;
// },5);

// console.log(add);

// let user = {
//   thename: "Mohammed",
//   theage: 19,
//   sayhallo: function () {
//     return "Mohammed Tarek";
//   },
// };

// console.log(user.thename);
// console.log(user.sayhallo());

// let user = {};

// console.log(user);

// user.age = 19;
// user.["Name"]="Mohammed";

// let myId1 = document.getElementById('my-div');

// let myId2 = document.getElementsByTagName('p');

// let myId3 = document.getElementsByClassName('my-span');

// let myId4 =

// console.log(myId1);
// console.log(myId2[1]);
// console.log(myId3);

// let myElement = document.querySelector('.div11');

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.innerHTML = 'Text To <span> JavaScript </span> Good lan';
// myElement.textContent = 'Text To <span> JavaScript </span> Good lan';

// let M = document.createElement('div');
// let MT = document.createAttribute('data-custom');
// let MyText = document.createTextNode('<h1> Mohammed Tarek Saied Ghareb </h1>');
// let Com = document.createComment('This is my div');
// M.className = 'Mohammed';
// M.setAttributeNode(MT);
// M.setAttribute('style', 'text-align: center;');
// M.appendChild(MyText);
// M.appendChild(Com);

// document.body.appendChild(M);

// console.log(M);

// let content = document.createElement('div');
// let big = document.createElement('h1');
// let mytext = document.createTextNode('My name is mohammed Tarek');
// content.appendChild(big);
// big.appendChild(mytext);
// content.className = 'myProject';
// document.body.appendChild(content);
// let muButn = document.getElementById("but");
// but.onclick = function (){
//     console.log("Mohammed Tarek Saied Ghareb");
// }
// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// }
// let one = document.querySelector('.one');
// let two = document.querySelector('.two');
// window.onload = function () {
//   one.focus();
// };
// one.onblur = function () {
//   two.focus();
// };

// console.log(it.classList);
// console.log(it.classList.contains('one'));
// console.log(it.classList.contains('zzz'));
// console.log(it.classList.item('0'));

// it.onclick = function () {
//   this.classList.add('Mohammed');
//   this.classList.remove('one');
//   this.classList.toggle('three');
//   this.classList.toggle('Tarek');
// };

// it.style.color = 'green';
// it.style.cssText = 'color:blue;';
// it.style.setProperty("font-size" , "30pt");
// let newa = document.createElement('p');
// it.append('Hello in JS');
// it.after('Top el Top');

// let it = document.getElementById('mydiv');
// it.appendChild(aa);
// aa.id = 'tete';
// aa.addEventListener("click" , function(){
//     console.log("Top el Top");
// })
// let aa = document.getElementById('aa');

// aa.onclick = function () {
//   let newp = aa.cloneNode(true);
//   newp.className = 'Moh';
//   document.body.appendChild(newp);
// };

// document.addEventListener('click', function (e) {
//   if (e.target.className == 'Moh') {
//     console.log('مستنسخ');
//   }
// });

// alert("Mohammed Tarek");

// let con = prompt(' Good Day To You ?', 'اكتب من 3 حروف');
// console.log(con);
// setTimeout(function () {
//   console.log('Mohammed');
// }, 3000);

// let co = document.querySelector('div');
// function na() {
//   co.innerHTML -= 1;
//   if (co.innerHTML=="0"){
//    clearInterval(con);
//    document.write(" I Love You So Much Marwa ")
//   }
// }

// let con = setInterval(na, 1000);

// window.scrollTo({
//   top: 700,
//   behavior:"auto"
// });

// let btn = document.querySelector('button');

// window.onscroll = function () {
//   if (window.scrollY >= 500) {
//     btn.style.display = 'block';
//   } else {
//     btn.style.display = 'none';
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// };

// window.localStorage.setItem('color', 'red');

// const user = {
//   namee: 'Mohammed',
//   age: 19,
//   skills: {
//     html: 70,
//     css: 90
//   }
// };

// function show(a) {
//   console.log(a.name);
//   console.log(a.skills.html);
//   console.log(a.skills.css);
// }
// function show({namee ,age :a , skills : {html ,css :c}} = user) {
//     console.log(namee);
//     console.log(a);
//     console.log(c);
//   }
// show(user);

// const {
//   name: n,
//   age: a,
//   title,
//   country,
//   skills: { html: h }
// } = user;
// console.log(h);

// let my = [1, 1, 1, 2, 3];

// neww.delete(2);
// neww.clear();
// console.log(neww.has('A'));

// console.log(`the size of it ${neww.size}`);

// let aa = neww.keys();

// console.log(aa.next().value);

// neww.forEach((el) => console.log(el));
// let neww = new WeakSet([{A:1,B:2}]);
// console.log(neww);

// let uu = { namet: 'mohammed' };

// let mm = new Map();

// mm.set(uu, 'tttt');
// console.log(mm);

// console.log(Array.from('mohammed', 'ajhfc'));

// console.log(129);

// let moh = [1, 2, 3, 4, 5, 6, 7];
// let check = moh.some(function (e) {
//   return e > 5;
// });

// moh.copyWithin(4, 6);
// console.log(check);

// let moh = {
//   50: 'place 1',
//   20: 'place 2',
//   30: 'place 3',
//   40: 'place 4'
// };

// let min = 15;

// let opmoh = Object.keys(moh).map((n) => +n);
// console.log(opmoh);

// let chek = opmoh.every(function (e) {
//   return e > this;
// }, min);
// console.log(chek);

// console.log('moahmmed');
// console.log(...'moahmmed');
// console.log([...'moahmmed']);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let alla = [...arr1, ...arr2];

// console.log(alla);

// let co = [...arr1];
// console.log(co);

// let mm = 'Hello Mohammed Tarek I love mOhaMmed';

// let rex = /mohammed/ig;

// console.log(mm.match(rex));

// let aa = 'Com Net io eg ox';

// let nn = /(com|Net|eg)/ig;

// console.log(aa.match(nn));

// let mm = "12345678910"
// let nn = /[^0-2]/g;
//  console.log(mm.match(nn));

// let mm = "1@23#45!678*910"
// let nn = /[^0-9]/g;
//  console.log(mm.match(nn));

// 137

// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let va = /\w@\w.(com|net)/g;
// console.log(email.match(va));

// 140

// function sum(a, b) {
//   return a + b;
// }
// sum(7, 3);
// console.log(sum(7, 3));
// // let summ = sum(7, 3);

// // console.log(summ);
//  document.write(summ);

// let a, b;
// a = 7;
// b = 3;

// console.log(a);
// function sum(a, b) {
//     return a + b;
//   }
//   console.log(sum(1000, 100));

//   function summ(c, d) {
//     return c + d;
//   }
//   console.log(sum(2, 3));

// function ran(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }
// ran(2002, 2022);

// function sum(a ="2", b = "3") {

//   return a + b;
// }

// console.log(sum());

// function cal(...nums) {
//   let re = 0;
//   for (i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     re += nums[i];
//   }
//   return re;
// }
// let re = cal(10, 20, 30, 40, 50);

// console.log(re);

// 62 function

// var myName = window.prompt('What is Your name ?');

// console.log('hello',myName);

// function add(a, b) {
//     return a * b;
// }

// console.log(add( window.prompt('Value of a ?')
//  ,window.prompt('Value of b ?')
// )) ;
// function f(a, b) {
//   var z = Number(a) + Number(b);
//   return z;
// }

// var a = prompt('a=');
// var b = prompt('b=');
// if (
//   Number(a) >= 1 &&
//   Number(a) <= 1000 &&
//   Number(b) >= 1 &&
//   Number(b) <= 1000
// ) {
//   console.log(f(a, b));
// }

// function hello() {
// 	return "hello edabit.com";
// }
// console.log(hello());

// function f(x) {
//   let xx = x[0];
//   return xx;
// }
// let x = [1, 2, 3];
// console.log(f(x));

// function addition(a, b) {
//   return a + b;
// }

// console.log(addition(2, 3));

// function lessThanOrEqualToZero(num) {
//   if (num <= 0) {
//     return 'true';
//   } else {
//     return 'false';
//   }
// }

// console.log(lessThanOrEqualToZero(-5));
// console.log(...a);

// Array.from("12345", function (n) {
//   return n; }

//   console.log(n);
// });
// console.log([...a]);
// a = [...Number(a)];
// console.log(+a);
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum += a[i];
//   console.log(sum);
// }

// let a = [1, 2, 3, 4, 5];

//   let a = prompt('Enter 5 Numbers');

// Array.from("12345",function(n){
//   return n;

// })
// console.log(n);
// console.log([...a]);

// let a = '12345';

// console.log(
//   Array.from(a, function (n) {
//     return +n;
//   })
//   );

//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//     console.log(sum);
//   }
// var items = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// console.log(items[2][0]);

// let grade = prompt('Enter Your Grade');
// if (grade < 50) {
//   document.write('Failed');
// } else if (grade <= 80) {
//   document.write('Very Good');
  
// } 

// else {
//   document.write('Pass');
// }

 <script src="main.js"></script> 

