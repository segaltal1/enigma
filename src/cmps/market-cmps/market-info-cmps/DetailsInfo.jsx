export function DetailsInfo({ label, info }) {
    return (
        <>
            <span className="details-info-label">
                {label}
            </span>
            <p className="card-row">
                {info}
            </p>
        </>
    )
}
