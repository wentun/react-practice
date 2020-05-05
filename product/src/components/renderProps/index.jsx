import React from 'react'
import '@/css/index.less'
import IU from '@/img/IU.jpg';

class GodGirl extends React.Component{
    render(){
        const station = this.props.mouse
        return(
            <img src={IU} alt="" style={{ position: 'absolute', left: station.x, top: station.y }}/>
        )
    }
}

class Move extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            x:0,y:0
        }
        this.handleMoveMouse = this.handleMoveMouse.bind(this)
    }

    handleMoveMouse(e){
        this.setState({
            x:e.clientX,
            y:e.clientY,
        })
    }

    render(){
        return(
            <div onMouseMove={this.handleMoveMouse} className="border">
                <p>{this.state.x}</p>
                {this.props.girl(this.state)}
            </div>
        )
    }
}

class MoveAcction extends React.Component{
    render(){
        return(
            <div>
                <h1>下面是追逐女神</h1>
                <Move girl={mouse=>(
                    <GodGirl mouse={mouse} />
                )} />
            </div>
        )
    }
}

export default MoveAcction;