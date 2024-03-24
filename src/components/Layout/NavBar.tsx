import IcBaselineQrCode from '../Icon/IcBaselineQrCode';

function NavBar() {
  return (
    <nav className='flex w-full items-center bg-white px-12 py-4 shadow'>
      <IcBaselineQrCode className='mr-2 h-[50px] w-[50px]' />
      <div>
        <h1 className='text-3xl font-bold text-primary'>QR Code Generator</h1>
        Free, simple, no ads, no trackers, open source and everything runs on
        your browser.
      </div>
    </nav>
  );
}

export default NavBar;
