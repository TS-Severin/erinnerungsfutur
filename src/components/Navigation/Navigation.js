import Link from "next/link";
import { useState } from "react";
import About from "@/pages/about";

export default function Navigation() {
    const [isUber, setIsUber] = useState(false);
    return (
        <>
            <div className=" flex items-center justify-between mt-4 ml-4 mr-4 p-8 max-sm:pt-2 max-sm:pb-2 max-sm:pl-8 max-sm:pr-8 bg-white border-4 rounded-3xl shadow-xl">

                <Link href="/" className="font-bricolage text-4xl max-sm:text-2xl">Erinnerungsfutur</Link>



                <button onClick={() => setIsUber(!isUber)} className="font-bricolage p-4 rounded-3xl active:scale-75 transition ease-in-out">{isUber ? "x" : "Über"}</button>

            </div >
            {isUber && <About />}
        </>
    );
}


