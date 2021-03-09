// 該文件專門為Count組件生成acton對象

import {INCREMENT,DECREMENT} from '../constant' 

// 同步action，就是指action的值為Object類型的一般對象
export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})

// 異步action，就是指action的值為函數
// 異步action中一般都會調用同步action，異步action不是必須要用的
export const incrementAsync = (data,time) =>{
    return (dispatch)=>{
        console.log('increment');
        setTimeout(()=>{
            dispatch(increment(data))
        },time)
    }
}