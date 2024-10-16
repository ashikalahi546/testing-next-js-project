"use client"
import React, { useState } from 'react';
import ModalComponents from './ModalComponents';

const Modal = () => {

    const [modal, setModal] = useState(false);
    const [visible,setVisible] = useState(false);

    const modalOpen =()=>{
        setModal(true)    
    setVisible(true)
    }
    const modalClose = () => {
             setModal(false)
             setTimeout(()=>{
                setVisible(false)
             },300)
    }
    return (
        <div className='flex flex-col items-center justify-center gap-8 mt-4 relative'>
            <button className='bg-blue-600 text-white rounded-md px-8 py-3 z-50 mt-40' onClick={() => modalOpen(!modal)}>click</button>
            {visible &&    <ModalComponents modalClose={modalClose}  modal={modal}/> }
        </div>
    );
};

export default Modal;
