import React from 'react'

const Card = ({className, title, paragraph, image, classNameTitle, classNameParagraph }) => {
  return (
    <div className={`${className}`}>
        <img src={image} alt={title}/>
        <h3 className={classNameTitle}>{title}</h3>
        <p className={classNameParagraph}>{paragraph}</p>
    </div>
  )
}

export default Card