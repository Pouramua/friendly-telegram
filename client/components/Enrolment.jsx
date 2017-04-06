import React from 'react'

const Enrolment = () => {
  return (
    <div>
      <h1>How to enrol my child.</h1>
      <p>Parents and caregivers please fillin the form below containing information about your child such as name, age, etc and we'll get back to you with a interview time if we have space. You will fill out the enrolment for at the interview.</p>
      <form>
        Fullname: <input type="text" className="name" /><br />
        Email: <input type="text" className="email" /><br />
        Enquiry: <input type="text" className="message" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Enrolment
