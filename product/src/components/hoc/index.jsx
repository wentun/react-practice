import React from 'react';
import hocContainer from './comment';

class TextList extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        console.log(this.props.data)
        return(
            <div>
                {this.props.data.map((value)=>(
                   <p key={value}>{value}</p> 
                ))}
            </div>
        )
    }
}
class Textarea extends React.Component{
    render(){
        console.log(this.props.data)
        return(
            <div>
                <p>{this.props.data}</p>
            </div>
        )
    }
}
// let data = DataSource
const Listdiv = hocContainer(
    TextList,
    (DataSource) => DataSource.getComments()
)
const Inputdiv = hocContainer(
    Textarea,
    (DataSource,props) => DataSource.getBlogPost(props.id)
)

class Usehoc extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="con-container">
                这是容器
                <Listdiv/>
                <Inputdiv/>
            </div>
        )
    }
}
export default Usehoc;
