import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import emailjs from '@emailjs/browser';

import MotionAnimate from 'src/components/MotionAnimate';

import './contactForm.scss';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Email address is required')
    .label('Email'),
  message: Yup.string().required().label('Message'),
});

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function sendEmail(object) {
    emailjs
      .send('service_hngouyh', 'template_0ibridr', object, 'RJbHKRxlmAf_iEb4D')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {submitted ? (
        <MotionAnimate>
          <div className='form-submitted'>
            <p>Thank you for your message,</p>
            <p>I'll get back to you shortly.</p>
          </div>
        </MotionAnimate>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // Send email
            sendEmail(values);
            console.log('submit');
            setTimeout(() => {
              setSubmitting(false);
              setSubmitted(true);
              resetForm({ initialValues });
            }, 1000);
          }}
        >
          {({ errors: e, touched: t, isSubmitting }) => (
            <Form className='form'>
              <label htmlFor='name' name='name' />
              Your name:
              <Field
                id='name'
                type='text'
                name='name'
                className={`form-control ${e?.name && t?.name && 'is-invalid'}`}
              />
              <ErrorMessage
                name='name'
                component='div'
                className={'error-message'}
              />
              <label htmlFor='email' name='email'>
                Your email:
              </label>
              <Field
                id='email'
                type='email'
                name='email'
                className={`form-control ${
                  e?.email && t?.email && 'is-invalid'
                }`}
              />
              <ErrorMessage
                name='email'
                component='div'
                className={'error-message'}
              />
              <label htmlFor='message' name='message' />
              Message:
              <Field
                id='message'
                as='textarea'
                type='text'
                name='message'
                className={`form-control ${
                  e?.message && t?.message && 'is-invalid'
                }`}
              />
              <ErrorMessage
                name='message'
                component='div'
                className={'error-message'}
              />
              <button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}

export default ContactForm;
