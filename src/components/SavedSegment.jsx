import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const SavedSegment = ({ imageUrl, savedPaintData }) => {
    return (
        <div>
            <h1>2. Previous Paint in Image</h1>
            <div>
                <CanvasDraw
                    className="border border-danger border-3"
                    canvasWidth={savedPaintData.width}
                    canvasHeight={savedPaintData.height}
                    imgSrc={imageUrl}
                    brushRadius={2}
                    brushColor={'rgba(255, 0, 0, 0.4)'}
                    enablePanAndZoom
                    clampLinesToDocument
                    hideGrid
                    lazyRadius={0}
                    immediateLoading={true}
                    saveData={JSON.stringify(savedPaintData)}
                />
            </div>
        </div>
    );
};

export default SavedSegment;
