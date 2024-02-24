export default function getRandomPurple() {
    const baseColor = [162, 0, 254]; // Base color RGB values
    const range = 150; // Adjust the range of variation as needed

    // Generate random values within a range of the base color
    const r = Math.max(0, Math.min(255, baseColor[0] + Math.floor(Math.random() * range) - range / 2));
    const g = Math.max(0, Math.min(255, baseColor[1] + Math.floor(Math.random() * range) - range / 2));
    const b = Math.max(0, Math.min(255, baseColor[2] + Math.floor(Math.random() * range) - range / 2));

    return `rgb(${r}, ${g}, ${b})`;
}