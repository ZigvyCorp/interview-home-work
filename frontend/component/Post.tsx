"use client"
import CommentSection from "./CommentSection";

export default function Post ({data} : any) {
    const createdDate = new Date(data?.createdDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    return (
        <article className="d-flex flex-column w-100 p-4 p-sm-5 bg-white rounded-4 shadow-sm ">
            <section className="d-flex flex-column align-items-start w-100 fs-5">
                <h2 className="w-100 text-center fw-bold fs-2 fs-sm-1 mb-4 mb-sm-5 text-black-primary uppercase-first-letter px-md-120px ">{data?.title}</h2>
                <div className="fw-medium mb-3 mb-sm-4 text-dark-gray fs-6 fs-sm-5">
                    <p className="m-0">Author: {data?.author?.name}</p>
                    <p className="m-0">{`Created at: ${createdDate}`}</p>
                </div>
                <p className="text-black-primary fw-medium fs-6 fs-sm-5 uppercase-first-letter">
                    {data?.body}
                </p>
            </section>
            <CommentSection amount={data?.comments.length} postId={data?.postId}/>
        </article>
    )

}
