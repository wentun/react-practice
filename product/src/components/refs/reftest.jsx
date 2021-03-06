import React from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'组件内部数据'
        }
        this.textInput = null;
    
        this.setTextInputRef = (e) => {
            this.textInput = e;
        };
        //我的方法    
        // this.setTextInputRef = React.createRef();

        this.focusTextInput = () => {
            // 使用原生 DOM API 使 text 输入框获得焦点
            if (this.textInput) this.textInput.focus();

            //我的
            // this.setTextInputRef.current.focus()
        };

    }
    
    componentDidMount() {
        // 组件挂载后，让文本框自动获得焦点
        this.focusTextInput();
    }
    
    showText(){
        console.log(" input输入框数据" ,this.refs.input.value)
        console.log(this.state.name)
    }

    render() {
        // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
        // 实例上（比如 this.textInput）
        return (
            <div>
                <input type="text" ref={this.setTextInputRef}/>
                <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
                <input type="text" ref="input" />
                <input type="button" value="获取ref" onClick={()=>this.showText()}/>
            </div>
        );
    }
}

export default CustomTextInput;