import styles from "./ZoomBar.module.scss";

export default function ({ handleZoomIncrease, handleZoomDecrease }) {

    // SETTING ZOOM REF
    // const handleZoomIncrease = () => {
    //     timelineZoom.current + 10;
    // }
    // const handleZoomDecrease = () => {
    //     timelineZoom.current - 10;
    // }


    return (
        <div className={styles.zoomBarContainer}><button onClick={handleZoomDecrease} className="text-2xl">-</button>
            <button onClick={handleZoomIncrease} className="text-2xl">+</button>

        </div>
    );
}