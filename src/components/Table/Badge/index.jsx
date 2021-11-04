export default function Badge({status}) {
    const statusColor = {
        "pending": "#E59849",
        "completed": "#789764",
        "canceled": "#D66D4B",
    }
    return (
        <div className="badge" style={{ "backgroundColor": statusColor[status] }} role="badge">
            {status}
        </div>
    )
}
