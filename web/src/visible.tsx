import { useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { useNuiEvent } from "./hooks/useNuiEvent"
import { isEnvBrowser } from "./utils/misc"
import { Button } from "./components/ui/button"
import { fetchNui } from "./utils/fetchNui"

export const Visible = ({
    children
}: { children: React.ReactNode }) => {
    const [show, setShow] = useState(false)
    const nodeRef = useRef(null)

    useNuiEvent("setVisible", setShow)

    useEffect(() => {
        if (!show) return;
        const keyHandler = (e: KeyboardEvent) => {
            if (["Escape"].includes(e.code)) {
                if (!isEnvBrowser()) fetchNui("hideFrame");
                else setShow(!show);
            }
        };
        window.addEventListener("keydown", keyHandler);
        return () => window.removeEventListener("keydown", keyHandler);
    }, [show])

    return (
        <>
            {isEnvBrowser() && <Button onClick={() => setShow(!show)}>Open</Button>}
            <CSSTransition nodeRef={nodeRef} in={show} timeout={250} classNames="visible" unmountOnExit={true}>
                <div ref={nodeRef}>
                    {children}
                </div>
            </CSSTransition>
        </>
    )
}
