export function MarketHeader({ headerInfo }) {
    return (
        <section className="market-header padding15" >
            <h1>{headerInfo.name}</h1>
            <p>{headerInfo.description}</p>
        </section>
    )
}
