export default function OperationCard({ operation, onDetail }) {

    return (

        <div className="operation-card">
            <div className="operation-card-img">
                <img
                    src={operation.image}
                    alt={operation.title}
                />
            </div>

            <div className="operation-card-content">
                <h3>{operation.title}</h3>

                <p>{operation.shortDescription}</p>

                <button
                    className="btn-detalle"
                    onClick={() => onDetail(operation)}
                >
                    Ver más
                </button>
            </div>
        </div>
    );

}