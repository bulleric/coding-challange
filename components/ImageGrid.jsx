"use client"
const images = [
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
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
    <div className="bg-white">
      <div className="pt-1">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-3 lg:px-2">
          <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-tl-lg  rounded-bl-lg lg:block">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-tr-lg">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-br-lg">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGrid;