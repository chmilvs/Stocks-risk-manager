import ReactModal from 'react-modal';
import './ModalWindow.css'

function ModalWindowFalse({openFalse, setOpenFalse, handleClickFalse, text}) {
    return (
        <ReactModal
            isOpen={openFalse}
            contentLabel="Minimal Modal Example"
            className="Modal"
            overlayClassName="Overlay"
            onRequestClose={() => setOpenFalse(false)}
        >
            <div>{text}</div>
            <button className="button primary small" onClick={handleClickFalse}>ОК</button>
        </ReactModal>
    );
}

export default ModalWindowFalse;
