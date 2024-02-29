import React from "react"
import { useGetAllUserQuery } from "../../features/post/postApiSlice"
import { Tag } from "antd"
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
const Author = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useGetAllUserQuery()
  const [show, setShow] = useState(false)
  const userData = data && data.filter((user: any) => user.id === id)[0]
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          Author:
          <Button variant="" onClick={handleShow}>
            <Tag color="cyan">
              {data && data.filter((user: any) => user.id === id)[0].name}
            </Tag>
          </Button>
        </>
      )}

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{userData?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>email:{userData?.email}</p>
            <p>phone:{userData?.phone}</p>
            <p>website:{userData?.website}</p>

            <ul>
              <b>company</b>

              <li>
                {" "}
                <p>name:{userData?.company.name}</p>
              </li>
              <li>
                {" "}
                <p>catchPhrase:{userData?.company.catchPhrase}</p>
              </li>
              <li>
                <p>bs:{userData?.company.bs}</p>
              </li>
            </ul>
            <b>Address</b>
            <p>
              {userData?.address.street} {userData?.address.suite}{" "}
              {userData?.address.city}
            </p>

            <p>zipcode:{userData?.address.zipcode}</p>
            <p>geo lat:{userData?.address.geo.lat}</p>
            <p>geo lng:{userData?.address.geo.lng}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}

export default Author
