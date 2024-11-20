import React, { useEffect } from 'react';

function useClickOutside(ref,handler) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return [ref, handler];
}

export default useClickOutside;
