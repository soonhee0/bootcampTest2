"use strict";

/**
 * 【問題1】
 *
 * 関数isEvenを定義しましょう。
 * isEvenは、偶数ならtrueを、奇数ならfalseを返します。
 *
 * @param {number}
 * @returns {boolean}
 */
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
// ここに関数を定義しましょう
// ここに関数を定義しましょう
// ここに関数を定義しましょう
// ここに関数を定義しましょう
// ここからはテストなので変更を加えないでください
console.log("*** 問題1 ***");

test(isEven(2), true);
test(isEven(5), false);
test(isEven(3), false);
test(isEven(10), true);

////////////////////////

/**
 * 【問題2】
 *
 * 関数makeStrを定義しましょう。
 * makeStrは、配列の要素をすべて合わせた文字列を返します。
 *
 * @param {Array<string>}
 * @returns {string}
 */
function makeStr(array) {
  return array.join(``);
}
// ここからはテストなので変更を加えないでください
// ここからはテストなので変更を加えないでください
console.log("*** 問題2 ***");

test(makeStr(["a", "b", "c"]), "abc");
test(makeStr(["1", "2", "3"]), "123");
test(makeStr(["true", " ", "false"]), "true false");

////////////////////////

/**
 * 【問題3】
 *
 * 関数pickを定義しましょう。
 * pickは、入れ子になった配列とindex番号を取り、各配列のindexに格納されている値を入れた配列を返します。
 *
 * @param {Array<string>}
 * @param {number}
 * @returns {Array<string>}
 */

function pick(array, num) {
  let result = [];
  for (const elem of array) {
    if (elem[num] !== undefined) {
      result.push(elem[num]);
    }
  }
  return result;
}
//forループでindex num の要素にアクセス

// ここからはテストなので変更を加えないでください
console.log("*** 問題3 ***");

let testArray = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

test(pick(testArray, 1), ["b", "e", "h"]);

testArray = [
  ["m", "s"],
  ["e", "n"],
  ["g", "i"],
  ["n", "e"],
  ["e", "r"],
];

test(pick(testArray, 0), ["m", "e", "g", "n", "e"]);

testArray = [
  ["1", "2", "3", "4", "5", "6"],
  ["one", "two", "three", "four", "five", "six"],
];

test(pick(testArray, 4), ["5", "five"]);

////////////////////////

/**
 * 【問題4】
 *
 * 関数collectKeysを定義しましょう。
 * collectKeysは第二引数に入った値をvalueに持つkeyを集めた配列を返します。
 *
 * @param {object}
 * @param {any}
 * @returns {Array<string>}
 */

// ここに関数を定義しましょう
function collectKeys(obj, str) {
  let result = [];
  for (const key in obj) {
    if (obj[key] === str) {
      result.push(key);
    }
  }
  return result;
}
// ここからはテストなので変更を加えないでください
console.log("*** 問題4 ***");

let testObject = {
  2: "winter",
  7: "summer",
  4: "spring",
  8: "summer",
  11: "autumn",
};

test(collectKeys(testObject, "summer"), ["7", "8"]);

testObject = {
  a: true,
  b: "user",
  c: 2,
  d: "member",
  e: true,
  h: 77,
};

test(collectKeys(testObject, true), ["a", "e"]);

testObject = {
  a: 10,
  b: 100,
  c: 15,
};

test(collectKeys(testObject, 100), ["b"]);

////////////////////////

/**
 * 【問題5】
 *
 * 関数createObjectを定義しましょう。
 * createObjectは、第一引数に入った配列の値をkeyに、第二引数に入った配列の値をvalueに持つオブジェクトを返します。
 *
 * @param {Array<string>}
 * @param {Array<any>}
 * @returns {object<any>}
 */

function createObject(arr1, arr2) {
  let result = {};
  for (const elem of arr1) {
    result[elem] = arr2[arr1.indexOf(elem)];
  }
  return result;
}

// ここからはテストなので変更を加えないでください
console.log("*** 問題5 ***");

test(createObject(["a", "b", "c"], [1, 2, 3]), { a: 1, b: 2, c: 3 });
test(createObject(["userId", "userName", "isMember"], [100, "Hitomi", true]), {
  userId: 100,
  userName: "Hitomi",
  isMember: true,
});
test(createObject([], []), {});

////////////////////////
