import { useState } from "react";
import Tiptap from "../Tiptap/Tiptap";

export default function EntryForm({ onHandleSubmit, update, entries }) {

    const { date, slug, datestring, title, author, text } = entries;


    const [tiptapText, setTiptapText] = useState(entries.text);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Construct the entry object with all form data including Tiptap text
        const entry = {
            ...entries,
            text: tiptapText // Use Tiptap text as part of the entry
        };

        // Call the onSubmit handler with the constructed entry object

        onHandleSubmit(entry);
    };



    return (
        <>
            <div className="items-center justify-between mt-4 ml-0 mr-0 mb-8 p-8 bg-white border-4 rounded-3xl shadow-xl">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <h1 className="font-bricolage mb-4 text-xl">
                        {update ? "Eintrag bearbeiten" : "Neuer Eintrag"}
                    </h1>
                    <label htmlFor="date" className="font-bricolage mb-2 mt-2">
                        Datum für Position in der Timeline:</label>
                    <input style={{ width: 'fit-content' }} type="date" id="date" name="date" required defaultValue={entries.date}
                        placeholder="jjjj-mm-tt" autoFocus />


                    <label htmlFor="slug" className="font-bricolage mb-2 mt-2">
                        Slug:</label>
                    <input style={{ width: 'fit-content' }} type="text" id="slug" name="slug" required
                        defaultValue={entries.slug}
                        placeholder="titel-des-eintrags" className="w-auto" />


                    <label htmlFor="datestring" className="font-bricolage mb-2 mt-2">
                        Datum wie es angezeigt wird:</label>
                    <input style={{ width: 'fit-content' }} type="text" id="datestring" name="datestring" required
                        defaultValue={entries.datestring}
                        placeholder="Tag. Monat, z. B.: 26. März" />



                    <label htmlFor="title" className="font-bricolage mb-2 mt-2">
                        Titel:</label>
                    <input style={{ width: 'fit-content' }} type="text" id="title" name="title" required
                        defaultValue={entries.title}
                        placeholder="Titel des Ereignisses" />


                    <label htmlFor="author" className="font-bricolage mb-2 mt-2">
                        Autor:in:</label>
                    <input style={{ width: 'fit-content' }} type="text" id="author" name="author" required
                        defaultValue={entries.author}
                        placeholder="Vorname Nachname" />


                    <label htmlFor="text" className="font-bricolage mb-2 mt-2">
                        Text:</label>
                    <textarea rows="20" cols="33" id="text" name="text" required
                        defaultValue={entries.text}
                        placeholder="kompletter Text" />

                    <Tiptap
                        handleTiptapText={setTiptapText} // Pass setter function for Tiptap text
                        tiptapText={tiptapText} // Pass current Tiptap text state
                    />


                    <button type="submit" className="font-bricolage p-4 rounded-3xl shadow-md hover:bg-fuchsia-300 hover:shadow-inner active:scale-75 transition ease-in-out">Speichern</button>
                </form>
            </div>
        </>
    );
}


