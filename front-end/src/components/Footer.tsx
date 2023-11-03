import IconFacebook from './icons/IconFacebook';
import IconGithub from './icons/IconGithub';
import IconLinkedin from './icons/IconLinkedin';
import IconMail from './icons/IconMail';
import IconTwitter from './icons/IconTwitter';
import IconYoutube from './icons/IconYoutube';

export default function Footer() {
  return (
    <footer>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:dev.phansihoang@gmail.com'
          >
            <span className='sr-only'>mail</span>
            <IconMail />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/hoanggaphan'
          >
            <span className='sr-only'>github</span>
            <IconGithub />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/hoang.phansi.3'
          >
            <span className='sr-only'>facebook</span>
            <IconFacebook />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.youtube.com/results?search_query=pokemon'
          >
            <span className='sr-only'>youtube</span>
            <IconYoutube />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/ho%C3%A0ng-phan-s%C4%A9/'
          >
            <span className='sr-only'>linkedin</span>
            <IconLinkedin />
          </a>
          <a
            className='text-sm text-gray-500 transition hover:text-gray-600'
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.com/hoanggaphan'
          >
            <span className='sr-only'>twitter</span>
            <IconTwitter />
          </a>
        </div>
        <div className='mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>Phan Sĩ Hoàng</div>
          <div> • </div>
          <div>© {new Date().getFullYear()}</div>
          <div> • </div>
          <a href='/'>React.js Blog</a>
        </div>
      </div>
    </footer>
  );
}
