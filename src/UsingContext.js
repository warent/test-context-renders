import { useContext, useEffect, useRef } from "react";
import CoolContext from "./CoolContext";

export default () => {
    const ctx = useContext(CoolContext);

    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current += 1;
    });

    return (
        <div>
            <button onClick={ctx.incr}>UPDATE PARENT CONTEXT</button>
            <p>Using context: Rendered {renderCount.current} times</p>
        </div>
    )
}