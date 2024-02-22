export default function TimelinePreview({ entries, previewIsClicked }) {

    console.log("vorschau: ", entries);
    console.log("boolean array", previewIsClicked);
    // FILTER boolean array


    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    if (!clickedEntryId) {
        return null;
    }

    // console.log("Object mit Id vom Datum", clickedEntryId.id);
    const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);
    console.log("mein vorschaueintrag", clickedEntry?.title);





    return (

        <h1>{clickedEntry?.title}</h1>
    );
}

