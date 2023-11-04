import { useAppDispatch } from "@/src/redux/hook"
import { fetchPostData } from "@/src/redux/reducers/postState"

const active = 'bg-black text-white'


const Pagination = ({keyState, totalPages, currentPage} : any) => {
    let pageNumberArray : number[] = []
    const dispatch = useAppDispatch()
    for(let i = 1; i <= totalPages; i++) {
        pageNumberArray.push(i)
    }

    const onChangeCurrentPage = (page : number) => {
        dispatch(fetchPostData({page, key: keyState}))
    }
    return (
        <>
            <div className=" d-flex flex-wrap align-items-center justify-content-center gap-4 fs-6 fw-4 py-2">
                {pageNumberArray.map((pageNumber : number, index : number) => (
                <button 
                    key={index}
                    disabled={currentPage == index + 1}
                    style={{ width: '40px'}}
                    onClick={() => {
                        onChangeCurrentPage(pageNumber)
                    }}
                    className={`${currentPage == pageNumber ? active : 'text-black-primary bg-gray'} btn btn-outline border border-2 border-black-primary rounded-2`}
                >
                    <div className="text-center">
                        {pageNumber}
                    </div>

                </button>
                 ))
                }
            </div>
        </>
    )
}

export default Pagination;