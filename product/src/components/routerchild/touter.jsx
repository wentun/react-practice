import React from 'react'
import Index1 from './1'
import Index2 from './2'
import Index3 from './3'
import Index from './pipei'
import { HashRouter as Router, Route, Link,NavLink,IndexRoute,Switch } from "react-router-dom";
import { browserHistory, Redirect } from 'react-router'
import Notfound from './Notfound'


// class ChildRouter extends React.Component{
//     render(){
//         return(
//             <Router history={browserHistory}>
//                 <ul>
//                     <li><NavLink to="/childrouter/Index1" activeClassName="router-active">一</NavLink></li>
//                     <li><NavLink to="/childrouter/Index2" activeClassName="router-active">二</NavLink></li>
//                     <li><NavLink to="/childrouter/Index3" activeClassName="router-active">三</NavLink></li>
//                 </ul>
//                 <div>
//                     <Route path="/childrouter/Index1" component={Index1}></Route>
//                     <Route path="/childrouter/Index2" component={Index2}></Route>
//                     <Route path="/childrouter/Index3" component={Index3}></Route>
//                 </div>
//             </Router>
//         )
//     }
// }

// export default ChildRouter;

export default function ChildRouter(){
    return(
        <Router history={browserHistory}>
            <ul>
                <li><NavLink to="/childrouter/Index1" activeClassName="router-active">一</NavLink></li>
                <li><NavLink to="/childrouter/Index2" activeClassName="router-active">二</NavLink></li>
                <li><NavLink to="/childrouter/Index3" activeClassName="router-active">三</NavLink></li>
                <li><NavLink to="/childrouter/Index4" activeClassName="router-active">跳转render函数式组件</NavLink></li>
                <li><NavLink to="/childrouter/Index5/age" activeClassName="router-active">路径语法</NavLink></li>
                <li><NavLink to="/childrouter/Index6/sex" activeClassName="router-active">路径语法多参数</NavLink></li>
            </ul>
            <Switch>
                <Route path="/childrouter/:name/:type" component={Index}></Route>
                <Route path="/childrouter" component={Index1} exact ></Route>
                <Route path="/childrouter/Index1" component={Index1}></Route>
                <Route path="/childrouter/Index2" component={Index2}></Route>
                <Route path="/childrouter/Index3" component={Index3}></Route>
                <Route path="/childrouter/Index4" render={(props)=>{
                    console.log(props)
                    return(
                        <div>
                            这是render函数生成的组件
                        </div>
                    )
                }}></Route>
                {/* <Route path="/Notfound" component={Notfound}></Route>
                <Redirect from="*" to="/Notfound"></Redirect> */}
            </Switch>
        </Router>
    )
}