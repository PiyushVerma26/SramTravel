import Test from './devPages/Test'
import FormInput from '../atoms/Input'
import InputError from '../atoms/InputError'
export const devRoutes = [
  {
    name: 'testing',
    page: Test,
  },

  {
    name: 'input',
    page: FormInput,
  },
  {
    name: 'danger',
    page: InputError,
  },
]
