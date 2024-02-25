import GetPreviewText from "@/services/GetPreviewText";
import Link from "next/link";
import ICalDownload from "../ICalDownload/ICalDownload";

export default function TimelinePreview({ entries, previewIsClicked }) {


    // FILTER boolean array
    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    if (!clickedEntryId) {
        return (

            <h1 className="text-xl">Der Pluralistische Gedenkkalender der <Link href="https://www.dialogueperspectives.org/de/coalition-for-pluralistic-public-discourse/">CPPD</Link> umfasst erinnerungspolitische Ereignisse und stellt sie in den Kontext pluralistischen Erinnerns.</h1 >

        );
    }

    const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);

    // const { title, author, date, datestring, slug, } = clickedEntry;

    const previewText = GetPreviewText(clickedEntry.text);
    console.log(previewText);

    // console.log("TITLE", clickedEntry);



    return (
        <>
            <div className="relative">
                <h1 className="text-xl">{`${clickedEntry.datestring} -`}</h1>
                <h1 className="text-xl">{`${clickedEntry.title}`}</h1>
                <p className="pt-4">    {`${previewText} ... `}
                    <Link href={`/${clickedEntry.slug}`} className="underline">
                        weiterlesen
                    </Link></p>
                <p className="italic text-right pt-1">{clickedEntry.author}</p>
                <div className="absolute top-4 right-4">
                    <ICalDownload date={clickedEntry.date} title={clickedEntry.title} iCalSlug={clickedEntry.slug} text={clickedEntry.text} />
                </div>
            </div>
        </>
    );
}

