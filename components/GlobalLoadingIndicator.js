import { useIsFetching } from 'react-query'

export default function GlobalLoadingIndicator() {
  const isFetching = useIsFetching()

  return isFetching ? (
    <div style={{ position: 'absolute', top: '50px', right: '50px' }}>
      FETCH...
    </div>
  ) : null
}
