import { Button } from "reactstrap"
import styles from '../../../styles/custom.module.css'
import { useLayoutEffect, useState } from "react"
import CommentContent from "./Comments"
const Post = ({ data, index, comments }) => {

    const colors = ['primary', 'success', 'danger', 'warning', 'info', 'light', 'secondary', 'primary', 'success', 'danger', 'warning', 'info', 'light', 'secondary']
    const [showAll, setShowAll] = useState(-1)
    const handleShowAll = () => {
        setShowAll(prev => prev === -1 ? index : -1)
        console.log('show all ', showAll)
        console.log('index ', index)
    }
    // responsive
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    useLayoutEffect(() => {
        window.addEventListener('resize', () => setInnerWidth(window.innerWidth))
        return window.removeEventListener('resize', () => setInnerWidth(window.innerWidth))
    }, [innerWidth])

    return (
        <>
            <div className="border-bottom border-dark border-3 text-black fs-5 px-3 pb-3">
                <h1 className="pt-4">{data?.title}</h1>
                <div className="d-flex justify-content-between align-items-center mt-1 mb-3">
                    <div>
                        <p className={styles.custom_text}>Author: {data?.owner?.username}</p>
                        <p className={styles.custom_text}>Create at: {formatTime(data).date + '-' + formatTime(data).month + '-' + formatTime(data).year}</p>
                    </div>
                    <div className="d-flex flex-wrap" style={{ width: innerWidth > 768 ? '25%' : '40%' }}>
                        {data?.tags?.map((tag, index) => (
                            <Button key={index} color={colors[index]} outline className="m-1">{tag}</Button>
                        ))}
                    </div>
                </div>
                <p className={styles.custom_text}>
                    {showAll === index ? data?.content + ' ' : data?.content?.slice(0, 101) + '... '}
                    <span
                        className="text-secondary fs-6 text-decoration-underline"
                        style={{ cursor: 'pointer' }}
                        onClick={handleShowAll}
                    >
                        {showAll === index ? 'Hide' : 'See more'}
                    </span>
                </p>
                <CommentContent comments={comments} postId={data?._id} />
            </div>
        </>
    )
}
export const formatTime = (data) => {
    const time = new Date(data?.create_at)
    return {
        date: time.getDate() < 10 ? '0' + time.getDate() : time.getDate(),
        month: time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1,
        year: time.getFullYear()
    }
}
export default Post