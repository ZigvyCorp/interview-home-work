import React, { memo, useState } from 'react'
import { RateStar, Button } from 'components';
import { productService } from 'services/productService';
import { toastSucess } from 'utils/helpers';

const FormFeedback = ({ currentOrder, setIsModal, fechData, dataEdit }) => {

    const [valueStar, setValueStar] = useState(dataEdit ? dataEdit.star : 5)
    const [comment, setComment] = useState(dataEdit ? dataEdit.comment : "")

    const handleRatingProduct = async () => {
        const response = await productService.handleRatingProduct({ star: valueStar, comment, pid: currentOrder?._id })
        if (response?.success) {
            toastSucess(response?.msg)
            setIsModal(false)
            fechData && fechData()
        }
    }

    return (
        < >

            <h1 className='text-xl'>{currentOrder?.title}</h1>
            <div>
                <RateStar value={valueStar} setValue={setValueStar} />
            </div>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="border-2 w-full my-3 p-3 outline-none" />
            <Button handleOnclick={handleRatingProduct} name="Submit" />
        </>
    )
}

export default memo(FormFeedback)