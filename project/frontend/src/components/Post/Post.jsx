const Post = ({ props }) => {
    const { title, author, createdAt, content, tag } = props;

    return (
        <div>
            <h1 className="text-center mt-6 mx-auto  text-3xl font-bold  text-gray-600 dark:border-gray-700">
                {title}
            </h1>
            <div className="flex justify-between">
                <div className="a">
                    <div>Author: {author}</div>
                    <span>Created at: {createdAt}</span>
                </div>
                <div className="a">
                    {tag.map((data) => (
                        <li key={data.id}>
                            <div>{data}</div>
                        </li>
                    ))}
                </div>
            </div>
            <p className="mt-4 mb-4">{content}</p>
        </div>
    );
};

export default Post;
