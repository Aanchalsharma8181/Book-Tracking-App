import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import BookForm from './BookForm';

function BookModal({
    isModalOpen,
    setIsModalOpen,
    from,
    data,
    bookData,
    setBookData,
    id,
}) {

    const toggle = () => setIsModalOpen(!isModalOpen);
    return (
        <div>
            <Modal isOpen={isModalOpen} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle} className='text-muted'>Add Book Info</ModalHeader>
                <ModalBody>
                    <BookForm
                        from={from}
                        data={data}
                        bookData={bookData}
                        setBookData={setBookData}
                        id={id}
                        toggle={toggle}
                    />
                </ModalBody>
            </Modal>
        </div >
    );
}

export default BookModal;