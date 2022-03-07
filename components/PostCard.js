export default function postCard({ img, title, body }) {
  return (
    <div className="my-2 max-w-xs overflow-hidden rounded shadow-lg">
      <img
        className="w-full"
        src={`${process.env.NEXT_PUBLIC_ASSETS}/${img}`}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-grey-darker text-base">{body}</p>
      </div>
    </div>
  )
}
