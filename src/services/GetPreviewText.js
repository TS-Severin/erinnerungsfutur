export default function GetPreviewText(text) {
    // Split the text into words
    const words = text.split(/\s+/);

    // first words number
    const previewWords = words.slice(0, 10);

    // Join the words back into a string
    const previewText = previewWords.join(' ');

    return previewText;
}