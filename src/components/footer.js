
const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} Recipes</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="www.twitter.com"><i class="bi bi-twitter"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="www.instagram.com"><i class="bi bi-instagram"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="www.facebook.com"><i class="bi bi-facebook"></i></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;