// 2
// function changeSize() {
//     let div = document.getElementById("myDiv");
//     div.style.width = "400px";
//     div.style.height = "300px";
//   }


// 2(2)
// function getSize() {
//     let div = document.getElementById("elem");
//     let width = div.offsetWidth; // Ширина без padding и border
//     let height = div.offsetHeight; // Высота без padding и border
//     alert("Ширина: " + width + "px\nВысота: " + height + "px");
// }

// 2(3)
// function getFontSize() {
//     let div = document.getElementById("elem");
//     let fontSize = window.getComputedStyle(div).fontSize; 
//     let fontSizeWithoutUnit = parseFloat(fontSize);
//     alert("Размер шрифта: " + fontSizeWithoutUnit);
// }

// 3(1)
// function increaseSize() {
//     let div = document.getElementById("elem");
//     let currentWidth = div.offsetWidth;
//     let currentHeight = div.offsetHeight;
//     div.style.width = (currentWidth + 50) + "px";
//     div.style.height = (currentHeight + 50) + "px";
// }

// 3(2)function increaseSize() {
//     let div = document.getElementById("elem");
//     let currentWidth = div.offsetWidth;
//     let currentHeight = div.offsetHeight;

//     // Увеличиваем ширину и высоту на 10%
//     let newWidth = currentWidth * 1.1;
//     let newHeight = currentHeight * 1.1;

//     div.style.width = newWidth + "px";
//     div.style.height = newHeight + "px";
// }

// 4 function getBorderInfo() {
//    let div = document.getElementById("elem");
//    let computedStyle = window.getComputedStyle(div); 
//     let borderWidth = computedStyle.getPropertyValue("border-width");
//     let borderStyle = computedStyle.getPropertyValue("border-style");
//     let borderColor = computedStyle.getPropertyValue("border-color");
//     alert("Толщина границы: " + borderWidth + "\nТип границы: " + borderStyle + "\nЦвет границы: " + borderColor);
// }

// 5 function hideDiv() {
//     let div = document.getElementById("myDiv");
//     div.style.display = "none"; // Устанавливаем display: none, чтобы спрятать див
// }

// function showDiv() {
//     let div = document.getElementById("myDiv");
//     div.style.display = "block"; // Устанавливаем display: block, чтобы показать див
// }

// 8
// function getElementDimensions() {
//     let elem = document.getElementById('elem');
//     let width = elem.offsetWidth;
//     let height = elem.offsetHeight;
//     alert('Width: ' + width + 'px\nHeight: ' + height + 'px');
// }

// 8(2)
// function increaseElementSize() {
//     let elem = document.getElementById('elem');
//     let currentWidth = elem.offsetWidth;
//     let currentHeight = elem.offsetHeight;
//     elem.style.width = (currentWidth * 2) + 'px'; 
//     elem.style.height = (currentHeight * 2) + 'px'; 
// }

// 9
// function getFontSize() {
//     let elem = document.getElementById('elem');
//     let computedStyle = window.getComputedStyle(elem); 
//     let fontSize = computedStyle.getPropertyValue('font-size'); 
//     alert('Font Size: ' + fontSize);
// }

// 11
// let paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(function(paragraph) {
//     paragraph.addEventListener('click', function() {
//         if (!this.classList.contains('red')) {
//             this.classList.add('red');
//         } else {
//             this.classList.remove('red'); 
//         }
//     });
// });

// 12
// let input = document.getElementById('myInput');
// input.addEventListener('blur', function() {
//     if (this.value.length <= 9) {
//         this.classList.remove('invalid');
//         this.classList.add('valid');
//     } else {
//         this.classList.remove('valid');
//         this.classList.add('invalid');
//     }
// });

// 13
// let input = document.getElementById('myInput');
// input.addEventListener('blur', function() {
//     let number = parseInt(this.value); 
//     if (!isNaN(number)) { 
//         if (number < 10) {
//             this.classList.remove('yellow', 'red');
//             this.classList.add('green');
//         } else if (number >= 10 && number <= 20) {
//             this.classList.remove('green', 'red');
//             this.classList.add('yellow');
//         } else {
//             this.classList.remove('green', 'yellow');
//             this.classList.add('red');
//         }
//     } else { 
//         this.classList.remove('green', 'yellow', 'red');
//     }
// });

// 15
// let elem = document.querySelector('#elem');

// 16
// let btn = document.getElementById('btn');
// let elem = document.getElementById('elem');
// btn.addEventListener('click', function() {
//     console.log('Client Width:', elem.clientWidth);
//     console.log('Client Height:', elem.clientHeight);
// });

// 17
// let btn = document.getElementById('btn');
// let elem = document.getElementById('elem');
// btn.addEventListener('click', function() {
//     console.log('Client Width:', elem.clientWidth);
//     console.log('Client Height:', elem.clientHeight);
// });

// 20
// let btn = document.getElementById('btn');
// let elem = document.getElementById('elem');


// btn.addEventListener('click', function() {

//     elem.scrollTop += 100;
//     elem.scrollLeft += 50;
// });
// 20(2)
// let btn = document.getElementById('btn');
// let elem = document.getElementById('elem');
// btn.addEventListener('click', function() {
//     elem.scrollTop += 50;
// });

