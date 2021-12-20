import React from "react";

// declare the modal function
const Modal = ({ onClose, currentPhoto }) => {
    //deconstruct props into currentPhoto in the modal paramater
    //destructure currentPhoto properties into constants to assign their values into the modal
    const { name, category, description, index } = currentPhoto;


    return (
        // JSX
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name} </h3>
                <img
                    src={require(`../../assets/large/${category}/${index}.jpg`).default}
                    alt="current category"
                />
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;