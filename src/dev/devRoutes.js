import cardflight from './devPages/Cardflight'
import cardshimmer from './devPages/Cardshimmer'
import Test from './devPages/Test'
import InputField from './devPages/Input'
import HotelSrpCard from './devPages/HotelSRPCard'
import CabSrpcard from './devPages/CabSRPCard'
export const devRoutes = [
  {
    name: 'testing',
    page: Test,
  },

  {
    name: 'cardshimmer',
    page: cardshimmer,
  },
  {
    name: 'flightcard',
    page: cardflight,
  },
  {
    name: 'input',
    page: InputField,
  },
  {
    name: 'hotelcard',
    page: HotelSrpCard,
  },
  {
    name: 'Cabcard',
    page: CabSrpcard,
  },
]
