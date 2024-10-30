import { Dialog } from "@headlessui/react";
import React from "react";
import ModalWrapper from "../ModalWrapper";

const AddTask = ({ open, setOpen }) => {

    
  return (
  <>
  <ModalWrapper open={open} setOpen={setOpen}>
  <form onSubmit={handleSubmit(submitHandler)}>
  <DialogTitle
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'
          >
            {task ? "UPDATE TASK" : "ADD TASK"}
          </DialogTitle>
    </form>
  </ModalWrapper>
  </>
)
};

export default AddTask;
