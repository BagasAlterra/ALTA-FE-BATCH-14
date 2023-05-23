import React, { Component } from "react";

interface ModalProps {
  id: string;
  isOpen?: boolean;
  isClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

class Modal extends Component<ModalProps> {
  render() {
    const { id, isOpen, isClose, children } = this.props;

    return (
      <>
        {isOpen ? (
          <div id={id} className="w-60 h-40" onClick={isClose}>
            <div className="bg-white rounded-md shadow-md m-10">{children}</div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Modal;
