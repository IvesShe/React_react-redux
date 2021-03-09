import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {

    addPersion = ()=>{
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = {id:nanoid(),name,age};
        this.props.addPerson(personObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
        //console.log(personObj);
    }

    render() {
        return (
            <div>
                <h2>我是Person組件 , 上方組件求和為 {this.props.count} </h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="輸入名字" />
                <input ref={c=>this.ageNode = c} type="text" placeholder="輸入年齡" />
                <button onClick={this.addPersion} >添加</button>
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return <li key={p.id}>{p.name}--{p.age}</li>
                        })
                    
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        persons:state.persons,
        count:state.count
    }),   // 映射狀態
    //{addPerson:addPerson}    // 映射操作狀態的方法
    {addPerson}    // 映射操作狀態的方法
)(Person)