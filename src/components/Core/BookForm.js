import React, { useEffect, useState } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import BooksData from '../../constants/bookData';

export default function BookForm({
    data,
    from,
    bookData,
    setBookData,
    id,
    toggle
}) {

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [desc, setDesc] = useState('');


    useEffect(() => {
        if (from === "info") {
            setName(data?.name);
            setAuthor(data?.author);
            setDesc(data?.description)
        }
    }, []);


    const UpdateData = () => {
        const updatedArr = (bookData || []).map((item, index) => {
            if (index === id) {
                item = {
                    id: id,
                    name: name,
                    author: author,
                    description: desc,
                    image: "https://source.unsplash.com/random/300x300"
                }
                return item
            }
            else {
                return item;
            }
        });
        setBookData(updatedArr);
    };

    const CreateData = () => {
        const tempData = {
            id: 100,
            name: name,
            author: author,
            description: desc,
            image: "https://source.unsplash.com/random/300x300"
        };
        setBookData([...bookData, tempData]);
    };

    return (
        <div>
            <Row>
                <Col>
                    <FormGroup>
                        <Label className='text-muted'>
                            Name of Book
                        </Label>
                        <Input
                            name="bookName"
                            placeholder="Book Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup>
                        <Label className='text-muted'>
                            Author of Book
                        </Label>
                        <Input
                            name="author"
                            placeholder="Author Name"
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormGroup>
                        <Label className='text-muted'>
                            Book Description
                        </Label>
                        <textarea
                            class="form-control"
                            rows="6"
                            name="bookName"
                            placeholder="Book Name"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </FormGroup>
                </Col>

            </Row>
            <Row>
                <Col>
                    <Button color="primary" onClick={() => {
                        toggle();
                        from === "info" ? UpdateData() : CreateData();
                    }
                    }>
                        {from === "info" ? "Update Book" : "Add Book"}
                    </Button>{' '}
                    <Button color="secondary" >
                        Cancel
                    </Button>
                </Col>
            </Row>
        </div >
    )
}
