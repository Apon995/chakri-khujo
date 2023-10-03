import { useState, react, useEffect } from 'react'
import Navbar from './Components/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Footer from './Components/Footer';
import { Oval } from "react-loader-spinner";
function App() {
  const [currentLocation, setCurrentLocaiton] = useState();
  const location = useLocation();

  const navigation = useNavigation();



  useEffect(() => {
    if (location.pathname == '/') {
      document.title = `chakri khujo - home`;
      setCurrentLocaiton('home');
    }
    else {
      document.title = `chakri khujo ${location.pathname.replace('/', ' -')}`
      setCurrentLocaiton(location.pathname.replace('/', ''));
    }

  }, [location])

  return (
    <div className="max-w-[1440px] mx-auto">
      <header className='xl:px-[5%] md:px-[2%] px-[3%] bg-gradient-to-br from-[#7e90fe0d] to-[#9873ff0d]'>
        <Navbar currentLocation={currentLocation} />
      </header>
      <main className='xl:px-[5%] md:px-[2%] px-[3%]'>
        {
          navigation.state == 'idle' ? <Outlet /> : <div className='flex items-center justify-center w-full h-[60vh]'>
            <Oval
              height={80}
              width={80}
              color="black"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#adadad"
              strokeWidth={5}
              strokeWidthSecondary={4}

            />
          </div>
        }
      </main>
      <br />
      <br />
      <footer>
        <Footer />
      </footer>





    </div>
  )
}

export default App