// 21
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     if (elem.scrollTop + elem.clientHeight === elem.scrollHeight) {
//         console.log('Элемент прокручен до конца по вертикали');
//     } else {
//         console.log('Элемент не прокручен до конца по вертикали');
//     }
// });

// 22
// document.getElementById('myButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.style.height = '100%';
// });

// 23
// document.getElementById('myButton').addEventListener('click', function() {
//     let div = document.createElement('div');
//     div.style.overflowY = 'scroll';
//     div.style.width = '50px';
//     div.style.height = '50px';
//     document.body.append(div);
//     let scrollWidth = div.offsetWidth - div.clientWidth;
//     div.remove();
//     console.log('Ширина полосы прокрутки: ' + scrollWidth);
// });

// 24
// function getWindowSize() {
//     let width = window.innerWidth
//      document.documentElement.clientWidth
//      document.body.clientWidth;

//     let height = window.innerHeight
//      document.documentElement.clientHeight
//      document.body.clientHeight;

//     alert("Ширина окна: " + width + ", Высота окна: " + height);
// }

// 24(2)
// function checkVerticalScroll() {
//    let hasVerticalScroll = window.innerHeight < document.documentElement.scrollHeight;
    
//     if (hasVerticalScroll) {
//         alert("Вертикальная прокрутка присутствует.");
//     } else {
//         alert("Вертикальная прокрутка отсутствует.");
//     }
// }

// 25
// document.getElementById('myButton').addEventListener('click', function() {
//     let scrollHeight = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//     );
  
//     console.log(scrollHeight);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     let scrollWidth = Math.max(
//       document.body.scrollWidth, document.documentElement.scrollWidth,
//       document.body.offsetWidth, document.documentElement.offsetWidth,
//       document.body.clientWidth, document.documentElement.clientWidth
//     );
  
//     console.log(scrollWidth);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     let hiddenHeight = document.documentElement.clientHeight - scrollHeight;
  
//     console.log(hiddenHeight);
//   });

// 26
// document.getElementById('myButton').addEventListener('click', function() {
//     let x = window.pageXOffset; // слева
//     let y = window.pageYOffset; // сверху
  
//     console.log(y);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let remainingHeight = totalHeight - y;
  
//     console.log(remainingHeight);
//   });
  
// 27
// document.getElementById('myButton').addEventListener('click', function() {
//     document.documentElement.scrollTop = 300;
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - 100;
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.documentElement.scrollTop = 0;
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight;
//   });
  
// 28
// document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollTo(0, 300);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
//   });
  
// 29
// document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollBy(0, 100);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollBy(0, -100);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollBy({ top: 300, behavior: 'smooth' });
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     window.scrollBy({ top: -300, behavior: 'smooth' });
//   });
  
// 30
// document.getElementById('myButton').addEventListener('click', function() {
//     document.getElementById('yourElementId').scrollIntoView(true);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.getElementById('yourElementId').scrollIntoView(false);
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.getElementById('yourElementId').scrollIntoView({ behavior: 'smooth' });
//   });
  
//   document.getElementById('myButton').addEventListener('click', function() {
//     document.getElementById('yourElementId').scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'end',
//     });
//   });
  
//31
// let array1 = ["apple", "banana", "cherry"];
// let array2 = ["dog", "cat", "rabbit"];
// let array3 = ["red", "green", "blue"];
// let map = new Map();
// map.set(array1, "Fruits");
// map.set(array2, "Animals");
// map.set(array3, "Colors");
// map.forEach((value, key) => {
//     console.log(key.join(", ") + " : " + value);
// });


//31
// let obj1 = { name: "Alice" };
// let obj2 = { name: "Bob" };
// let obj3 = { name: "Charlie" };
// let array1 = ["apple", "banana", "cherry"];
// let array2 = ["dog", "cat", "rabbit"];
// let array3 = ["red", "green", "blue"];
// let map = new Map();
// map.set(obj1, array1);
// map.set(obj2, array2);
// map.set(obj3, array3);
// map.forEach((value, key) => {
//     console.log(JSON.stringify(key) + " : " + JSON.stringify(value));
// });


// 35
// let map = new Map();
// map.set("key1", "value1");
// map.set("key2", "value2");
// map.set("key3", "value3");
// let keysArray = Array.from(map.keys());
// for (let key of keysArray) {
//     console.log(key);
// }

// 35
// let map = new Map();
// map.set("key1", "value1");
// map.set("key2", "value2");
// map.set("key3", "value3");
// let entriesArray = Array.from(map.entries());
// for (let [key, value] of entriesArray) {
//     console.log(key + " : " + value);
// }

// 36
// let inputs = document.querySelectorAll('input');
//         let inputMap = new Map();
//         inputs.forEach((input, index) => {
//             inputMap.set(input, index + 1);
//             input.value = index + 1;
//             input.addEventListener('click', function() {
//                 input.value = inputMap.get(input);
//             });
//         });

// 36
// let numbers = [];
// function handleEnter(event) {
//     if (event.key === 'Enter') {
//         let input = event.target;
//         let number = parseFloat(input.value);
//         if (!isNaN(number)) {
//             numbers.push(number);
//             input.value = '';
//         }
//     }
// }
// function handleBlur(event) {
//     console.log(numbers);
// }
// let inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//     input.addEventListener('keypress', handleEnter);
//     input.addEventListener('blur', handleBlur);
// });

// 37
// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(1); 
// console.log(mySet);

// 38
// let arr = [1, 2, 3, 1, 3, 4];
// let mySet = new Set(arr);
// console.log(mySet);

// 38
// let mySet = new Set([1, 2, 3]);
// mySet.add(2); 
// console.log(mySet);
