import React, { useState } from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import BookModal from '../Core/BookModal'
export default function BookCard({
    data,
    bookData,
    setBookData,
    id
}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <BookModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} data={data} from="info" setBookData={setBookData} bookData={bookData} id={id} />
            <Card className='mb-2'>
                <CardImg
                    alt="Card image cap"
                    src={data?.image}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5" className='text-muted'>
                        {data?.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Author {data?.author}
                    </CardSubtitle>
                    <CardText className='text-muted' tag="p">
                        {`${(data?.description || '').length > 200 ? (data?.description || '').substr(0, 200) : data?.description}...`}
                    </CardText>
                    <Button onClick={() => setIsModalOpen(true)}>
                        Open Info
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}
