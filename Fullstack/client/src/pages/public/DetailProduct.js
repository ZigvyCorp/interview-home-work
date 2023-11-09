import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { productService } from "services/productService";
import { toastError, toastSucess } from "utils/helpers";
import { userService } from "services/userService";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "redux/AsyncAction/user";
import path from "routes/path";
import { FormFeedback, RateStar, ChangeQuantity, Button, ProductSlide, Feedback, WishList } from "components";
import { Modal } from 'antd';


const DetailProduct = () => {
  const { id } = useParams();
  const [params] = useSearchParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [detailProduct, setDetailProduct] = useState({
    color: "Black",
  });
  const { currentUser } = useSelector((state) => state.userSlice);
  const [isModal, setIsModal] = useState(false)
  const [dataEdit, setDataEdit] = useState(null)
  const [selectedStar, setSelectedStar] = useState("")


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSelectColor = (e) => {
    const { value } = e.target;
    setDetailProduct({ ...detailProduct, color: value });
  };

  const handleAddtoCart = async () => {
    if (currentUser) {
      const response = await userService.handleAddToCart({
        color: detailProduct?.color,
        quantity,
        id,
      });
      if (response?.success) {
        dispatch(getCurrentUser())
        toastSucess(response?.msg);
      } else {
        toastError(response?.msg);
      }
    } else {
      toastError("Please login!");
      navigate(`/${path.LOGIN}`)
    }

  };

  const fechProduct = async () => {
    const response = await productService.handleGetProduct(id);
    setProduct(response?.product);
  };

  const fetchRelatedProducts = async () => {
    const response = await productService.handleGetAllProducts({
      brand: product?.brand,
    });
    setRelatedProduct(response?.products);
  };

  const fetchFeedback = async (params) => {
    const response = await productService.handleGetFeedbacks(params);
    if (response?.success) {
      setFeedback(response)
    }
  }

  useEffect(() => {
    if (id) {
      fechProduct();
      setDetailProduct({
        color: "Black",
      });
    }
  }, [id]);

  useEffect(() => {
    product && fetchRelatedProducts();
  }, [product]);


  useEffect(() => {
    const param = [];

    for (let i of params.entries()) param.push(i);
    const queries = {};

    for (let i of param) queries[i[0]] = i[1];
    queries.limit = 5
    if (selectedStar) {

      queries.star = selectedStar
    }

    fetchFeedback({ ...queries, sort: "-createdAt", product: id })
  }, [id, params, selectedStar])

  return (
    <div className="w-full ">
      <Modal
        title={<h1 className="text-2xl ">Feedback</h1>}
        centered
        open={isModal}
        onCancel={() => setIsModal(false)}
        footer={null}
        width={500}
      >
        <FormFeedback fechData={() => {
          fetchFeedback({ sort: "-createdAt", product: id, limit: 5 })
          fechProduct()
        }}
          setIsModal={setIsModal}
          currentOrder={product}
          dataEdit={dataEdit}
        />
      </Modal>
      <div className="grid grid-cols-2 bg-sub py-5">
        <div className="flex justify-center items-center border-2 mx-3">
          <img
            className="w-[50%] object-cover my-0 mx-auto"
            src={`${product?.thump}`}
            alt=""
          />
        </div>
        <div className="px-3 relative">
          <WishList productID={product?._id} />
          <h1 className="text-2xl font-semibold mb-2">{product?.title}</h1>
          <div className="flex">
            <p className="text-sub text-sm">
              Brand: <span className="text-main ">{product?.brand}</span>
              <span className="mx-2">|</span>
            </p>
            <p className="text-sub text-sm">
              Sold: <span className="text-main ">{product?.sold}</span>
              <span className="mx-2">|</span>
            </p>
            <p className="text-sub text-sm">
              Status:{" "}
              {product?.quantity > 0 ? (
                <>
                  <span className="bg-feature text-hover p-1 rounded font-semibold">
                    Stocking
                  </span>
                  <span className="ml-1">({product?.quantity})</span>
                </>
              ) : (
                <span className="bg-danger text-hover p-1 rounded font-semibold">
                  Sold out
                </span>
              )}
            </p>
          </div>
          {product && (
            <div className="my-2">
              <RateStar disabled={true} value={product?.totalRatings} />
            </div>
          )}
          <p className="text-lg font-semibold text-feature">
            ${product?.price}
          </p>
          <div
            className="my-8"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />

          <div className="grid grid-cols-4 mb-5">
            <b>Color</b>
            <div className="col-span-3 flex">
              {product?.color?.map((el) => (
                <div key={el}>
                  <input
                    onChange={handleSelectColor}
                    className="hidden"
                    type="radio"
                    value={el}
                    name="color"
                    id={el}
                  />
                  <label
                    className={`${detailProduct?.color === el && "border-sub text-main"
                      } border-2 p-2 mr-3 rounded-md cursor-pointer`}
                    htmlFor={el}
                  >
                    {el}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {product?.quantity > 0 && (
            <>
              <div className="grid grid-cols-4">
                <b>Quantity</b>
                <ChangeQuantity
                  quantityProduct={product?.quantity}
                  setQuantity={setQuantity}
                  quantity={quantity}
                />
              </div>
              <div className="flex items-center gap-3">
                <Button
                  name="Buy now"
                  handleOnclick={() => {
                    navigate(`/${path.CART}`)
                    handleAddtoCart()
                  }}
                />
                <Button
                  className="border-2 border-sub text-main p-2 w-full rounded-md mt-5 flex items-center justify-center"
                  name="Add to cart"
                  handleOnclick={handleAddtoCart}

                />

              </div>

            </>
          )}
        </div>
      </div>
      <Feedback count={feedback?.count} selectedStar={selectedStar} setSelectedStar={setSelectedStar} setIsModal={setIsModal} feedback={feedback} setDataEdit={setDataEdit} />
      <div className="bg-sub mt-5 p-5">
        <h1 className="text-xl">OTHER CUSTOMERS ALSO BUY</h1>
        <div>
          <ProductSlide dataSlider={relatedProduct} normal={true} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
