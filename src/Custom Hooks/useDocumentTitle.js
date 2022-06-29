import React, { useEffect } from 'react'

function useDocumentTitle(count) {
    useEffect(
        ()=>{
            document.titlle = `You clicked ${count} times`
        }, [count]
    )
}

export default useDocumentTitle