export default function GetTodayFullDateHelper() {
const event = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const today = event.toLocaleDateString('de-DE', options);
return today
}