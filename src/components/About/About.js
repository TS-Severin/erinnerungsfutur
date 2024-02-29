import Link from "next/link"

export default function About() {

    return (
        <div className="relative bg-white m-4 p-8 border-4 rounded-3xl shadow-xl">
            <h1 className="font-bricolage font-extralight text-2xl">Pluralistischer Gedenkkalender</h1>
            <p className="font-cormorant pt-4">Der Pluralistische Gedenkkalender ist ein Projekt von <Link href="https://www.dialogueperspectives.org/de/coalition-for-pluralistic-public-discourse/" className="underline" >CPPD</Link>. Er umfasst erinnerungspolitische Ereignisse und stellt sie in den Kontext pluralistischen Erinnerns.
                Er ergänzt die Netzwerkarbeit der CPPD als wichtigen Bestandteil und wird über das Jahr fortlaufend aktualisiert. Die Dossiers setzen sich mit erinnerungsrelevanten Ereignissen und Bezugspunkten in unserer Gesellschaft auseinander, dabei bleibt die Sammlung jedoch prozesshaft und unabgeschlossen: Viele der Beiträge verweisen zunächst auf Leerstellen im kollektiven Gedächtnis. Gleichzeitig werden die bestehenden Beiträge auch 2023 um Dossiers zu zentralen Gedenktagen und erinnerungspolitischen Ereignissen auf unserer Website ergänzt.</p>
        </div>
    )
}