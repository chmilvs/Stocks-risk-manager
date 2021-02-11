import ReactModal from 'react-modal';
import './ModalWindow.css'

function ModalWindow({open, setOpen, handleClick, text}) {
  return (
    <ReactModal 
    isOpen={open}
    contentLabel="Minimal Modal Example"
    className="Modal"
    overlayClassName="Overlay"
    onRequestClose={() => setOpen(false)}
 >
   <div>{text}</div>
   <button className="button primary small" onClick={handleClick}>Вернуться в профиль</button>
 </ReactModal>
  );
}

export default ModalWindow;
