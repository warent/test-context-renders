import { useEffect, useRef } from "react";

export default () => {

    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current += 1;
    });

    return (
        <div>Not using context: Rendered {renderCount.current} times</div>
    )
}