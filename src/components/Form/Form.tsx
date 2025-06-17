import { Container, ContainerSucces } from './styles'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import validator from 'validator'
import emailjs from 'emailjs-com'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validEmail || !message) {
      toast.error('Please fill all fields correctly.')
      return
    }

    setLoading(true)

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!
    const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID!

    const templateParams = {
      from_name: email,
      from_email: email,
      message: message,
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(
        () => {
          setLoading(false)
          setSubmitted(true)
          toast.success('Email successfully sent!')
        },
        (error) => {
          setLoading(false)
          toast.error('Failed to send email. Please try again.')
          console.error('EmailJS error:', error)
        }
      )
  }

  if (submitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setSubmitted(false)
            setEmail('')
            setMessage('')
            setValidEmail(false)
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  const isDisabled = loading || !validEmail || !message

  const tooltipMessage = loading
    ? 'Please wait...'
    : !validEmail
    ? 'Enter a valid email address.'
    : !message
    ? 'Message field cannot be empty.'
    : ''

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <div title={isDisabled ? tooltipMessage : ''}>
          <button
            type="submit"
            disabled={isDisabled}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </Container>
  )
}
