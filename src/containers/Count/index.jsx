import React, { Component } from 'react'

// 引入connect用於連接UI組件與redux
import {connect} from 'react-redux'

// 引入action
import {
    increment,
    decrement,
    incrementAsync,
} from '../../redux/actions/count'

// 定義UI組件
class Count extends Component {

    state = {count:0}

    // 加法
    increment = () => {
        console.log('increment');
        const {value} = this.selectNumber;
        this.props.increment(value*1);
    }

    // 減法
    decrement = () => {
        console.log('decrement');
        const {value} = this.selectNumber;
        this.props.decrement(value*1);
    }

    // 奇數再加
    incrementIfOdd = () => {
        console.log('incrementIfOdd');
        const {value} = this.selectNumber;
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1);
        }
    }

    // 異步加法
    incrementAsync = () => {
        console.log('incrementAsync');
        const {value} = this.selectNumber;
        this.props.incrementAsync(value * 1,500);        
    }

    render() {
        console.log('UI組件接收到的props是',this.props);
        return (
            <div>
                <h2>我是Count組件</h2>
                <h1>當前求和為：{this.props.count} , 下方組件總人數為: {this.props.personCount}  </h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>當前求和為奇數再加</button>&nbsp;
                <button onClick={this.incrementAsync}>異步加</button>&nbsp;
            </div>
        )
    }
}


// mapStateToProps函數返回的是一個對象
// 返回的對象中的key就作為傳遞給UI組件props的key
// value就作為傳遞給UI組件props的value
// mapStateToProps用於傳遞狀態
const mapStateToProps = (state)=>({
    count:state.count,
    personCount:state.persons.length
})

// mapDispatchToProps函數返回的是一個對象
// 返回的對象中的key就作為傳遞給UI組件props的key
// value就作為傳遞給UI組件props的value
// mapDispatchToProps用於傳遞操作狀態的方法
// const mapDispatchToProps = (dispatch)=> ({ 
    
//     // 通知redux執行加法
//     jia: (number) => dispatch(createIncrementAction(number)),
//     jian: (number) => dispatch(createDecrementAction(number)),
//     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
// })

// 使用connect()()暴露一個Count的容器組件
export default connect(
    mapStateToProps,
    //(state)=>({count:state.he}),

    // mapDispatchToProps的一般寫法
    //mapDispatchToProps    

    // mapDispatchToProps的簡寫
    // react-redux底層作了優化的封裝，才可以這樣寫
    {
        // increment:increment,
        // increment:decrement,
        // increment:incrementAsync
        increment,
        decrement,
        incrementAsync
    }
)(Count)