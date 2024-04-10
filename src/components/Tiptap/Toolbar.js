import {
    Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Underline, Quote, Undo, Redo, Code,
} from "lucide-react";



const Toolbar = ({ editor, content }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700">
            <div className="flex justify-start items-center gap-5 w-full lg:w10/12 flex-wrap">

                <button
                    onClick={(event) => {
                        event.preventDefault();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className={
                        editor.isActive("bold")
                            ? "bg-sky-700 text-white p-2 rounded-lg"
                            : "text-sky-400"
                    }
                >
                    <Bold className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleItalic().run();
                    }}
                    className={
                        editor.isActive("italic")
                            ? "bg-sky-700 text-white p-2 rounded-lg"
                            : "text-sky-400"
                    }
                >
                    <Italic className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleStrike().run();
                    }}
                    className={
                        editor.isActive("strike")
                            ? "bg-sky-700 text-white p-2 rounded-lg"
                            : "text-sky-400"
                    }
                >
                    <Strikethrough className="w-5 h-5" />
                </button>



            </div>

        </div>
    )
}

export default Toolbar