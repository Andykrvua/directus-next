export const HomepagePostQuery = `
  query HomepagePosts {
    posts {
      id
      title
      slug
      featured_image {
        id
      }
      body
    }
  }
`
export const HomepageProductQuery = `
  query HomepageProduct {
    products {
      id
      product_name
      price
      slug
      product_image {
        id
      }
      category {
        categories_id {
          id
          category_name
          slug
        }
      }
    }
  }
`
export const HomePageCategoriesQuery = `
  query HomepageCategories {
    categories {
      id
      category_name
    }
  }
`

export const HomePageFilteredProductsQuery = `
  query HomepageProducts($categories: [Float]) {
    products(filter: {category: {categories_id: {id: {_in: $categories}}}}) {
      id
      product_name
      price
      slug
      product_image {
        id
      }
      category {
        categories_id {
          id
          category_name
          slug
        }
      }
    }
  }
`
