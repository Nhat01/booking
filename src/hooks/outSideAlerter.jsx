import { useState, useRef, useEffect } from "react";

const useOutsideAlerter = (initialValue) => {

    const ref = useRef(null);
    const wrapRef = useRef(null)
    const [visible, setVisible] = useState(initialValue);
    
    const handleClickOutside = (event) => {
        if (
            ref.current &&
            !ref.current.contains(event.target) && 
            wrapRef.current &&
            !wrapRef.current.contains(event.target)
        ) {
            setVisible(false);
        }
    }
    useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  
    return {ref, wrapRef, visible, setVisible}
}

export default useOutsideAlerter