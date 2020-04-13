import React from 'react';
import Context from './context.jsx';
import Tabel from './fragment.jsx';
import {Lop} from './themeContext.jsx';
import RouterConfig from '@/router/index';
import '@/css/index.less';

class Myfirst extends React.Component{
    render(){
        return (
            <div className='container'>
                <Name  />
                {/* <Lop.Provider value="bule">
                    <Lpoi  />
                    <Context/>  
                </Lop.Provider>  
                <Tabel/> */}
                <RouterConfig></RouterConfig>
            </div>
        );
    }
}

class Name extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // piece:[1,2,3,4,5,6,7,8,9],
            piece:Array(9).fill(null),
            nextuser:true
        };
    }
    
    changPiece(i){
        const newpiece = this.state.piece.slice()
        if(calculateWinner(newpiece) || newpiece[i] ){
            return
        }
        newpiece[i] = this.state.nextuser ? 'x' : 'o'
        this.setState({
            piece: newpiece,
            nextuser: !this.state.nextuser
        })
    }
    openNewGame(){
        this.setState({
            piece:Array(9).fill(null),
            nextuser:true
        })
    }
    render() {
        const divarea = this.state.piece.map((num,index)=>
            <div className='area' key={index} onClick={()=>{this.changPiece(index)}}>{num}</div>
        )
        const winner = calculateWinner(this.state.piece);
        let text
        if(winner){
            text = 'Winner is '+ winner
        }else{
            text = '轮到'+(this.state.nextuser ? "x":"o")+'落子' 
        }
        return <div >
            <p>{text}</p>
            <div className='area-container'>
                {divarea}
            </div>
            <button onClick={()=>this.openNewGame()}>重新开始</button>
        </div>
    }
}

class Lpoi extends React.Component{
    static contextType = Lop
    render(){
        let color = this.context
        console.log(Lop)
        console.log(color)
        return(
            <div className="father" >
                 {/* {this.context} */}
                新寨
            </div>
        )
    }
}

// 判断获胜者
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Myfirst;