import { React } from "react";
import { Button, Modal } from "react-bootstrap";


const ModalShowMobileAds = ({ show, onHide, mobileAds }) => {

    console.log(mobileAds);
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Täze mobil reklama goşmak
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="h-100 text-center">
                <img src={`${process.env.REACT_APP_API_URL}api/static/${mobileAds?.mobileImg}`} alt=""/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalShowMobileAds;
