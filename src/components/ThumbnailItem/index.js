// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItem
  const onDisplayImage = () => {
    updateImage(id)
  }

  const activeThumbnailClassName = isActive ? 'thumbnail-img' : 'opacity-img'

  return (
    <li>
      <button type="button" onClick={onDisplayImage} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
