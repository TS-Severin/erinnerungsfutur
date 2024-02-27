export default function EntryForm({ onHandleSubmit }) {




    return (
        <>
            <div className="items-center justify-between mt-4 ml-0 mr-0 p-8 bg-white border-4 rounded-3xl shadow-xl">
                <form className="flex flex-col" onSubmit={(event) => onHandleSubmit(event)}>
                    <h1 className="font-bold">
                        Neuer Eintrag
                    </h1>
                    <label htmlFor="date">
                        date:
                        <input placeholder="jjjj-mm-tt" type="text" id="date" name="date" required />
                    </label>

                    <label htmlFor="slug">
                        slug:
                        <input placeholder="titel-des-eintrags" type="text" id="slug" name="slug" required />
                    </label>

                    <label htmlFor="datestring">
                        datestring:
                        <input placeholder="Tag. Monat, z. B.: 26. März" type="text" id="datestring" name="datestring" required />
                    </label>


                    <label htmlFor="title">
                        title:
                        <input placeholder="Titel des Ereignisses" type="text" id="title" name="title" required />
                    </label>

                    <label htmlFor="author">
                        author:
                        <input placeholder="Vorname Nachname" type="text" id="autor" name="autor" required />
                    </label>

                    <label htmlFor="textarea">
                        text:</label>
                    <textarea rows="5" cols="33" placeholder="kompletter Text" id="text" name="text" required />


                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}