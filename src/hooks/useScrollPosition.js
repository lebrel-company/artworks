'use strict';
// libraries:
import {useRef, useLayoutEffect} from 'react'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//==============================================================================


const isBrowser = typeof window !== `undefined`


export function useScrollPosition(effect, dependencies, element, useWindow, wait) {
    const position = useRef(getScrollPosition(
        {
            useWindow: useWindow
        }
    ))

    let throttleTimeout = null

    //-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

    function callBack() {
        var currentPosition = getScrollPosition({element, useWindow})
        effect({
            prevPos: position.current,
            currentPosition: currentPosition
        })
        position.current = currentPosition
        throttleTimeout = null
    }

    useLayoutEffect(
        function () {
            const handleScroll = () => {
                if (wait) {
                    if (throttleTimeout === null) {
                        throttleTimeout = setTimeout(callBack, wait)
                    }
                } else {
                    callBack()
                }
            }

            window.addEventListener('scroll', handleScroll)

            return () => window.removeEventListener('scroll', handleScroll)
        }, dependencies
    )
}

// --   --   --   --   --   --   --   --   --   --   --   --   --   --   --   --

function getScrollPosition({element, useWindow}) {
    if (!isBrowser) return {x: 0, y: 0}

    var target = element ? element.current : document.body
    var position = target.getBoundingClientRect()

    if (useWindow) {
        return {
            x: window.scrollX,
            y: window.scrollY
        }
    } else {
        return {
            x: position.left,
            y: position.top
        }
    }
}
