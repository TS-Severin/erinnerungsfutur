import { Slider } from "@nextui-org/slider";

export default function ZoomBar({ handleZoomChange }) {

    const handleChange = (value) => {
        console.log("Slider value changed:", value);
        handleZoomChange(value);

    };


    return (
        <div className="flex justify-evenly w-full rounded-b-3xl bg-white border-4 p-2">



            <Slider
                color="secondary"
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