import Flight from '../../../components/flights/Flight'
import Hotel from '../../../components/Hotel/Hotel'
import Transportation from '../../../components/Transport/Transportation'

const COMPONENT_MAP = {
  '/hotel': Hotel,
  '/flight': Flight,
  '/transportation': Transportation,
}

export default function getSearchForm(pathname) {
  if (pathname) {
    return COMPONENT_MAP[pathname]
  }
}
