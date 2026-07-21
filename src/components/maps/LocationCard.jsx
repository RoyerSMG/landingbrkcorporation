export default function LocationCard({ location }) {

    if (!location) return null;

    return (
        <div className="location-card">
            <h2>{location.city}</h2>
            <p>{location.description}</p>
            <h3>Operaciones</h3>
            <ul>
                {location.operations.map(op => (
                    <li key={op}>{op}</li>
                ))}
            </ul>
        </div>
    );
}