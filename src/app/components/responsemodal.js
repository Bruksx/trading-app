import Modal from "react-modal";
import {FiCheckSquare} from "react-icons/fi";
import {ImCancelCircle} from "react-icons/im";
import {useState} from "react";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

export default function ResponseModal(props){
    const [openState, setOpenState] = useState(props.isOpen)
    return (
        <Modal isOpen={openState}
            style={customStyles}
            contentLabel=""
            overlayClassName="overlay"
            className="response-modal bg-custom-blue2">
                <div className="response-modal-content">
                    {props.responseState == "success"? <FiCheckSquare size={48} color="green"/> : <ImCancelCircle color="red" size={48}/>}
                    <p className="text-custom-blue3">{props.text}</p>
                    <button onClick={()=>{setOpenState(false)}} className="btn bg-custom-light-blue text-custom-blue4">OK</button>
                </div>    
        </Modal>
    )
}