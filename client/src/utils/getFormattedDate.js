export default function getFormattedDate(date) {
  return new Date(Date.parse(date)).toLocaleDateString('en-US', {
    dateStyle: 'long'
  });
}