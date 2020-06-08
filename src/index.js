import {createStore} from "redux";

//redux는 데이터를 관리하기 위해 만들어짐.
//redux에서는 한곳에서만 데이터 수정이 이루어짐.
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

//action을 받아서 조건문으로 실행함
const countModifier = (count = 0, action) => {
    if (action.type === "ADD") {
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
};


const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};


countStore.subscribe(onChange);

//리덕스에 액션 전달해주는 함수.
const handleAdd = () => {
    countStore.dispatch({type: "ADD"});
};
const handleMinus = () => {
    countStore.dispatch({type: "MINUS"});
};

//이벤트 리스너
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


