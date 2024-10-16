import React from 'react';

const ModalComponents = ({ modalClose, modal }) => {
    return (
        <div>
           <div
        className={`fixed inset-0  z-30 bg-black/50 backdrop-blur-lg 
        }`}
      ></div>
            <div className='inset-0 fixed z-40 -top-20  flex items-center justify-center '>
                <div className={`bg-white duration-500  transition-all ease-in-out ${modal ? "visible opacity-100 scale-100 " : "invisible opacity-0  scale-95"}`}>
                    <div>
                        <div className='bg-red-500 size-96'>
                            <div onClick={() => modalClose()} className='text-white text-right p-3 cursor-pointer'>x</div>  </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ModalComponents;
