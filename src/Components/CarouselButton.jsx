import React from 'react'

function CarouselButton({slideTo, active}) {
  return (
    <React.Fragment>
        <button 
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={slideTo}
            className={active}
            aria-current="true"
            aria-label="Slide 1"
        />
    </React.Fragment>
  )
}

export default CarouselButton