import {
    Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Underline, Quote, Undo, Redo, Code, Heading,
} from "lucide-react";



const Toolbar = ({ editor, content }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700">
            <div className="flex justify-start items-center gap-5 w-full lg:w10/12 flex-wrap">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className={
                        editor.isActive("bold")
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg"
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
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : " p-1 rounded-lg"
                    }
                >
                    <Italic className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleUnderline().run();
                    }}
                    className={
                        editor.isActive("underline")
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg"
                    }
                >
                    <Underline className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleStrike().run();
                    }}
                    className={
                        editor.isActive("strike")
                            ? "fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg"
                    }
                >
                    <Strikethrough className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level: 2 }).run();
                    }}
                    className={
                        editor.isActive("heading", { level: 2 })
                            ? "fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg"
                    }
                >
                    <Heading2 className="w-5 h-5" />
                </button>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBulletList().run();
                    }}
                    className={
                        editor.isActive("bulletList")
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg"
                    }
                >
                    <List className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleOrderedList().run();
                    }}
                    className={
                        editor.isActive("orderedList")
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg"
                    }
                >
                    <ListOrdered className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBlockquote().run();
                    }}
                    className={
                        editor.isActive("blockquote")
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg"
                    }
                >
                    <Quote className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleCode().run();
                    }}
                    className={
                        editor.isActive("code")
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg"
                    }
                >
                    <Code className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().undo().run();
                    }}
                    className={
                        editor.isActive("undo")
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
                    }
                >
                    <Undo className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().redo().run();
                    }}
                    className={
                        editor.isActive("redo")
                            ? "bg-fuchsia-300 text-white p-1 rounded-lg"
                            : "p-1 rounded-lg hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
                    }
                >
                    <Redo className="w-5 h-5" />
                </button>

            </div>

        </div>
    )
}

export default Toolbar