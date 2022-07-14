import { FC, useContext } from "react";
import { Modal } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const ModalWindow: FC = () => {
  const { store } = useContext(Context);

  const handleShow = () => {
    store.setError(false);
  };

  return (
    <Modal
      size="sm"
      show={store.isError}
      onHide={handleShow}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">Error</Modal.Title>
      </Modal.Header>

      <Modal.Body>Invalid login or password</Modal.Body>
    </Modal>
  );
};

export default observer(ModalWindow);
