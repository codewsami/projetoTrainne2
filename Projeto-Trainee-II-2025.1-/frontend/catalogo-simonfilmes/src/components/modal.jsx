import './styleModal.css'

function Modal(props) {
    const { isOpen, setOpenModal, children } = props;

    if (!isOpen)
        return null;

    return (
        <div className="overlay">
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default Modal