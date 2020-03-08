import React, { lazy, Suspense } from 'react'

export default (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc)

  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
