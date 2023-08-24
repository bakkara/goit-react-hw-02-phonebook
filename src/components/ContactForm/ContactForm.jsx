import { Formik, Field, Form } from "formik";
// import * as Yup from 'yup';

//  const SignupSchema = Yup.object().shape({
//    firstName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    lastName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    email: Yup.string().email('Invalid email').required('Required'),
//  });

export const ContactForm = ({onAdd}) => {
    return (
   <Formik
        initialValues={
                {
                    name: "",
                    number: ""
                }}
        onSubmit={(values, actions) => {
         onAdd(values);
        actions.resetForm();
            }}
        /* validationSchema={SignupSchema} */
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="number" type="tel" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik >
          )
}