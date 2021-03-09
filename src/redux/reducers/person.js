import {ADD_PERSON} from '../constant'

// 初始化人的列表
const initState = [{id:'001',name:'tom',age:18}];

export default function personReducer(preState=initState,action){
    console.log("@personReducer");
    // 從action對象中獲取： type、date
    const {type,data} = action;

    // 根據type決定如何加工數據
    switch(type){
        case ADD_PERSON: // 若是添加一個人
            // preState.unshift(data) // 此處不可以這樣寫，這樣會導致preState被改寫了，presonReducer就不是純函數了
            return [data,...preState]
        default:
            return preState
    }
}