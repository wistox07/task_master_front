import { useForm } from 'react-hook-form'
import { FormGroup, Label, Form, Container, Row, Card, CardBody, Col } from 'reactstrap'
import { toast } from "react-toastify";
import { ErrorMessage } from '@hookform/error-message'
import { useLoginStore } from '../../Stores/LoginStore'
import { LoginRequest } from '../../Types/LoginTypes';
import { loginService } from '../../Services/LoginService'
import { useNavigate } from "react-router-dom";


export default function Login() {


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginRequest>();


  const {
    setUser,
    setToken,
    isLoading,
    setLoading
  } = useLoginStore()

  const navigate = useNavigate();
  const {
    login : callLogin
  } = loginService

   // Se ejecutará cada vez que `isData` cambie
  

  const onSubmit = async (values: LoginRequest) => {
    setLoading(true);
    let response =await callLogin(values)
    
    if(response.error){
      console.log(response.message, response.message_detail)
      toast.error(response.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'light',
        })
        return 
    }
    setLoading(false)

    setToken(response.token)
    setUser(response.user)
    navigate("/task");   
  }


  return (
    <Container className='container vh-100 d-flex justify-content-center align-items-center'>
      <Row className='w-100 justify-content-center'>
        <Col xs={12} sm={8} md={6} lg={4}>
        <Card>
          <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
      <Label htmlFor="email" className="d-block text-start">Email</Label>
      <input
          type='text'
          placeholder='email'
          autoComplete='off'
          className='form-control'
          {...register('email', {
            required: { value: true, message: 'Campo obligatorio' },
            pattern: {
              value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message : 'El formato de correo es incorrecto'
            }
          })}
        />

        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => <div className='text-danger'>{message}</div>}
        />
      </FormGroup>

      <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
      <Label htmlFor="password" className="d-block text-start">Password</Label>
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

        <button className='btn btn-primary' type='submit'>
          Ingresar
        </button>

    </Form>
          </CardBody>
        </Card>
        </Col>
      </Row>
    
    </Container>




    
  )


}