import React from 'react'

const map = () => {
  return (
    <div>
      <>
        <div className="row w-100 d-flex align-items-center justify-content-center">
          <div className="col-lg-6 my-4 mx-4 ">
            <iframe className="w-100 " style={{ height: "400px", allowfullscreen: "", loading: "fast" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
            ></iframe>
          </div>
        </div>
      </>
    </div>

  )
}

export default map
