
export default function ColorCard({color, title}) {
    return(
        <p className={`text-${color}-dark border border-${color}-dark rounded bg-${color} d-inline-flex px-2 me-2 h6 small fw-normal`}>{title}</p>
    )
}