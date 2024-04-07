import FlightSearchForm from '../components/FlightSearchForm'
import Hotel from '../../../components/Hotel/Hotel'
import Transportation from '../../../components/Transport/Transportation'

const COMPONENT_MAP = {
  '/hotel': Hotel,
  '/flight': FlightSearchForm,
  '/transportation': Transportation,
}

export default function getSearchForm(pathname) {
  if (pathname) {
    return COMPONENT_MAP[pathname]
  }
}
