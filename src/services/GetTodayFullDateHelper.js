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

// formats today in full form in german: 12. Februar 2024