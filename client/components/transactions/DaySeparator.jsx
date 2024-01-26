export default function DaySeparatorTransaction({children, whatday}) {
    return <div>
        <div>
            <h1>{whatday}</h1>
        </div>
        <div>
            {children}
        </div>
    </div>
}