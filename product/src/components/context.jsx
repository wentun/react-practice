import React from 'react';
import {Lop} from './themeContext';

function Page(props){
    const alondiv = (
        <div className="wo" refs="qweqw">
            我是固定模块 {props.yui}   
        </div>
    )
    const creref = React.createRef()
    return (
        <Child alondiv = {alondiv} ref={creref}/>
    )
}

class Child extends React.Component{
    static contextType = Lop
    constructor(props){
        super(props)
    }
    render(){
        let color = this.context
        console.log(Lop)
        console.log(color)
        return(
            <div className="zuihou"> 
                {this.props.alondiv}
                iop 
            </div>
        )
    }
}

class TextContainer extends React.Component{
    
    render(){
        return(
            <div className="father" >
                 {/* {this.context} */}
                <Page yui={'我给的'}/>
            </div>
        )
    }
}
// TextContainer.contextType = Lop  

export default TextContainer;