import { useState } from 'react';
import './hookzujian.css';

export default function Hkzj(){
    let [val, setVal] = useState(0);
    return (
        <div>
            <hr/>
            <div style={{width:'100px',height:'100px'}} className="div1"></div>
            <span>我使用hook 让无状态组件 可以使用状态</span>
            <p>这是状态数据: {val}</p>
            <button onClick={()=>{ setVal(val+1) }}>add状态数据</button>
        </div>
    )
}
