import { useEffect, useState } from "react";
import ColorCard from "./ColorCard";

export default function Post({ item }) {
    const [user, setUser] = useState({});

    const initData = () => {
        fetch('https://jsonplaceholder.typicode.com/users/'+item.userId)
      .then(response => response.json()).then(json => {
        console.log(json);
        setUser(json);
      })
    }

    useEffect(()=> {
        initData();
    }, [])

    return (
        <div>
            <div className="mb-4">
                <h2 className="text-center">{item ? item.title : 'Temp title'}</h2>
                <div className={"d-inline-flex w-100"}>
                    <div>
                        <p>Author: {user.name}</p>
                        <p>Created at: Sept. 8, 2023</p>
                    </div>
                    <div className={"flex-wrap justify-content-end"}>
                        <ColorCard title={'magenta'} color={'text-magenta'} />
                        <ColorCard title={'red'} color={'text-red'} />
                        <ColorCard title={'volcano'} color={'text-volcano'} />
                        <ColorCard title={'orange'} color={'text-orange'} />
                        <ColorCard title={'gold'} color={'text-gold'} />
                        <ColorCard title={'lime'} color={'text-lime'} />
                        <ColorCard title={'green'} color={'text-green'} />
                        <ColorCard title={'cyan'} color={'text-cyan'} />
                        <ColorCard title={'blue'} color={'text-blue'} />
                        <ColorCard title={'geekblue'} color={'text-geekblue'} />
                        <ColorCard title={'purple'} color={'text-purple'} />
                    </div>
                </div>
                <p>{item ? item.body : "temp body"}</p>
            </div>
            <div>
                <p>Number replies</p>
                <hr className={"w-75 text-center m-auto"} />
                <div>Show/hidden items</div>
                <hr className={"border-dark"} />
            </div>
        </div>
    )
}