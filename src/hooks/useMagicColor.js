import { useEffect, useRef, useState } from 'react';


function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'blue', 'green', 'yellow', 'black'];

    const currentIndex = COLOR_LIST.indexOf(currentColor);

    let newIndex = currentIndex;

    while (newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() * COLOR_LIST.length);
    }

    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    //change color every seconds
    useEffect(() => {
        const colorInteval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);
        return () => {
            clearInterval(colorInteval);
        }
    }, []);

    return color;
}

export default useMagicColor;