import Modal from "../common/Modal";

export default function LocationModal({

    location,

    isOpen,

    onClose

}){

    if(!location) return null;
    return(
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            width="500px"
        >
            <div 
                className="modal-body"
                style={{ padding: 0 }}
            >
                <div 
                    className="modal-body-title"
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        padding: '10px', 
                        background: 'var(--background-primary)'
                    }}
                >
                    <h2 style={{ color: 'white' }}>{location.city}</h2>
                </div>
                <div 
                    className="modal-body-content"
                    style={{ padding: '15px 30px' }}
                >
                    <p><strong>Sede:</strong> {location.headquarter}</p>
                    <p><strong>Regional:</strong> {location.regional}</p>
                    <p><strong>Dirección:</strong> {location.address}</p>
                </div>
            </div>
        </Modal>
    )
}