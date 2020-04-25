import React,{ useState,useEffect,useContext } from 'react'
import {Lop} from '../themeContext.jsx';

export default function Example(){
    const [count,setcount] = useState({
        name:'wen',age:1
    })
    useEffect(()=>{
        console.log(typeof(count.age),count)
    })
    
    return(
        <div>
            <p>hook练习</p>
            <p>自定义名称为——————{count.name}</p>
            <p>自定义值为——————{count.age}</p>
            <span className='btn' onClick={()=>{
                setcount({name:count.name,age:count.age+=1})
            }}>count+1方法</span>
            <Counter></Counter>
        </div>
    )
}

function Counter({}) {
    const theme = useContext(Lop);
    return (
        <>
            <button style={{ background: theme.background, color: theme.foreground,marginTop:'20px' }}>
                颜色取自Context
            </button>
        </>
    );
  }