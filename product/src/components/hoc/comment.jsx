import React from 'react';
import DataSource from './data';

let hocContainer = (WrapComment,selectData)=>{
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            // ……注意订阅数据……
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }
        render() {
            // ……使用最新的数据渲染组件
            // 注意此处将已有的props属性传递给原组件
            const style = {
                'marginBottom':'30px'
            }
            return(
                <div style={style}>
                    <div>这是hoc处理</div>
                    <WrapComment data={this.state.data} {...this.props} />
                </div>
            );
        }
    };
}

export default hocContainer;