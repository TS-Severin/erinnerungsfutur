'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import { useEffect } from 'react'

const Tiptap = ({ handleTiptapText, tiptapText }) => {

    const handleUpdate = ({ editor }) => {
        const htmlContent = editor.getHTML();
        handleTiptapText(htmlContent); // Pass the updated content to the parent component
    };



    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        editorProps: {
            attributes: {
                class:
                    "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none"
            },

        },

        onUpdate: handleUpdate,
        content: `${tiptapText !== undefined ? tiptapText : 'Neuer Eintrag'}`,

    });

    if (!editor) {
        return null;
    }


    return (
        <div className="w-full px-4">
            <Toolbar editor={editor} />
            <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
        </div>
    )
}

export default Tiptap




// 'use client'

// import { Color } from '@tiptap/extension-color'
// import ListItem from '@tiptap/extension-list-item'
// import TextStyle from '@tiptap/extension-text-style'
// import { EditorProvider, useCurrentEditor } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import React from 'react'

// const MenuBar = () => {
//     const { editor } = useCurrentEditor()

//     if (!editor) {
//         return null
//     }

//     return (
//         <>
//             <button
//                 onClick={() => editor.chain().focus().toggleBold().run()}
//                 disabled={
//                     !editor.can()
//                         .chain()
//                         .focus()
//                         .toggleBold()
//                         .run()
//                 }
//                 className={editor.isActive('bold') ? 'is-active' : ''}
//             >
//                 bold
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleItalic().run()}
//                 disabled={
//                     !editor.can()
//                         .chain()
//                         .focus()
//                         .toggleItalic()
//                         .run()
//                 }
//                 className={editor.isActive('italic') ? 'is-active' : ''}
//             >
//                 italic
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleStrike().run()}
//                 disabled={
//                     !editor.can()
//                         .chain()
//                         .focus()
//                         .toggleStrike()
//                         .run()
//                 }
//                 className={editor.isActive('strike') ? 'is-active' : ''}
//             >
//                 strike
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleCode().run()}
//                 disabled={
//                     !editor.can()
//                         .chain()
//                         .focus()
//                         .toggleCode()
//                         .run()
//                 }
//                 className={editor.isActive('code') ? 'is-active' : ''}
//             >
//                 code
//             </button>
//             <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
//                 clear marks
//             </button>
//             <button onClick={() => editor.chain().focus().clearNodes().run()}>
//                 clear nodes
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().setParagraph().run()}
//                 className={editor.isActive('paragraph') ? 'is-active' : ''}
//             >
//                 paragraph
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//                 className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
//             >
//                 h1
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//                 className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
//             >
//                 h2
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//                 className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
//             >
//                 h3
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
//                 className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
//             >
//                 h4
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
//                 className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
//             >
//                 h5
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
//                 className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
//             >
//                 h6
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleBulletList().run()}
//                 className={editor.isActive('bulletList') ? 'is-active' : ''}
//             >
//                 bullet list
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleOrderedList().run()}
//                 className={editor.isActive('orderedList') ? 'is-active' : ''}
//             >
//                 ordered list
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//                 className={editor.isActive('codeBlock') ? 'is-active' : ''}
//             >
//                 code block
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleBlockquote().run()}
//                 className={editor.isActive('blockquote') ? 'is-active' : ''}
//             >
//                 blockquote
//             </button>
//             <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
//                 horizontal rule
//             </button>
//             <button onClick={() => editor.chain().focus().setHardBreak().run()}>
//                 hard break
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().undo().run()}
//                 disabled={
//                     !editor.can()
//                         .chain()
//                         .focus()
//                         .undo()
//                         .run()
//                 }
//             >
//                 undo
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().redo().run()}
//                 disabled={
//                     !editor.can()
//                         .chain()
//                         .focus()
//                         .redo()
//                         .run()
//                 }
//             >
//                 redo
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().setColor('#958DF1').run()}
//                 className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
//             >
//                 purple
//             </button>
//         </>
//     )
// }

// const extensions = [
//     Color.configure({ types: [TextStyle.name, ListItem.name] }),
//     TextStyle.configure({ types: [ListItem.name] }),
//     StarterKit.configure({
//         bulletList: {
//             keepMarks: true,
//             keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//         },
//         orderedList: {
//             keepMarks: true,
//             keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//         },
//     }),
// ]

// const content = `
// {entries.text}
// `

// export default ({ entries }) => {

//     const { date, slug, datestring, title, author, text } = entries;

//     return (
//         <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={entries.text} ></EditorProvider>
//     )
// }



