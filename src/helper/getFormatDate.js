export default function getFormatDate (date) {
    return new Date(date)
        .toISOString()
        .replace(/T/, ' ')
        .replaceAll('-', '/')
        .replace(/\..+/, '').slice(0, -3)
}
  