import { forwardRef } from "react"
import { Helmet } from "react-helmet-async"

const Page = forwardRef(({ title, meta, children }, ref) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {meta}
      </Helmet>
      <div ref={ref}>
        {children}
      </div>
    </>
  )
})

export default Page;
