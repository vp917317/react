const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a style={{color:"white"}} className="navbar-brand" href="#">
      Direct Links --
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a style={{color:"blue"}}  className="nav-link active" aria-current="page" href="#https://www.linkedin.com/in/vishal-pa/">
            LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <a style={{color:"blue"}}  className="nav-link" href="https://leetcode.com/vp917317/">
            Leetcode
          </a>
        </li>
        <li className="nav-item">
          
          <a style={{color:"blue"}}  className="nav-link" href="https://github.com/vp917317/February-Web-Fundamentals-Assignments/tree/master/projects">
            GitHub
          </a>
        </li>
        <li className="nav-item dropdown">
          <a style={{color:"blue"}} 
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Live Projects Link
          </a>
          <ul className="dropdown-menu">
            <li>
              <a style={{color:"blue"}}  className="dropdown-item" href="https://crypto-hunter.netlify.app/">
                CryptoCurrency Tracker
              </a>
            </li>
            <li>
              <a style={{color:"blue"}} className="dropdown-item" href="https://splendid-elf-c1f37e.netlify.app/">
                Video Streaming platform
              </a>
            </li>
            <li>
              <a style={{color:"blue"}} className="dropdown-item" href="https://fastidious-florentine-6b3a1b.netlify.app/">
                Chat-Bot 
              </a>
            </li>
            <li>
              <a style={{color:"blue"}} className="dropdown-item" href="https://tubular-blancmange-146c16.netlify.app/">
                Recipe app
              </a>
            </li>
            <li>
              <a style={{color:"blue"}} className="dropdown-item" href="https://rococo-semolina-eb6137.netlify.app/">
                TO-DO LiST
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar;