import React from 'react'
import Usehoc from '@/components/hoc/index';
import MoveAcction from '@/components/renderProps/index';
import CustomTextInput from '@/components/refs/reftest';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from 'react-router'

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <ul>
                    {/* <li><Link to="/">About</Link></li> */}
                    <li><Link to="/Usehoc">hoc</Link></li>
                    <li><Link to="/CustomTextInput">使用refs</Link></li>
                    <li><Link to="/MoveAcction">rend Prop</Link></li>
                </ul>
                <div>
                    <div>
                        {/* <Route path="/" component={MoveAcction}></Route> */}
                        <Route path="/Usehoc" component={Usehoc}></Route>
                        <Route path="/MoveAcction" component={MoveAcction}></Route>
                        <Route path="/CustomTextInput" component={CustomTextInput}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}

export default RouterConfig;