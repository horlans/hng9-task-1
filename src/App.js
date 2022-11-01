// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-col w-full h-screen mx-auto bg-white items-center py-7 md:w-2/3'>
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
             rounded-[8px] bg-gray-200 h-14 justify-center'
            >
              <h2 className='text-xl'>Zui Team</h2>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              id='books'
              href='http://books.zuri.team'
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200 h-14 justify-center'
            >
              <h2 className='text-xl'>Zuri Books</h2>
              <p> books about design and coding</p>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              id='book__python'
              href='https://books.zuri.team/python-for-beginners?ref_id=OjoOlarewaju'
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200 h-14 justify-center'
            >
              <h2 className='text-xl'>Python Books</h2>
              <p>Best selling Python Books</p>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              id='pitch'
              href='https://background.zuri.team'
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200 h-14 justify-center'
            >
              <h2 className='text-xl'>Background check</h2>
              <p>
                where you pitch a service for doing background checks on coders
              </p>
            </a>
          </li>
          <li className='w-full mb-4'>
            <a
              id='book__design'
              href='https://books.zuri.team/design-rules '
              className=' flex flex-col items-center border 
             rounded-lg bg-gray-200 h-14 justify-center'
            >
              <h2 className='text-xl'>Design Books</h2>
              <p>where you pitch the free design book offered by Zuri</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
