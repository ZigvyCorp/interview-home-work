import './blogpost.css';
import { getRandomDate } from '../../utils/getRandomDate';

const BlogPost = () => {
  const dummyString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt
    quos voluptas vel incidunt officia pariatur, in assumenda autem at.
    Omnis at ab magnam quisquam atque rerum exercitationem quibusdam cum
    consectetur veniam ad aliquam ullam fugiat, facilis consequuntur ea
    quae incidunt. Unde accusantium fugit voluptatum impedit earum
    adipisci nemo illo itaque ducimus quidem! Quaerat reiciendis
    praesentium sint repellendus atque alias hic nesciunt ab ullam
    blanditiis tenetur inventore a iste, perspiciatis, quisquam quibusdam
    temporibus eligendi ratione possimus eius? Magnam, magni. Repellat,
    itaque inventore architecto aliquid suscipit blanditiis eligendi illo
    porro aut ipsa hic assumenda recusandae animi molestias aliquam, harum
    autem tempore dicta, repellendus pariatur quidem? Eos quidem quae
    delectus consequatur voluptatem libero hic numquam doloribus beatae
    veniam ipsam excepturi eveniet, illum et exercitationem quos nihil
    iste dolorem praesentium nam enim autem tempore. A quibusdam, dolore
    sit possimus officiis eveniet blanditiis eum quo in iure atque
    pariatur nesciunt quae ipsum, deleniti officia excepturi. Nulla sint,
    vitae, fugiat nam porro atque ipsa enim impedit, tempora dolores
    magnam corrupti deleniti. Veniam sed ut quibusdam facere ipsam commodi
    numquam minus quia doloremque libero odio illum fuga autem placeat
    ratione dolor architecto, earum magni ex explicabo laboriosam quo.
    Impedit corporis accusantium molestiae quasi! Repellat, inventore
    quasi?`;

  const randomDate = getRandomDate();
  return (
    <div className='p-2 border-bottom border-3 border-dark'>
      <div className='card-body'>
        <h1 className='card-title mb-2 text-center fw-bold'>Post 1</h1>
        <h6 className='card-subtitle mb-5 fw-bold d-flex flex-column'>
          <span className='mb-2'>Author: Adam Levin</span>
          <span>Created at: {randomDate}</span>
        </h6>
        <h6 className='card-text d-flex justify-content-center fw-bold'>
          {dummyString.substring(0, 100)}...{' '}
          <a className='' href='/'>
            Read more
          </a>
        </h6>
        <p className='d-flex'>
          <a
            className='btn text-start border-bottom text-body-secondary p-2 mb-2'
            data-bs-toggle='collapse'
            href='#id1'
            role='button'
            aria-expanded='false'
            aria-controls='id1'
            style={{ width: '100%' }}
          >
            2 replies
          </a>
        </p>
        <div className='collapse' id='id1'>
          <div className='mb-3 p-2 comment-container'>
            <div className='user-avatar'>
              <img
                src='https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='user avatar'
                className='avatar'
              />
            </div>
            <div className='comment'>
              <div className='username text-body-secondary'>
                Han solo{' '}
                <span className='user-time text-black-50'>2 days ago</span>
              </div>
              <div className='user-comment mb-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores odio deleniti dolorem odit exercitationem totam libero
                minima, quod suscipit illo quaerat debitis dicta vel et quis
                ipsam iste beatae! Eos error incidunt provident exercitationem
                quidem nulla est explicabo beatae quisquam?
              </div>
              <button className='btn p-0 text-primary'>Reply to</button>
            </div>
          </div>
          <div className='p-2 comment-container'>
            <div className='user-avatar'>
              <img
                src='https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='user avatar'
                className='avatar'
              />
            </div>
            <div className='comment'>
              <div className='username text-body-secondary'>
                Han solo{' '}
                <span className='user-time text-black-50'>2 days ago</span>
              </div>
              <div className='user-comment mb-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores odio deleniti dolorem odit exercitationem totam libero
                minima, quod suscipit illo quaerat debitis dicta vel et quis
                ipsam iste beatae! Eos error incidunt provident exercitationem
                quidem nulla est explicabo beatae quisquam?
              </div>
              <button className='btn p-0 text-primary'>Reply to</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
