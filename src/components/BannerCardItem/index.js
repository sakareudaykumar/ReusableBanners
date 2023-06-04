// Write your code here.

import './index.css'

const BannerCarditem = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={`container ${className}`}>
      <div className="card">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCarditem
