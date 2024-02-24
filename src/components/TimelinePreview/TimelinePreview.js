import GetPreviewText from "@/services/GetPreviewText";
import Link from "next/link";

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

    const previewText = GetPreviewText(clickedEntry.text);
    console.log(previewText);

    // console.log("TITLE", clickedEntry);



    return (
        <>


            <h1 className="text-xl">{`${clickedEntry.datestring} -`}</h1>



            <h1 className="text-xl">{`${clickedEntry.title}`}</h1>




            <p className="pt-4">    {`${previewText} ... `}
                <Link href={`/${clickedEntry.slug}`} className="underline">
                    weiterlesen
                </Link></p>

            <p className="italic text-right pt-1">{clickedEntry.author}</p>
        </>
    );
}

