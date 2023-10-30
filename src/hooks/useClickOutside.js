import { useEffect } from "react"

const useClickOutside = (ref, callback) => {
    return useEffect(() => {
        const handleClickOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, callback])
};

export default useClickOutside;