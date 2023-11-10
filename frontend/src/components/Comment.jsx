import Image from 'react-bootstrap/esm/Image'

const Comment = ({ comment }) => {
  console.log('comment', comment)
  return (
    <div className="d-flex">
      <div style={{ marginRight: '10px' }}>
        <Image src="/avatar-placeholder.svg" width={25} height={25} />
      </div>
      <div className="d-flex flex-column gap">
        <div className="small">
          <strong>{comment.owner.name}</strong>
          <span className="text-muted px-2">a day ago</span>
        </div>
        <div className="mt-1">{comment.content}</div>
      </div>
    </div>
  )
}

export default Comment
