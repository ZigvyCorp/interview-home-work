import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import { faClockFour } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Post({ data }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title >{data.title}</Card.Title>
        <Card.Text style={{ minHeight: '5rem' }}>
          {`${String(data.content).substring(0, 100)}...`}
        </Card.Text>
        <div className='d-flex'>
          <Card.Text>
            Author : {data.owner?.name}
          </Card.Text>
          <div className='ms-auto d-flex'>
              <FontAwesomeIcon icon={faClockFour}/>
            <Card.Text className='ps-1'>
              {moment(data.createdAt).format("DD/MM/YYYY")}
            </Card.Text>
          </div>
        </div>
        <Button href={`/posts/${data._id}`}>Read More</Button>
      </Card.Body>
    </Card>

  );
}

export default Post;