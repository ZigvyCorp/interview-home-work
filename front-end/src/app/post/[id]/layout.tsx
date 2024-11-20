export default function DetailPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="detail-post-layout">{children}</div>
    </div>
  )
}