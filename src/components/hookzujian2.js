import { useState } from 'react';
import { Button } from 'antd';
import './hookzujian.css';

export default function Hkzj(props){
    console.log(props)
    let [val, setVal] = useState({
        name: 'xx',
        age: 10
    });
    return (
        <div>
            <hr/>
            <span>我使用hook2</span>
            <p>这是状态数据name: {val.name}</p>
            {/* <p>这是状态数据age: {val.age}</p> */}
            <button onClick={()=>{
                setVal({name: 'mm'})
                setVal({name: 'cc'})
            }}>addhook2状态数据</button>
            <Button type="primary" onClick={props.add}>add</Button>
        </div>
    )
}
