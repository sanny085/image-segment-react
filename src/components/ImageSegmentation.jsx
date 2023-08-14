import React, { useState, useRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { MdOutlineDone } from 'react-icons/md';

const allClasses = ['Boy', 'Girl', 'Hand Bag', 'Car', 'Truck', 'Electric Pole'];

const ImageSegmentation = ({ imageUrl, onDataSave }) => {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState([]);

    const [selectedClass, setSelectedClass] = useState('Car');
    const [imageDimensions, setImageDimensions] = useState({
        width: 0,
        height: 0
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageDimensions({ width: img.width, height: img.height });
        };
        img.src = imageUrl;
        if (canvasRef.current) {
            canvasRef.current.clear();
            canvasRef.current.undo();
            setDrawing([]);
            onDataSave([]);
        }
    }, [imageUrl]);

    const handleSave = (e) => {
        e.preventDefault();
        // Check if the selectedClass is empty before proceeding
        if (!selectedClass) {
            window.alert('Please select a label before saving the segmentation.');
            if (canvasRef.current) {
                canvasRef.current.clear();
                canvasRef.current.undo();
            }
            return;
        }
        setEditing(false);
        const canvas = canvasRef.current.canvasContainer.children[1];
        const context = canvas.getContext('2d');
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

        let xValues = [];
        let yValues = [];

        // Iterate through the image data and store points of non-transparent pixels
        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const pixelIndex = (y * canvas.width + x) * 4;
                const alpha = imageData[pixelIndex + 3];
                if (alpha !== 0) {
                    xValues.push(x);
                    yValues.push(y);
                }
            }
        }

        const updatedDrawing = [
            ...drawing,
            {
                cls: selectedClass,
                brushColor: 'rgba(255, 0, 0, 0.4)',
                brushRadius: 2,
                points: [...xValues.map((x, index) => ({ x, y: yValues[index] }))],
                height: imageDimensions.height,
                width: imageDimensions.width
            }
        ];

        setDrawing(updatedDrawing);
        onDataSave(updatedDrawing);
    };

    // Handle the CanvasDraw onChange event
    const handleCanvasChange = () => {
        if (!selectedClass) {
            // Reset the canvas to its initial state if no class is selected
            if (canvasRef.current) {
                canvasRef.current.clear();
                canvasRef.current.undo();
            }
        } else {
            setEditing(true);
        }
    };

    console.log('canvasRef - ', canvasRef.current);
    console.log('drawing - ', drawing);
    console.log('selectedClass - ', selectedClass);
    console.log('imageDimensions - ', imageDimensions);

    let { height, width } = imageDimensions;
    return (
        <div>
            <h1>1. Draw Paint in Image</h1>
            {/* canvasWidth === Actual Image Width, canvasHeight === Actual Image Height  */}
            {width !== 0 && height !== 0 && (
                <CanvasDraw
                    className="border border-primary border-3"
                    ref={canvasRef}
                    canvasWidth={width}
                    canvasHeight={height}
                    imgSrc={imageUrl}
                    brushRadius={2}
                    brushColor={'rgba(255, 0, 0, 0.4)'}
                    enablePanAndZoom
                    clampLinesToDocument
                    hideGrid
                    onChange={handleCanvasChange} // Handle canvas changes
                    lazyRadius={0} // For one single point not wire
                />
            )}

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ul className="list-group">
                    {allClasses.map((className) => (
                        <li
                            style={{
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                listStyleType: 'none',
                                textAlign: 'start',
                                padding: '5px'
                            }}
                            key={className}
                        >
                            <a
                                className="list-group-item list-group-item-action"
                                href={'#/'}
                                onClick={() => setSelectedClass(className)}
                                style={{
                                    backgroundColor: selectedClass === className ? 'yellow' : ''
                                }}
                            >
                                {className}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <button className={`btn ${editing ? 'btn-primary' : 'btn-success'}`} onClick={handleSave}>
                        {editing ? (
                            <span>Save Editing</span>
                        ) : (
                            <span>
                                Updated <MdOutlineDone />
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <pre>{JSON.stringify(drawing, null, 2)}</pre>
        </div>
    );
};

export default ImageSegmentation;
