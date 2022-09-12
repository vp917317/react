import dp from "../assests/vishal.jpg";

const Header=_=>{
    return(
       <section >
        <div className="container text-center">
  <div className="row">
    <div className="col"><img src={dp} style={{width:100 , borderRadius:50 , margin:10}} alt="My Profile"/></div>
    <div className="col"><h1>Vishal Patidar</h1>
        <p style={{fontSize:15}}>
            <b>Email: vp917317@gmail.com</b> <br></br> <b>Contact: 8319526190</b><br></br>
               <a href="https://www.linkedin.com/in/vishal-pa/" target="_blank">LinkedIn</a>
      <br></br>
      <a href="https://leetcode.com/vp917317/" target="_blank">Leetcode</a>
      </p></div>
   
  </div>
</div>
       </section>
      
    )
}

export default Header;


