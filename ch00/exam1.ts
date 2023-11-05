/** ESNext 주요 문법 살펴보기 */

/** 비구조화 할당 예시 - Destructuring Assignment */

// 비구조화 할당은 객체와 배열에 적용할 수 있다.

let person = {name : "Jane", age : 22};
let {name : string, age : number} = person;

let array = [1, 2, 3, 4];
let [head, ...rest] = array // head = 1, rest = [2, 3, 4]

let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1