import React from 'react';

class Index extends React.Component{

    constructor(props){
        super(props)
        this.returnHome = this.returnHome.bind(this)
    }

    returnHome(){
        // 参数一：跳转路径，参数二：跳转时可携带路由参数
        this.props.history.push('/childrouter')
    }

    render(){
        console.log(this.props)
        return (
            <div >
                <p>传来的参数{this.props.match.params.name}</p>
                <p> 传来的参数{this.props.match.params.type}</p>
                <button onClick={this.returnHome}>返回首页</button>
            </div>
        );
    }
}

export default Index;