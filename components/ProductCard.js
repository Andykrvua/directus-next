import Link from 'next/link'

export default function postCard({
  image,
  product_name,
  price,
  category,
  slug,
}) {
  return (
    <Link href={`/products/${category.slug}/${slug}`}>
      <a className="group">
        <div>
          <img
            className="w-full object-cover object-center group-hover:opacity-75"
            src={`${process.env.NEXT_PUBLIC_ASSETS}/${image}?width=385&height=430`}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <h3 className="mt-4 mt-0 text-sm text-gray-700">
            {product_name}
            <span className="mb-0 ml-2 inline-block rounded-3xl bg-gray-200 px-2 py-1 text-xs text-gray-500">
              {category.category_name}
            </span>
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
        </div>
      </a>
    </Link>
  )
}
