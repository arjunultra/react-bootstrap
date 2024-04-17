
const MyFooter = () => {
  return (
    <>
    <footer className="text-center text-lg-start bg-dark text-warning">
  {/* <!-- Grid container --> */}
  <div className="container p-4 bg-dark">
    {/* <!--Grid row--> */}
    <div className="row">
      {/* <!--Grid column--> */}
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Footer text</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Footer text</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      {/* <!--Grid column--> */}
    </div>
    {/* <!--Grid row--> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3 bg-secondary">
    © 2020 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* console.log('<!-- Copyright -->'); */}
</footer>
    </>
  )
}

export default MyFooter