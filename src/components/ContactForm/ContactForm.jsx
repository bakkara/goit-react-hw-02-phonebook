import { Formik, Field, Form, ErrorMessage} from "formik";

import * as Yup from 'yup';

 const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .test(
      "name",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      value => /^[a-zA-Zа-яА-Я]+((['][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(value)
    )
    .required('Required'),
    number: Yup.string()
    .test(
      "number",
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
      value =>
        /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(
          value
        )
    )
    .required('Required'),
 });

export const ContactForm = ({onAdd}) => {
    return (
   <Formik
        initialValues={
                {
                    name: "",
                    number: "",
                }}
        onSubmit={(values, actions) =>{
         onAdd(values);
        actions.resetForm();
            }}
        validationSchema={SignupSchema}
      >
        <Form>
          <Field name="name" type="text" />
        <ErrorMessage name="name"/>
                <Field name="number" type="tel" />
                <ErrorMessage name="number"/>
          <button type="submit">Add contact</button>
        </Form>
      </Formik >
          )
}