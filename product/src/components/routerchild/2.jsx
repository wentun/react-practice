import React from 'react';

class Index2 extends React.Component{
    render(){
        console.log('子路由接收数据',this.props)
        return (
            <div >
              第二个子路由
            </div>
        );
    }
}

export default Index2;