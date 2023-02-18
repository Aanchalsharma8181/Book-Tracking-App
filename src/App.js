import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import BookCard from "./components/Common/BookCard";
import Header from "./components/Common/Header";
import LoadingSpinner from "./components/Common/LoadingSpinner";
import BooksData from "./constants/bookData";



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  const [bookData, setBookData] = useState(BooksData);

  return (
    <>
      <Header setBookData={setBookData} bookData={bookData} />
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px"
      }}>

        {
          isLoading && <div style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            zIndex: 1
          }}>
            <LoadingSpinner />
          </div>
        }

        {
          !isLoading && <Row className="m-5">
            {
              (bookData || []).map((item, index) => {
                return (
                  <>
                    <Col xl="3">
                      <BookCard data={item} setBookData={setBookData} bookData={bookData} id={index} />
                    </Col>
                  </>
                )
              })
            }
          </Row>
        }

      </div>
    </>
  )
}