import React from "react";
import { Modal, Button } from 'react-bootstrap'
import '../ReviewForm.css'

const ReviewForm = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>{props.currSnack.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
      />
      {
          <form className='reviewForm'
          onSubmit={event => {
            event.preventDefault()
            props.handleSubmitNewReview(event,props.currSnack.id)
          }}
          >
          <label>
          {`Title: `}
          <input type="text" name='title'/>
          </label>
        <label>
            {`Rating: `}
            <input type='number' name='rating'/>
        </label>
        <label>
        <textarea type="text" name='text' placeholder='Comments...' cols='70' rows='10'>
        </textarea>
        </label>
        <Button type='submit'>Submit</Button>
        {/* <input type="submit" value='submit'/> */}
        </form>
      }
      <Modal.Footer>
        <Button onClick={props.handleReviewFormClose}>Cancel</Button>
        <Button onClick={props.handleCardClose}>Close</Button>
      </Modal.Footer>
    </div>
  );
};

export default ReviewForm
