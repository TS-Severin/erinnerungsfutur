import styles from "./ZoomBar.module.scss";
import { Slider } from "@nextui-org/slider";

export default function ZoomBar({ handleZoomChange }) {

    const handleChange = (value) => {
        console.log("Slider value changed:", value);
        handleZoomChange(value);

    };


    return (
        <div className={styles.zoomBarContainer}>

            {/* <button className="font-bricolage p-2 border-4 rounded-full shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out" onClick={handleZoomDecrease}>-</button> */}



            {/* <button onClick={handleZoomIncrease} className="font-bricolage p-2 border-4 rounded-full shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out"> +</button> */}

            <Slider

                aria-label="zoom timeline"
                step={10}
                maxValue={1000}
                minValue={100}
                defaultValue={100}
                className="max-w-md"
                onChange={handleChange}
            />

        </div >
    );
}