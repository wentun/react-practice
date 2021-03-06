import React from 'react'
import Usehoc from '@/components/hoc/index';
import MoveAcction from '@/components/renderProps/index';
import CustomTextInput from '@/components/refs/reftest';
import Example from '@/components/hook/index';
import Taiji from '@/components/hook/taiji';
import Main from '@/components/routerchild/index';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link,NavLink,Switch } from "react-router-dom";
import { browserHistory } from 'react-router'

class RouterConfig extends React.Component{
    render(){
        return(
            <Router >
                <ul>
                    {/* <li><Link to="/">About</Link></li> */}
                    {/* <li><NavLink to="/" activeClassName="router-active"></NavLink></li> */}
                    <li><NavLink to="/Usehoc" activeClassName="router-active">hoc</NavLink></li>
                    <li><NavLink to="/CustomTextInput" activeClassName="router-active">使用refs</NavLink></li>
                    <li><NavLink to="/MoveAcction" activeClassName="router-active">rend Prop</NavLink></li>
                    <li><NavLink to="/childrouter" activeClassName="router-active">子路由</NavLink></li>
                    <li><NavLink to="/hook" activeClassName="router-active">hook</NavLink></li>
                    <li><NavLink to="/taiji" activeClassName="router-active">太极</NavLink></li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/" component={Usehoc} exact ></Route>
                        <Route path="/Usehoc" component={Usehoc}></Route>
                        <Route path="/MoveAcction" component={MoveAcction}></Route>
                        <Route path="/CustomTextInput" component={CustomTextInput}></Route>
                        <Route path="/childrouter" component={Main}></Route>
                        <Route path="/hook" component={Example}></Route>
                        <Route path="/taiji" component={Taiji}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouterConfig;