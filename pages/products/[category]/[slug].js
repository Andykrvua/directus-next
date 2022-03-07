import Head from 'next/head'
import getData from '../../../queries/getData'
import { SingleProductQuery } from '../../../queries/singleProductQueries'

export default function ProductPage({ product }) {
  console.log(product)
  return (
    <section className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Head>
        <title>{product.product_name}</title>
      </Head>
      <div className="md:flex">
        <div className="">
          <img
            className="w-full object-cover object-center group-hover:opacity-75"
            src={`${process.env.NEXT_PUBLIC_ASSETS}/${product.product_image.id}?width=385&height=420`}
          />
        </div>
        <div className="mt-2 md:ml-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {product.product_name}
          </h2>
          {product.show_colors && (
            <div className="mt-4">
              <p className="mb-4 font-bold">Choose a color</p>
              <div className="flex">
                {product.available_colors.map((color) => (
                  <div key={color.product_colors_id.id}>
                    <label className="inline-flex cursor-pointer items-center">
                      <input
                        className="peer absolute h-0 w-0 opacity-0"
                        type="radio"
                        value={color.product_colors_id.id}
                        name="colors"
                      />
                      <span
                        className="mr-2 h-8 w-8 rounded-2xl border-2 border-white peer-checked:shadow-[0_0_0_2px_rgba(204,204,204)]"
                        style={{
                          background: color.product_colors_id.color_value,
                        }}
                      ></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          {product.show_sizes && (
            <div className="mt-4">
              <p className="mb-4 font-bold">Choose a size</p>
              <div className="flex">
                {product.available_sizes.map((size) => (
                  <div key={size.product_sizes_id.id}>
                    <label className="inline-flex cursor-pointer items-center">
                      <input
                        className="peer absolute h-0 w-0 opacity-0"
                        type="radio"
                        value={size.product_sizes_id.id}
                        name="sizes"
                      />
                      <span className="mr-2 flex h-8 w-8 items-center justify-center rounded border-2 border-gray-300 peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                        {size.product_sizes_id.short_title}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.query
  const data = await getData(SingleProductQuery, 'products', {
    product_slug: slug,
  })

  return {
    props: {
      product: data[0],
    },
  }
}
