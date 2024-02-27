import Link from "next/link";
import useSWR from "swr";
import EntryForm from "../EntryForm/EntryForm";

export default function AdminBar({ entries }) {
    const { mutate } = useSWR("/api");

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
        }
    };



    return (
        <>

            <div className="items-center justify-between mt-4 ml-0 mr-0 p-8 bg-white border-4 rounded-3xl shadow-xl">


                <ul className="flex space-x-4">
                    <Link href="http://localhost:3000/api/auth/logout">Logout</Link>

                </ul>

            </div>
            <EntryForm entries={entries} onHandleSubmit={handleSubmit} />
        </>
    );
}