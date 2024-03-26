import React from 'react'

export default function Team() {
  return (
   <>  
     <section className="consulting-area">
   <div className="container">
   
     <div className="row">
       <div className="col-12">
         <div className="consulting-inner-wrap shine-animate-item">
           <div className="consulting-content">
             <div className="content-left">
               <h2 className="title">40+</h2>
               <span>
                 Consulting <br /> farm
               </span>
             </div>
             <div className="content-right">
               <h2 className="title">
               ONE STOP SOLUTION for all the needs of the FOUNDER
               </h2>
               <p>
               Arun is assisted by a team of CAs and MBAs
               </p>
             </div>
           </div>
           <div className="consulting-img shine-animate">
             <img src="assets/img/images/consulting_img.jpg" alt="" />
           </div>
           <div className="consulting-shape">
             <img src="assets/img/images/consulting_shape.png" alt="" />
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 {/* consulting-area-end */}
 {/* testimonial-area */}
 <section id='team'
  className="about__area-two about__bg"
  data-background="assets/img/bg/about_bg.jpg"
>
  <div className="container">
  <div className='section-title text-center pb-4'>
    <span class="sub-title">MEET OUR TEAM</span>

    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="about__img-wrap-two">
          <img className='team_img' src="assets/img/team/team.png" alt="" />
          <div className="shape">
            <img
              src="assets/img/images/h2_about_img_shape.png"
              alt=""
              className="alltuchtopdown"
            />
          </div>
          <div className="experience__box-two">
            <div className="experience__shape">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 82 295"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M70.7685 260.479C77.6405 257.127 82 250.15 82 242.503L82 44.8205C82 36.5032 76.8524 29.054 69.0724 26.1128L-3.51784e-06 9.7784e-07L0 295L70.7685 260.479Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <div className="experience__content">
              <h4 className="title">30+</h4>
              <p>
                Years Of <br /> Experiences
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
      <div className="team__details-content">
  <h2 className="title">Arun Ganapathy</h2>
  <span className="position">CA, CS & CWA</span>
  <div className='about__list-box about__list-box1'>
              <ul className="list-wrap">
               <li><i className="fas fa-check"></i>30 + Years of experience in Metals & Retail Industry</li>
                <li><i className="fas fa-check"></i>17 + Years of experience as CFO</li>
         </ul>
              </div>
            
              <div className='about__list-box '>
              <p className='list-p'>Key Expertise</p>
              <ul className="list-wrap">
               <li><i className="flaticon-arrow-button"></i>Financial Planning & Management</li>
                <li><i className="flaticon-arrow-button"></i>MIS & Budgeting</li>
                <li><i className="flaticon-arrow-button"></i>Corporate Strategy</li>
                <li><i className="flaticon-arrow-button"></i>Digital Transformation</li>
                <li><i className="flaticon-arrow-button"></i>Fund Raising</li>
                <li><i className="flaticon-arrow-button"></i>Due Diligence</li>
                <li><i className="flaticon-arrow-button"></i>Change Management</li>


         </ul>
              </div>


 
  <div className="team__details-info">
    <ul className="list-wrap">
      <li>
        <i className="flaticon-phone-call" />
        <a href="tel:992 061 9074">+91 992 061 9074</a>
      </li>
      <li>
        <i className="flaticon-mail" />
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arun@cfosupport.in"  target="_blank">arun@cfosupport.in</a>
      </li>
      <li>
        <i className="flaticon-pin" />
        Powei , Mumbai City
      </li>
      <li>
       
        <ul className="list-wrap team__details-social">
        
          <li>
            <a href="javascript:void(0)">
              <i className="fab fa-twitter" />
            </a>
          </li>
         
          
          <li>
            <a href="javascript:void(0)">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
  </div>
  <div className="about__shape-wrap-two">
    <img
      src="assets/img/images/h2_about_shape01.png"
      alt=""
      data-parallax='{"x" : -80 , "y" : 80 , "rotateZ":80}'
    />
    <img
      src="assets/img/images/h2_about_shape02.png"
      alt=""
      data-parallax='{"y" : 100 }'
    />
  
  </div>
</section>

 </>
  )
}
