import React, { memo, useEffect, useState } from "react";
import { toastError } from "utils/helpers";

const ChangeQuantity = ({ quantity, setQuantity, quantityProduct, handleChangeQuantity, record }) => {

  const [quantityFunc, setQuantityFunc] = useState(quantity)

  useEffect(() => {
    if (handleChangeQuantity) {
      const timerID = setTimeout(() => {
        handleChangeQuantity({ ...record, number: quantityFunc })

      }, 1000)
      return () => {
        clearTimeout(timerID)
      }
    }


  }, [quantityFunc])


  return (
    <div className="flex col-span-3">
      <span
        onClick={() => {
          if (handleChangeQuantity) {
            if (quantityFunc === 1) {
              return
            }
            setQuantityFunc((prev) => prev - 1)

          } else {
            if (quantity === 1) {
              return
            }
            setQuantity((prev) => prev - 1)

          }


        }}

        className="px-3 border-2 cursor-pointer "
      >
        -
      </span>
      <span className="px-3 ">{handleChangeQuantity ? quantityFunc : quantity}</span>
      <span
        onClick={() => {

          if (quantity >= quantityProduct || quantityFunc >= quantityProduct) {

            toastError(`Only ${quantityProduct} products left`)
            return
          }
          // update state
          setQuantity && setQuantity((prev) => prev + 1)
          handleChangeQuantity && setQuantityFunc((prev) => prev + 1)
        }
        }
        className="px-3 border-2 cursor-pointer"
      >
        +
      </span>
    </div>
  );
};

export default memo(ChangeQuantity);
