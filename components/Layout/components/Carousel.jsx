import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // Importing icons

function carousel() {
   
  return (
    <Carousel prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />} data-bs-theme="dark">
      <Carousel.Item interval={1000}>
      <section 
      className="banner-area banner-bg"
     
    >
     
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content">
           
              <span className="sub-title"  data-aos-delay={0}>
                We Are Expert In This Field
              </span>
              <h2 className="title"  data-aos-delay={200}>
                business Consulting All Solutions
              </h2>
              <p data-aos-delay={400}>
                CFO support helps you to convert your data into a strategic asset and
                get business insights CFO support helps you to convert your data into
                asset and get top-notch business insights.
              </p>
           
            </div>
            <div className="banner-shape">
             
              <img
                src="assets/img/banner/banner_shape02.png"
                alt=""
                className="ribbonRotate"
              />
            </div>
          </div>
        </div>
        <div className="banner-social">
          <h5 className="title">Follow us</h5>
          <ul className="list-wrap">
            <li>
              <a href="javascript:void(0)">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
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
        </div>
        <div className="banner-scroll">
          <a href="#about">
            Scroll Down{" "}
            <span>
              <i className="fas fa-arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </section>        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <section className='banner-bg'>
        </section>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <section className='banner-bg'></section>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
function CustomPrevIcon() {
    return  <div style={{ borderRadius: '50%', width: '60px', height: '60px', lineHeight: '40px', textAlign: 'center', background:"#7581ad" , justifyContent:"center" }} className=" testimonial__nav-four testimonial-two-button-prev button-swiper-prev"><i  className="fa fa-arrow-left text-black fa-2xl"></i></div>

  }
  
  // Custom component for the next icon
  function CustomNextIcon() {
    return  <div style={{ borderRadius: '50%', width: '60px', height: '60px', lineHeight: '40px', textAlign: 'center', background:"#7581ad" , justifyContent:"center" }} className=" testimonial__nav-four testimonial-two-button-prev button-swiper-prev" ><i  className="fa fa-arrow-right text-black fa-2xl" ></i></div>
  }
export default carousel;