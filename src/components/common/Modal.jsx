export default function Modal({
    isOpen,
    onClose,
    children,
    width = "700px"
}) {
    if (!isOpen) return null;
    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal-container"
                style={{ maxWidth: width }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );

}