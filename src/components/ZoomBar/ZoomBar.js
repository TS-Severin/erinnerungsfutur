import styles from "./ZoomBar.module.scss";

export default function ZoomBar({ handleZoomIncrease, handleZoomDecrease }) {



    return (
        <div className={styles.zoomBarContainer}><button className="font-bricolage p-2 border-4 rounded-full shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out" onClick={handleZoomDecrease}>-</button>
            <button onClick={handleZoomIncrease} className="font-bricolage p-2 border-4 rounded-full shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out"> +</button>

        </div >
    );
}