import Checkbox from './Checkbox'

export default function Filters({ categories, getSelectedCategories }) {
  return (
    <div className="mt-5 flex items-center">
      {categories.map((category) => (
        <Checkbox
          key={category.id}
          label={category.category_name}
          id={category.id}
          getSelectedCategories={getSelectedCategories}
        />
      ))}
    </div>
  )
}
