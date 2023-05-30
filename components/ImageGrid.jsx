"use client"
const images = [
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
    alt: 'Two each of gray, white, and black shirts laying flat.',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
    alt: 'Model wearing plain black basic tee.',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
    alt: 'Model wearing plain gray basic tee.',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
    alt: 'Model wearing plain white basic tee.',
  }
]
const ImageGrid = () => {
  return (
      <div className="mx-auto mt-6 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-3 lg:px-0">
        <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:rounded-none lg:rounded-tl-lg lg:rounded-bl-lg">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-3">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-tr-lg">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden ">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-br-lg">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
  )
}

export default ImageGrid;