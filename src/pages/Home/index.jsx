import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Components
import TabBar from './components/TabBar'
import Trending from '../../components/Destinations/Trending'
import HotelSearch from '../../components/Search/HoelSearch'
import TransportSearch from '../../components/TransportSearch/TransportSearch'
import getSearchForm from './utils/getSearchForm'

export default function Home() {
  const location = useLocation()
  const { dataFetched: hotelData } = useSelector((state) => state.hotel)
  const { dataFetched: flightData } = useSelector((state) => state.flight)
  const { dataFetched: transportData } = useSelector((state) => state.transport)
  const SearchForm = getSearchForm(location.pathname)

  return (
    <>
      <div className='bg-blue-950 pb-11'>
        <div className='xl:px-60 px-1 py-2'>
          <TabBar />
        </div>
        <div className='px-2 md:px-12 xl:px-60 mt-6'>
          <h1 className='text-white text-4xl font-bold'>Explore countless flight options with ease.</h1>
          <div className='mt-10'>
            <SearchForm />
          </div>
        </div>
      </div>
      <div className='md:pt-10 pt-4 bg-slate-50 px-4 pb-4'>
        {!flightData && !hotelData && !transportData && <Trending />}
        {flightData && <FlightCard />}
        {hotelData && <HotelSearch />}
        {transportData && <TransportSearch />}
      </div>
      <div className='flex flex-col items-center p-5 bg-blue-950 font-customFont text-white'>
        <h1 className='text-3xl'>Save time and money!</h1>
        <p>Sign up to get best deals...</p>
        <div className='flex md:flex-row flex-col gap-2 mt-4 font-customFont flex-wrap mb-3'>
          <input
            className='px-5 py-2 rounded text-center md:min-w-[400px]'
            type='text'
            placeholder='Your email address'
          />
          <button className='px-12  bg-blue-700 rounded py-2'>Subscribe</button>
        </div>
      </div>
    </>
  )
}
