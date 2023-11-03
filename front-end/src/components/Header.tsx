import { Avatar, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import IconUser from './icons/IconUser';

export default function Header() {
  return (
    <header>
      <div className='border-[3.5px] border-black'>
        <Row wrap={false}>
          <Col span={11}>
            <div className='flex'>
              <Link
                to='/'
                className='group hover:text-inherit flex items-center gap-1'
              >
                <Avatar
                  className='grayscale animate-spin transition-all duration-300 group-hover:grayscale-0'
                  src={logo}
                  shape='square'
                  size='large'
                  style={{ borderRadius: 0 }}
                />
                <span className='font-mono group-hover:text-[#ed1b24] transition-all duration-300 text-2xl tracking-tighter font-bold'>
                  PKM
                </span>
              </Link>
            </div>
          </Col>

          <Col span={2}>
            <Link
              to='/'
              className='hover:text-white hover:bg-[#ed1b24] transition-all duration-300 h-full bg-[#e6e6e6] px-10 grid place-content-center border-r-[3.5px] border-l-[3.5px] border-black relative after:content-[""] hover:after:bg-[#ed1b24] after:transition-all after:duration-300 after:bg-[#e6e6e6] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-1/2  after:rotate-45 after:w-6 after:h-6 after:border-[3.5px] after:border-[transparent_black_black_transparent]'
            >
              <span className='font-mono text-2xl tracking-tighter font-bold z-[2]'>
                Blogs
              </span>
            </Link>
          </Col>

          <Col span={11}>
            <div className='flex justify-end items-center gap-2 pr-5'>
              <Avatar
                shape='square'
                size='large'
                style={{ borderRadius: 0 }}
                icon={<IconUser />}
              />
              <span className='font-mono text-2xl tracking-tighter font-bold'>
                Adam Levine
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}
