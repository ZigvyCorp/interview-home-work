export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="post-layout">{children}</div>
    </div>
  )
}