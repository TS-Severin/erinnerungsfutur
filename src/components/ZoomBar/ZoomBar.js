import styles from "./ZoomBar.module.scss";

export default function ({ timelineZoom }) {

    // SETTING ZOOM REF
    const handleZoomIncrease = () => {
        setTimelineZoom(prevZoom => prevZoom + 10);
    }
    const handleZoomDecrease = () => {
        setTimelineZoom(prevZoom => prevZoom - 10);
    }

    return (
        <div className={styles.zoomBarContainer}>
            <button onClick={handleZoomIncrease} className="text-2xl">+</button>
            <button onClick={handleZoomDecrease} className="text-2xl">-</button>
        </div>
    );
}
