import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue, errorMessage }) => {
  return (

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
          isInvalid={!!errorMessage} 
        />
        <Form.Control.Feedback type='invalid'>{errorMessage}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>Enviar</Button>
    </Form>

  )
}

export default ReviewForm