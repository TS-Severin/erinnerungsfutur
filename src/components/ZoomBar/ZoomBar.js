import styles from "./ZoomBar.module.scss";
import Button from "../Button/Button";

export default function ({ handleZoomIncrease, handleZoomDecrease }) {

    // SETTING ZOOM REF
    // const handleZoomIncrease = () => {
    //     timelineZoom.current + 10;
    // }
    // const handleZoomDecrease = () => {
    //     timelineZoom.current - 10;
    // }


    return (
        <div className={styles.zoomBarContainer}><button className="font-bricolage p-2 border-4 rounded-full shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out" onClick={handleZoomDecrease}>-</button>
            <button onClick={handleZoomIncrease} className="font-bricolage p-2 border-4 rounded-full shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out"> +</button>

        </div >
    );
}