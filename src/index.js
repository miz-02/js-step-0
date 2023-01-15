let val1 = "let変数";
console.log(val1);

const val2 = "const変数";
console.log(val2);

/**
 * テンプレート文字列
 */
// const name = "minami";
// const age = 26;
// const message1 = "My name is " + name + ". I'm " + age + " years old.";
// console.log(message1);

// const message2 = `My name is ${name}. I'm ${age} years old.`;
// console.log(message2);

/**
 * アロー関数
 */

function func1(str) {
  return str;
}
console.log(func1("美波です"));

const func2 = (str) => {
  return str;
};
console.log(func2("こんにちは"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */
// const me = {
//   name: "美波",
//   age: 26
// };
// const message3 = `名前は${me.name}です。年齢は${me.age}です。`;
// console.log(message3);

// const {name, age} = me;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//

/**
 * デフォルト値、引数など
 */

//  const sayHello = (name = "ゲスト") => {
//    console.log(`こんにちは${name}さん！`);
//  };
//  sayHello();

/**
 * スプレット構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc1 = (num1, num2) => {
//   console.log(num1 + num2);
// };

// sumFunc1(arr1[0], arr1[1]);
// sumFunc1(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピー、結合
// この参照方法だと元の参照先が影響を受けない
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];

// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "齋藤"];
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "齋藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const num = "1300";
// toLocalStringは金額のように3桁区切りで表示してくれる関数
// console.log(num.toLocaleString());
// typeofは種類を判断する
// const formatedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formatedNum);
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };

// console.log(checkSum(3, 20));

/**
 * 論理演算子の本当の意味を知ろう
 */

//  || は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "設定されました";
console.log(fee2);
