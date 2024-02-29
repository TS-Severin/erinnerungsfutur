import Link from "next/link";

export default function Navigation() {

    return (
        <div className="flex items-center justify-between mt-4 ml-4 mr-4 p-8 bg-white border-4 rounded-3xl shadow-xl">

            <Link href="/" className="font-bricolage text-4xl max-sm:text-2xl">Erinnerungsfutur</Link>
            <ul className="flex space-x-4">
                <Link href="/about"><li className="font-bricolage">Über</li></Link>

            </ul>
        </div >
    );
}


// <li ><a href="#">About</a></li>