import House from '../assets/house.png'

const Advantage = () => {
    const imageContainerStyles = {
        width: '55em',
        height: '13em',
    }
  return (
    <div className='d-md-flex bg-danger'>
        <div style={imageContainerStyles} className='image-container w-100 w-md-50 mb-4 pb-5'>
            <img className='img-fluid object-fit-cover' src={House} alt="house" />
        </div>
        <div className='bg-primary text-light w-100 w-md-50 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='display-3 text-center text-md-start '>Best Paint Your Dream Home Can Get</h3>
            <p className='lead text-center'>Introducing our premium Emulsion Paint - a revolution in home and commercial decoration. Designed for the modern decorator, our emulsion paint offers an impeccable matte finish that transforms spaces into elegant and vibrant environments. Crafted with the latest in paint technology, it provides unmatched durability, exceptional coverage, and a long-lasting, flawless appearance. </p>
            <br />
            <p className='text-center '>Our eco-friendly formula is low in VOCs, ensuring a safer, healthier environment for your family or workplace. Easy to apply and quick to dry, it&apos;s perfect for those who value both aesthetics and efficiency. Available in a wide range of colors, our emulsion paint is versatile enough to bring your creative visions to life.
            Elevate your space with our Emulsion Paint - where quality meets sustainability.
            </p>

        </div>
    </div>
  )
}

export default Advantage