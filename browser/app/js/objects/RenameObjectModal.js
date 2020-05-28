import React from "react"
import { Modal, ModalHeader, ModalBody } from "react-bootstrap"


export class RenameObjectModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { hideRenameObjectModal } = this.props
        return (
            <Modal
                show={true}
                animation={false}
                onHide={hideRenameObjectModal}
                bsSize="small"
            >

                <ModalHeader>Rename Object</ModalHeader>
                <ModalBody>
                    <div >
                        <div className="input-group copy-text">
                            <label>Rename</label>
                            <input
                                type="text"
                            />
                        </div>
                    </div>
                        
                </ModalBody>
                    <div className="modal-footer">

                        <button className="btn btn-success">Rename</button>

                        <button className="btn btn-link" onClick={hideRenameObjectModal}>
                            Cancel
                    </button>
                    </div>
            </Modal>
                )
            }
        }
        

export default (RenameObjectModal)