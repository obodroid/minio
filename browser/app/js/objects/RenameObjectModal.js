import React from "react"
import { Modal, ModalHeader, ModalBody } from "react-bootstrap"
import action from "../../js/browser/actions"


export class RenameObjectModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            objectName: this.props.object.name
        }
    }

    submit() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "bucketName":"doctor-a",
                "oldObjectName":"test2.xml",
                "newObjectName":"test3.xml" 
            })
        };
        fetch('http://localhost.typicode.com/bucket/rename-object', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    render() {
        const { hideRenameObjectModal, object } = this.props
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
                                id="objectName"
                                type="text"
                                value={this.state.objectName}
                                onChange={(e) => { this.setState({ objectName: e.target.value }) }}
                            />
                        </div>
                    </div>

                </ModalBody>
                <div className="modal-footer">

                    <button onClick={this.submit} className="btn btn-success">Rename</button>

                    <button className="btn btn-link" onClick={hideRenameObjectModal}>
                        Cancel
                    </button>
                </div>
            </Modal>
        )
    }
}


export default (RenameObjectModal)