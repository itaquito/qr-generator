import IcBaselineQrCode from '../Icon/IcBaselineQrCode';
import MdiGithub from '../Icon/MdiGithub';

function NavBar() {
  return (
    <nav className='flex w-full items-center justify-between bg-white px-12 py-4 shadow'>
      <div className='flex items-center'>
        <IcBaselineQrCode className='mr-2 h-[50px] w-[50px]' />
        <div>
          <h1 className='text-3xl font-bold text-primary'>QR Code Generator</h1>
          Free, simple, no ads, no trackers, open source and everything runs on
          your browser.
        </div>
      </div>

      <a href='https://github.com/itaquito/qr-generator' target='_blank'>
        <MdiGithub className='h-[25px] w-[25px] transition-all hover:text-primary' />
      </a>
    </nav>
  );
}

export default NavBar;
