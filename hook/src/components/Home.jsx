import React, { useContext, useEffect, useState } from 'react';
import { appContext } from './Context';

function Home() {
    const { color, isColor } = useContext(appContext);
    const { show, isShow } = useContext(appContext);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        isShow(!show);
        alert("Content Button Clicked");
    };

    useEffect(() => {
        console.log("Count has changed:", count);
    }, [count]);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={() => { isColor(!color) }}>Toggle</button>
            </div>
            <div style={{ background: color ? "black" : "#717271", color: "white", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "30px", borderRadius: "4px", padding: "40px 30px 40px 30px" }}>
                <p style={{ display: show ? "block" : "none" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolorem assumenda earum sapiente, saepe fuga cupiditate. Eveniet, quibusdam incidunt laborum quia nostrum cum soluta aliquid, deleniti ab doloremque harum facere vitae ratione nobis provident excepturi. Explicabo cupiditate quas necessitatibus unde! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente maxime et vitae, eum sint excepturi repudiandae sed cumque aspernatur nulla minima incidunt laudantium nobis officiis rem, suscipit debitis dolorum reprehenderit nemo natus ut nihil autem velit rerum. Est, veniam iste.
                </p>
                <button style={{ width: "fit-content", alignSelf: "center" }} onClick={handleClick}>content</button>
                <p style={{ alignSelf: "center" }}>{count}</p>
                <button style={{ alignSelf: "center", width: "fit-content" }} onClick={() => { setCount(prev => prev + 1) }}>Like</button>
            </div>
        </div>
    );
}

export default Home;
