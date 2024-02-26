import Link from "next/link";

export default function Navigation() {

    return (
        <div className="flex items-center justify-between mt-4 ml-4 mr-4 p-8 bg-white border-4 rounded-3xl shadow-xl">

            <Link href="/" className="text-xl font-bold">ERINNERUNGSFUTUR</Link>
            <ul className="flex space-x-4">


            </ul>
        </div>
    );
}


// <li ><a href="#">About</a></li>