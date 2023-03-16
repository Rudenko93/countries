export const Card = ({ title, src, albumId }) => {
  return (
    <div className="card">
      <img src={src} />
      <h2>{title}</h2>
      <h3>
        Description: <span>{albumId}</span>
      </h3>
    </div>
  )
}
