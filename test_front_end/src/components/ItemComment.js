export default function ItemComment({ item }) {
    return (
        <div>
            <div className="d-inline-flex">
                <img
                    className="img-responsive rounded-circle me-4"
                    src="https://images.pexels.com/photos/18758628/pexels-photo-18758628/free-photo-of-a-highland-cow-on-a-field.jpeg"
                    width={60}
                    height={60} />
                <div>
                    <div className="d-inline-flex">
                        <p className="me-2">{item ? item.name : "Temp name"}</p>
                        <p>2 days ago</p>
                    </div>

                    <p>{item ? item.body : "Temp body"}</p>
                    <p>Reply to</p>
                </div>

            </div>
        </div>
    );
}