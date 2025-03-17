import { useForm } from 'react-hook-form'
import { FormGroup, Label, Form } from 'reactstrap'
import { ErrorMessage } from '@hookform/error-message'
import { useLoginStore } from '../../Stores/LoginStore'
import { LoginRequest } from '../../Types/LoginTypes';
import { useEffect } from 'react';
import { loginService } from '../../Services/LoginService'


export default function Login() {


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginRequest>();


  const {
    isUser,
    setUser,
    isToken,
    setToken
  } = useLoginStore()


  const {
    login : callLogin
  } = loginService

  /*
  useEffect(() => {
    if (isData){
      console.log("isData:", isData);
    }
  }, [isData]); // Se ejecutará cada vez que `isData` cambie
  */

  const onSubmit = async (values: LoginRequest) => {
    let response =await callLogin(values)
    if(response.error){
      console.log(response.message, response.message_detail)
      return 
    }
    setToken(response.token)
    setUser(response.user)





    //console.log(isData)

    //console.log(isData)
    //console.log(useLoginStore.getState().isData);    
  }

  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor='email' className='form-label'>
          email
        </Label>
        <input
          type='text'
          placeholder='email'
          autoComplete='off'
          className='form-control'
          {...register('email', {
            required: { value: true, message: 'Campo obligatorio' }
          })}
        />

        <ErrorMessage
          errors={errors}
          name='email'
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

    {isToken && (
      <div className="alert alert-success mt-3">
        <h5>Datos de respuesta:</h5>
        {isToken}
      </div>
    )}

    </>

    
  )


}