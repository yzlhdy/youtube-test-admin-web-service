import React from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik'
import axios from 'axios'

export interface Registers {
  data: Data;
  message: string;
}

export interface Data {
  username: string;
  password: string;
  email: string;
}

interface IForms {
  field: any;
  form: any
}

const Register: React.FC = () => {

  const initialValues: Data = {
    username: '',
    password: '',
    email: ''
  }

  const onSubmit = (value: Data, actions: any) => {
    setTimeout(() => {
      // alert(JSON.stringify(value, null, 2))
      axios({
        method: "POST",
        url: 'http://localhost:4000/api/login',
        data: {
          ...value
        },

      }).then((res) => {
        console.log(res);

      })
      // axios.get('http://localhost:8000').then(res => {
      //   console.log(res);

      // })
      actions.setSubmitting(false)
    }, 1000)

  }
  return (
    <Box bg="purple.400" w={'100%'} h='100vh'>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <Box w="500px" height="400px" bg="white" borderRadius="xl" p={10}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Field name="username" >
                  {({ field, form }: IForms) => (
                    <FormControl isInvalid={form.errors.username && form.touched.username}>
                      <FormLabel htmlFor="name">Username</FormLabel>
                      <Input {...field} id="username" placeholder="用户名" />
                      <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Box my={6}>
                  <Field name="email" >
                    {({ field, form }: IForms) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel htmlFor="name">Email</FormLabel>
                        <Input {...field} id="emial" placeholder="Email" focusBorderColor="pink" />
                        <FormErrorMessage>{form.errors.emial}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Field name="password" >
                  {({ field, form }: IForms) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel htmlFor="name">密码</FormLabel>
                      <Input {...field} id="password" placeholder="密码" />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  w="100%"
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
