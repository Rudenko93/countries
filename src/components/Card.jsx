import { sliceString } from "../helper"

export const Card = ({ title, src, albumId }) => {
  return (
    <div className="card">
      <img src={src} className="card-img" alt="img" />
      <h2>{title}</h2>
      <h3>
        Description: <span>{albumId}</span>
      </h3>
    </div>
  )
}
