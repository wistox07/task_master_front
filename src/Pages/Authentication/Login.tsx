import { useForm } from 'react-hook-form'
import { FormGroup, Label, Form } from 'reactstrap'
import { ErrorMessage } from '@hookform/error-message'


export default function Login() {

interface RequestLogin {
    "user" : string,
    "password" : string
}
const { 
    register, 
    handleSubmit, 
    formState: { errors } 
} = useForm<RequestLogin>();


    const onSubmit = async (values: RequestLogin) => {
        console.log(values)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor='email' className='form-label'>
                Usuario
              </Label>
              <input
                type='text'
                placeholder='email'
                autoComplete='off'
                className='form-control'
                {...register('user', {
                  required: { value: true, message: 'Campo obligatorio' }
                })}
              />

              <ErrorMessage
                errors={errors}
                name='user'
                render={({ message }) => <div className='text-danger'>{message}</div>}
              />
            </FormGroup>

            <FormGroup>
              <Label className='form-label' htmlFor='password'>
                Clave
              </Label>
                <input
                  placeholder='Clave'
                  autoComplete='off'
                  type={'password'}
                  className={'form-control'}
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Campo obligatorio',
                    },
                  })}
                />

              <ErrorMessage
                errors={errors}
                name='password'
                render={({ message }) => <div className='text-danger'>{message}</div>}
              />
            </FormGroup>

            <div className='d-grid gap-2 mt-4'>
              <button className='btn btn-primary' type='submit'>
                INGRESAR
              </button>
            </div>
      </Form>
    )
       
    
}