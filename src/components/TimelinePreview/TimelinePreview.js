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

            <h1 className="font-bricolage text-xl">Der Pluralistische Gedenkkalender der <Link href="https://www.dialogueperspectives.org/de/coalition-for-pluralistic-public-discourse/">CPPD</Link> umfasst erinnerungspolitische Ereignisse und stellt sie in den Kontext pluralistischen Erinnerns.</h1 >

        );
    }

    const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);

    if (!clickedEntry) {
        return null
    }

    // const { title, author, date, datestring, slug, } = clickedEntry;
    // console.log("error clickedentryid:", clickedEntryId, entries);
    const previewText = GetPreviewText(clickedEntry.text);
    // console.log(previewText);

    // console.log("TITLE", clickedEntry);

    // const previewTextMarkup = dangerouslySetInnerHTML = { createMarkup(text) };

    return (
        <>
            <div className="relative">
                <h1 className="font-bricolage font-extralight text-2xl">{`${clickedEntry.datestring}`}</h1>
                <h1 className="font-bricolage font-extralight text-2xl pt-4">{`${clickedEntry.title}`}</h1>
                <p className="font-cormorant pt-4">
                    {`${previewText} ... `}
                    <Link href={`/${clickedEntry.slug}`} className="font-cormorant underline">
                        weiterlesen
                    </Link></p>
                <p className="font-cormorant italic text-right pt-1">{clickedEntry.author}</p>
                <div className="absolute top-0 right-0">
                    <ICalDownload date={clickedEntry.date} title={clickedEntry.title} iCalSlug={clickedEntry.slug} text={clickedEntry.text} />
                </div>
            </div>
        </>
    );
}

