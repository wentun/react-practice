import React from 'react';

class TabelChild extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Show {...this.props}></Show>
        )
    }
}

class Show extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return (
            <dl >
                {this.props.arr.map(item => (
                    // 没有`key`，React 会发出一个关键警告
                    <React.Fragment key={item.id}>
                        <dt>{item.name}</dt>
                        <dd>{item.age}</dd>
                    </React.Fragment>
                ))}
            </dl>
        )
    }
}

class Tabel extends React.Component{
    render(){
        const arr = [
            {id:1,name:'wen',age:14},
            {id:2,name:'yu',age:16},
            {id:3,name:'tun',age:17},
        ]
        return (
            <div className="table-list">
                <TabelChild arr ={arr} klop={'sdfds'}></TabelChild>
            </div>
        )
    }
}

export default Tabel;