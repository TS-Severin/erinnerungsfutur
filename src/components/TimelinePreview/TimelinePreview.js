export default function TimelinePreview({ entries, previewIsClicked }) {


    // FILTER boolean array


    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    if (!clickedEntryId) {
        return (
            <h1>Pluralistischer Erinnerungskalender</h1>
        );
    }


    const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);


    // console.log("TITLE", clickedEntry);


    return (
        <>
            <h1 className="font-cormorant">
                {clickedEntry.title}
            </h1>
        </>
    );
}

