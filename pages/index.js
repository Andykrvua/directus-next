import Head from 'next/head'
import { useQuery } from 'react-query'
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'
import { useState, useEffect } from 'react'
import getData from '../queries/getData'
import {
  HomepageProductQuery,
  HomePageCategoriesQuery,
  HomePageFilteredProductsQuery,
} from '../queries/homepageQueries'

async function handleProductFiltering({ queryKey }) {
  console.log(queryKey)
  // const [_] = queryKey
  if (queryKey[0].length) {
    return await getData(HomePageFilteredProductsQuery, 'products', {
      categories: queryKey[0],
    })
  }
  return await getData(HomepageProductQuery, 'products')
}

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const { data: products, isSuccess } = useQuery(
    [selectedCategories],
    handleProductFiltering,
    { refetchOnWindowFocus: false }
  )
  const { data: categories, isSuccess: categoriesSuccess } = useQuery(
    'categories',
    async () => await getData(HomePageCategoriesQuery, 'categories'),
    { refetchOnWindowFocus: false }
  )
  useEffect(() => {
    // console.log(selectedCategories)
  }, [selectedCategories])

  const getSelectedCategories = (category) => {
    // console.log('dd', category)
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      )
      return
    }
    setSelectedCategories([...selectedCategories, category])
  }
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Latest products
      </h2>
      {categoriesSuccess && (
        <Filters
          categories={categories}
          getSelectedCategories={getSelectedCategories}
        />
      )}
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {isSuccess &&
          products.map((product) => (
            <ProductCard
              product_name={product.product_name}
              price={product.price}
              image={product.product_image.id}
              category={product.category[0].categories_id}
              key={product.id}
              slug={product.slug}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
