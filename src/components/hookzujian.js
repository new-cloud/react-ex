import { useState } from 'react';

export default function Hkzj(){
    let [val, setVal] = useState(0);
    return (
        <div>
            <hr/>
            <span>我使用hook 让无状态组件 可以使用状态</span>
            <p>这是状态数据: {val}</p>
            <button onClick={()=>{ setVal(val+1) }}>add状态数据</button>
        </div>
    )
}