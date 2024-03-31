import React from 'react'
import FormInput from '../../../atoms/Input'
import { useForm } from 'react-hook-form'

// function InputField() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()
//
//   const Submitted = (data) => {
//     console.log('submitted', data)
//   }
//   return (
//     <form onSubmit={handleSubmit(Submitted)} className='flex px-7 justify-between gap-4 flex-wrap'>
//       <FormInput
//         name='Destination'
//         label='Destination'
//         register={register}
//         errors={errors}
//         errorBg='bg-red-500'
//         labelColor='text-black'
//         styles={'h-14'}
//       />
//       <FormInput
//         name='Address'
//         label='Address'
//         register={register}
//         errors={errors}
//         errorBg='bg-yellow-500'
//         labelColor='text-black'
//         styles={'h-14'}
//       />
//       <button type='submit'>Click</button>
//     </form>
//   )
// }

// export default InputField
