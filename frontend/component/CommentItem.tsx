"use client"
import Image from "next/image";
import Avatar from "@/public/avatar.png"

export default function CommentItem ({data} : any) {
    return (
        <div className="d-flex gap-3 w-100 py-3">
            <Image src={Avatar} width={40} height={40} alt="user avatar" className="rounded-circle"/>
            <div className="d-flex flex-column w-100">
                <div className="d-flex flex-column flex-md-row gap-1 gap-md-3 mb-4 mb-sm-2">
                    <span className="text-green fw-semibold">{data?.name}</span>
                    <span className="text-white-gray fw-normal">a day ago</span>
                </div>
                <p>
                    {data?.body}
                </p>
                <button 
                    className="btn fw-medium text-dark-gray px-0"
                    style={{width: "fit-content", border: "0"}}
                >
                    Reply to
                </button>
            </div>
        </div>
    )

}
