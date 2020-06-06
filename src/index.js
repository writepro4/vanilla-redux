import {createStore} from "redux";

//redux는 데이터를 관리하기 위해 만들어짐.
//redux에서는 한곳에서만 데이터 수정이 이루어짐.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
    return count;
};


const countStore = createStore(countModifier);

console.log(countStore.getState());


