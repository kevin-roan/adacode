import { createPortal } from "react-dom";

function Popup({ onClose }) {
  return <>{createPortal(<ModalContent onClose={onClose} />, document.body)}</>;
}

export default Popup;

const ModalContent = ({ onClose }) => (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-header">
        <h2>Fill this form to get Course Details</h2>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className="modal-body">
        <input
          type="text"
          name="username"
          placeholder="Enter Your Name:"
          required
        />
        <input
          type="tel"
          name="phonenumber"
          placeholder="Enter Your Phonenumber:"
          required
        />
        <button className="button_light">Download Pdf</button>
      </div>
    </div>
  </div>
);
