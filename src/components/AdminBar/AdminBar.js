import Link from "next/link";
import useSWR from "swr";
import EntryForm from "../EntryForm/EntryForm";
import { useState } from "react";

export default function AdminBar({ entries }) {
    const { mutate } = useSWR("/api");
    const [isAddMode, setIsAddMode] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const response = await fetch("/api", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            await response.json();
            mutate();
            event.target.reset();
            alert("Hinzugefügt!")
        }
    };



    return (
        <>

            <div className="mt-4 ml-0 mr-0 p-8 bg-white border-4 rounded-3xl shadow-xl">


                {/* <ul className="flex space-x-4"> */}

                <Link className="font-bricolage mr-8 p-4 rounded-3xl shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out" href="http://localhost:3000/api/auth/logout">Logout</Link>

                <button onClick={() => setIsAddMode(!isAddMode)} className="font-bricolage p-4 rounded-3xl shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out">{isAddMode ? "Schließen" : "Neuer Eintrag"}</button>
                {isAddMode && <EntryForm entries={entries} onHandleSubmit={handleSubmit} />}


                {/* </ul> */}

            </div>
        </>
    );
}