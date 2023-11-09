import Button from 'components/Button/Button'
import FormSelect from 'components/FormSelect/FormSelect'
import Input from 'components/Input/Input'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { userService } from 'services/userService'
import { role, statusUser } from 'utils/constants'
import { toastSucess } from 'utils/helpers'

const FormUser = ({ data, setModal, fetchAllUsers }) => {

    const [selected, setSelected] = useState({



        role: "",
        isBlocked: "",
    })

    useEffect(() => {

        setSelected({

            role: data?.role,
            isBlocked: data?.isBlocked,
        })

    }, [data])

    const handleSaveEdit = useCallback(
        async () => {
            setModal(false)
            const response = await userService.handleEditUserByAdmin(data?._id, selected)
            if (response.success) {
                fetchAllUsers({ sort: "-createdAt" })
                toastSucess(response?.msg)
            }
        },
        [selected],
    )






    return (
        <div>
            <div className="grid grid-cols-2 gap-3">
                <Input value={data?.firstName} name="firstName" disabled={true} />
                <Input value={data?.lastName} name="lastName" disabled={true} />

            </div>
            <Input value={data?.email} name="email" disabled={true} />
            <div className=' mt-3 flex justify-between'>
                <div className='flex items-center'>
                    <p>ROLE:</p>
                    <FormSelect className="px-3 py-1 outline-none border-2 border-sub ml-3 rounded-md cursor-pointer" name={data?.role} options={role} value={selected?.role} setValue={(e) => setSelected({ ...selected, role: e.target.value })} />
                </div>
                <div className='flex items-center'>
                    <p>STATUS:</p>
                    <FormSelect className="px-3 py-1 outline-none border-2 border-sub ml-3 rounded-md cursor-pointer" name={data?.isBlocked} options={statusUser} value={selected?.isBlocked} setValue={(e) => setSelected({ ...selected, isBlocked: e.target.value })} />
                </div>
            </div>
            <Button name="Save" handleOnclick={handleSaveEdit} />

        </div>
    )
}

export default memo(FormUser)