
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toggleAlertModal } from '../../actions/dataAction';

function AlertModal() {
    const { alertModal } = useSelector(state => state.data)
    const dispatch = useDispatch()
    const toggle = () => {
        if (alertModal.flag !== '') {
            window.location.reload()
        }
        dispatch(toggleAlertModal())
    }
    return (
        <div>
            <Modal isOpen={alertModal.state} toggle={toggle} >
                <ModalHeader toggle={toggle} style={{ color: alertModal.color }}>Alert</ModalHeader>
                <ModalBody style={{ color: alertModal.color }}>
                    {alertModal.message}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AlertModal;