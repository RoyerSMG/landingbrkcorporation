import Modal from "./common/Modal";

export default function OperationModal({
    operation,
    isOpen,
    onClose
}){
    if(!operation) return null;
    return(
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <img
                src={operation.image}
                className="modal-image"
            />
            <div className="modal-body">
                <h2>
                    {operation.title}
                </h2>
                <p>
                    {operation.description}
                </p>
                <h3>
                    Funciones
                </h3>
                <ul>
                    {
                        operation.functions.map(item=>(
                            <li key={item}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="modal-footer">
                <a
                    href={operation.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-download"
                >
                    Ver Hoja De Trabajo
                </a>
            </div>
        </Modal>

    )

}