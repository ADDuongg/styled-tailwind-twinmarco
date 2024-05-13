import React from 'react';

const ModalHeader = (props) => {
   
    const { toggleModal, menuItem } = props.data
    
    return (
        <div className="modalHeader">
            <div>
                {menuItem?.map((item, index) => (
                    <div key={index} className="item-modal">{item} </div>
                ))}

            </div>
            <button className="btnX" onClick={toggleModal}><i className="fa-solid fa-x"></i></button>
        </div>
    );
}

export default ModalHeader;
