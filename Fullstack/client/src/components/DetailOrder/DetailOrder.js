import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatCreatedAt } from "utils/helpers";
import { icons } from "utils/icons";
import { Modal } from 'antd';
import { FormFeedback, TableComponent, TooltipComponent } from "components"

const DetailOrder = ({ data, status }) => {
  const { FaUserAlt, FaTruckMoving, FcFeedback } = icons;
  const [isModal, setIsModal] = useState(false)
  const [currentOrder, setCurrentOrder] = useState(null)
  const columns = [
    {
      title: "",
      dataIndex: "",
      hidden: status !== "delivered" && true,
      render: (_, record) => {


        const handleFeedback = () => {

          setIsModal(true)
          setCurrentOrder(record?.product)
        }

        return <div onClick={handleFeedback}>

          <TooltipComponent placement="topLeft" title="Feedback">
            <FcFeedback className="text-2xl cursor-pointer" />

          </TooltipComponent>
        </div>
      },
    },
    {
      title: "Image",
      dataIndex: ["product", "thump"],
      render: (text) => (
        <img
          width={50}
          src={text}
          alt=""
        />
      ),
    },
    {
      title: "Name",
      dataIndex: ["product"],
      render: (text, row) => (
        <Link
          target="_blank"
          to={`/${text?.category.toLowerCase()}/${text?._id}/${text?.title}`}
        >
          {text?.category}/ {text?.title} ({row?.color})
        </Link>
      ),
    },

    {
      title: "Price",
      dataIndex: ["product", "price"],
      render: (text) => <p>${text}</p>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total",
      dataIndex: "product",
      render: (text, { quantity }) => {
        return <p>${text?.price * quantity}</p>;
      },
    },
  ].filter(item => !item.hidden);
  return (
    <>
      <Modal
        title={<h1 className="text-2xl ">Feedback</h1>}
        centered
        open={isModal}
        onCancel={() => setIsModal(false)}
        footer={null}
        width={500}
      >
        <FormFeedback setIsModal={setIsModal} currentOrder={currentOrder} />
      </Modal>
      <div className="bg-feature flex items-center justify-between p-3">
        <h1 className="text-white text-xl">ID: {data?._id}</h1>
      </div>
      <div className="grid grid-cols-2  gap-2 mt-2">
        <div className=" shadow-lg rounded-md p-3 bg-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-feature text-hover rounded-full mr-2">
              <FaUserAlt />
            </div>
            <h3 className="font-semibold">Customer Information</h3>
          </div>
          <div>
            <p>
              {" "}
              <span className="font-semibold">Name:</span>{" "}
              {data?.address?.fullName}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Email:</span>{" "}
              {data?.address?.email}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Phone:</span>{" "}
              {data?.address?.mobile}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Address:</span>{" "}
              {data?.address?.street},{data?.address?.ward?.name},
              {data?.address?.district.name},{data?.address?.province.name}
            </p>
          </div>
        </div>
        <div className=" shadow-lg rounded-md p-3 bg-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-feature text-hover rounded-full mr-2">
              <FaTruckMoving />
            </div>
            <h3 className="font-semibold">Order Information</h3>
          </div>
          <div>
            <p>
              {" "}
              <span className="font-semibold">Created At:</span>{" "}
              {formatCreatedAt(data?.createdAt)}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Status:</span>{" "}
              {data?.status?.toUpperCase()}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Payment method:</span>{" "}
              {data?.paymentMethod}
            </p>
          </div>
        </div>

        <div className="col-span-3">
          <TableComponent
            footer={() => {
              return (
                <div className="grid grid-cols-8">
                  <div className="col-span-7"></div>
                  <div className="text-lg font-semibold">
                    {data?.discount && <p>Discount: ${data?.total}</p>}
                    <p>
                      Total: <span className="text-danger">${data?.total}</span>
                    </p>
                  </div>
                </div>
              );
            }}
            columns={columns}
            data={data?.products}
          />
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
