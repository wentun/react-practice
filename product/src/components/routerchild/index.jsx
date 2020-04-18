import React from 'react';
import ChildRouter from './touter';
import './index.less';

class Main extends React.Component{
    render(){
        return (
            <div className="child-container">
                <p>这是子路由总页面</p>
                <ChildRouter />
            </div>
        );
    }
}

export default Main;