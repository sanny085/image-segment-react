import React, { useState, Fragment } from 'react';

import ImageSegmentation from '../components/ImageSegmentation.jsx';
import SavedSegment from '../components/SavedSegment.jsx';

import imagePath from '../assets/image.jpg';

const savedPaintData = {
    lines: [
        {
            points: [
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.2734375,
                    y: 71.46875
                },
                {
                    x: 139.759233872148,
                    y: 73.1520291144341
                },
                {
                    x: 140.09586956895603,
                    y: 74.38565156152042
                },
                {
                    x: 140.44957869176235,
                    y: 75.69623243615493
                },
                {
                    x: 140.69020340324613,
                    y: 76.58045327662863
                },
                {
                    x: 140.74710788602846,
                    y: 76.79160529234896
                },
                {
                    x: 140.99141056886302,
                    y: 77.70089417800801
                },
                {
                    x: 141.04768915124885,
                    y: 77.91240927090129
                },
                {
                    x: 141.04768915124885,
                    y: 77.91240927090129
                }
            ],
            brushColor: 'rgba(173, 75, 163, 0.5)',
            brushRadius: 2,
            cls: 'Car'
        },
        {
            points: [
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                },
                {
                    x: 172.78125,
                    y: 63.24609375
                }
            ],
            brushColor: 'rgba(123, 185, 163, 0.5)',
            brushRadius: 2,
            cls: 'Car'
        }
    ],
    width: 1280,
    height: 720
};

const TasksPage = () => {
    const [savedData, setSavedData] = useState(savedPaintData);
    const onhandleSaveSegmentation = (data) => {
        console.log('Segmented Area Data - ', data);

        let savedPaintData = {
            lines: [...data],
            width: data[0].width,
            height: data[0].height
        };

        setSavedData(savedPaintData);
    };
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        {/* (Forward Track) -> Image Segmentation - Semantic*/}
                        <ImageSegmentation imageUrl={imagePath} onDataSave={onhandleSaveSegmentation} />
                    </div>
                    <div className="col-md-6">
                        {/* (Reverse Way) -> Image Segmentation - Semantic*/}
                        <SavedSegment imageUrl={imagePath} savedPaintData={savedData} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TasksPage;
