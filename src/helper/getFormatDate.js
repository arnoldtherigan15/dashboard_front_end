export default function getFormatDate (date) {
    return date
        .replaceAll('-', '/')
        .replace(/\..+/, '').slice(0, -3)
}
  