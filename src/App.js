// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-col w-full h-screen mx-auto bg-white items-center py-7'>
      <img src='./profile__img.png' alt='' id='profile__img' />
      <div>
        <h2 id='twitter' className='text-xl font-bold'>
          Sam Horlans
        </h2>
        <h2 id='slack' className='hidden'>
          Ojo Olarewaju
        </h2>
      </div>
      <div className='flex flex-col w-full  px-[24px] bg-white mt-[32px]'>
        <ul className='w-full'>
          <li className='w-full mb-4'>
            <a
              id='btn__zuri'
              href='https://training.zuri.team/'
              className=' flex flex-col items-center border 
             rounded-[8px] bg-gray-200'
            >
              <h2 className='text-xl'>Twitter link</h2>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              href='twitter.com'
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200'
            >
              <h2 className='text-xl'>Twitter link</h2>
              <p>subtext</p>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              href='twitter.com'
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200'
            >
              <h2 className='text-xl'>Twitter link</h2>
              <p>subtext</p>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              href='twitter.com'
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200'
            >
              <h2 className='text-xl'>Twitter link</h2>
              <p>subtext</p>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              href='twitter.com'
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200'
            >
              <h2 className='text-xl'>Twitter link</h2>
              <p>subtext</p>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              href='twitter.com'
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200'
            >
              <h2 className='text-xl'>Twitter link</h2>
              <p>subtext</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
