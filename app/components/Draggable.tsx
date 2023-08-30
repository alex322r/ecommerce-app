'use client'
import React, { useState, useRef } from 'react';
// Estilos para el componente

const DraggableWindow = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const windowRef = useRef(null);
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        const rect = windowRef.current.getBoundingClientRect();
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y
            });
        }
    };

    return (
        <div
            ref={windowRef}
            className="w-[300px] absolute bg-white border-[1px] border-solid border-[#ccc]"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="p-[8px] bg-[#f0f0f0] cursor-move ">Arrastra esta ventana</div>
            <div className="p-[16px]">
                Contenido de la ventana...
            </div>
        </div>
    );
};

export default DraggableWindow;
