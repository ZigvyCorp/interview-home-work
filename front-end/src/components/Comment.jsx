export default function Comment({ comment }) {
  const today = new Date();
  const createdDay = new Date(comment?.created_at);
  const numOfDiffDay = Math.ceil(
    Math.abs(today - createdDay) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="container py-2 px-0">
      <div className="d-flex gap-3">
        <div>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.0h8fo76BwSZTehnXfYhcNQHaHc&pid=Api&P=0&h=180"
            alt="avatar"
            className="avatar cursor-pointer"
          />
        </div>
        <div>
          <div className="d-flex flex-column gap-1">
            <div className="d-flex flex-row gap-2">
              <span className="text-gray">{comment?.username}</span>
              <span className="text-secondary">{numOfDiffDay} days a go</span>
            </div>
            <p className="mb-1">{comment?.content}</p>
            <div>
              <span className="hover-text cursor-pointer text-gray">
                Reply to
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
