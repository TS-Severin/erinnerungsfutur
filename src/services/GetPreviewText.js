export default function GetPreviewText(text) {
    // Split the text into words
    const words = text.split(/\s+/);

    // Take the first 150 words
    const previewWords = words.slice(0, 20);

    // Join the words back into a string
    const previewText = previewWords.join(' ');

    return previewText;
}