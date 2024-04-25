import { Carousel } from "react-bootstrap"
import "../assets/CSS/main.css"
export default function CarouselVietTel(){
    return(
        <>
        <Carousel  >
        <Carousel.Item className="responsive-carousel cover">
          <img
            className="d-block w-100 Carousel-home  cover"
            src="/viettelcarousel1.png"
            
            alt="First slide"
          />
          <Carousel.Caption>
          <h1 className="text-black uppercase"><a href="/Productlist">Đặt hàng ngay</a></h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="responsive-carousel cover">
          <img
            className="d-block w-100 Carousel-home  cover"
            src="/internet-Viettel-truong-tho.jpg"
            alt="Second slide"
            
          />
      
          <Carousel.Caption>
          <h1 className="text-black uppercase"><a href="/Productlist">Đặt hàng ngay</a></h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="responsive-carousel  cover">
          <img
            className="d-block w-100 Carousel-home  cover"
            src="/Lap-Mang-Viettel.jpg"
            
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <h1 className="text-black uppercase"><a href="/Productlist">Đặt hàng ngay</a></h1>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    )
}