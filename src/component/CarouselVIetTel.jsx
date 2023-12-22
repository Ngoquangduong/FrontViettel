import { Carousel } from "react-bootstrap"
import "../assets/CSS/main.css"
export default function CarouselVietTel(){
    return(
        <>
        <Carousel  >
        <Carousel.Item className="responsive-carousel">
          <img
            className="d-block w-100 Carousel-home cover"
            src="/carousel1.jpg"
            
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="responsive-carousel">
          <img
            className="d-block w-100 Carousel-home"
            src="/carousel2.jpg"
            alt="Second slide"
            
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="responsive-carousel">
          <img
            className="d-block w-100 Carousel-home"
            src="/carousel3.jpg"
            
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    )
}