import IcBaselineQrCode from '../Icon/IcBaselineQrCode';
import MdiGithub from '../Icon/MdiGithub';
import ThemeToggle from '../Theme/ThemeToggle';

function NavBar() {
  return (
    <nav className='flex w-full items-center justify-between bg-white dark:bg-gray-800 px-12 py-4 shadow dark:shadow-gray-700 transition-colors'>
      <div className='flex items-center'>
        <IcBaselineQrCode className='mr-2 h-[50px] w-[50px] text-primary dark:text-indigo-400' />
        <div>
          <h1 className='text-3xl font-bold text-primary dark:text-indigo-400'>QR Code Generator</h1>
          <p className='text-gray-700 dark:text-gray-300'>
            Free, simple, no ads, no trackers, open source and everything runs on
            your browser.
          </p>
        </div>
      </div>

      <div className='flex items-center space-x-4'>
        <ThemeToggle />
        
        <a 
          href='https://github.com/itaquito/qr-generator' 
          target='_blank'
          className='transition-all hover:text-primary dark:hover:text-indigo-400'
        >
          <MdiGithub className='h-[25px] w-[25px] text-gray-700 dark:text-gray-300' />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
