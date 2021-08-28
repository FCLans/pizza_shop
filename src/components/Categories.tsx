import React, { useState } from 'react'

type PropsType = {
  items: Array<string>
}

const Categories: React.FC<PropsType> = ({items}) => {
  const [currentItem, setCurrentItem] = useState(null as number | null)

  const onSelectItem = (indexItem: number | null) => {
    setCurrentItem(indexItem)
  }

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onSelectItem(null)} className={currentItem == null ? 'active' : ''}>Все</li>
        {items.map((item, index) => {
          return <li className={currentItem === index ? 'active' : ''} key={`${item}_${index}`}
                     onClick={() => onSelectItem(index)}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Categories