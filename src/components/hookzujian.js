import { useState } from 'react';
import './hookzujian.css';

export default function Hkzj(){
    let [val, setVal] = useState(0);
    let state = {
        name: 'xx'
    }
    return (
        <div>
            <hr/>
            <span>我使用hook 让无状态组件 可以使用状态</span>
            <p>这是状态数据: {val}</p>
            <button onClick={()=>{ setVal(val+1) }}>add状态数据</button>
            <h3>这是fn状态数据: {state.name}</h3>
            <button onClick={()=>{
                state.name = 'mm'
                console.log(state)
            }}>state</button>
        </div>
    )
}
