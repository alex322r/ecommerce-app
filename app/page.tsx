
import image from "./assets/images/01.webp"
import image2 from "./assets/images/02.webp"
import image3 from "./assets/images/03.webp"
import image4 from "./assets/images/04.webp"
import image5 from "./assets/images/05.webp"
import image6 from "./assets/images/06.webp"
import DaylyOffert from "./components/DaylyOffert"
import DraggableWindow from "./components/Draggable"


import ProductsSlider from "./components/ProductsSlider"
import Slider from "./components/Slider"
import products from "./mocks/products.json"





const images = [
  image, image2, image3, image4, image5, image6
]



export default function Home() {

  return (
    <>
      <Slider arrows={true} slides={images} />

      <ProductsSlider slides={products} />
      <DaylyOffert />
    </>
  )
}
