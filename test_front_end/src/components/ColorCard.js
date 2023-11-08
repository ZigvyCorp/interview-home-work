export default function ColorCard({color, title}) {
    return(
        <p className={`${color} border border-primary rounded bg-primary d-inline-flex px-2 me-2`}>{title}</p>
    )
}