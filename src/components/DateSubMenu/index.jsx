import './index.css'
export default function DateSubMenu() {
    const currentDate = new Date()

    function getDate(currentDate) {
        const month = currentDate.toLocaleString('default', { month: 'long' })
        const year = currentDate.getFullYear()
        const date = currentDate.getDate()
        return `${date} ${month} ${year}`
    }

    return (
        <div className="date-sub-menu">
            <p>{ getDate(currentDate) }</p>
        </div>
    )
}
