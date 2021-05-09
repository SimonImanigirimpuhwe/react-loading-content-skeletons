import React, { useEffect, useState } from 'react'
import Shimmer from '../Shimmer/Shimmer'
import styles from '../../styles.module.css'

interface ThumbnailProps {
  size?: 'small' | 'medium' | 'large'
  theme?: 'light' | 'dark'
}

const Thumbnail = ({ size, theme }: ThumbnailProps): JSX.Element => {
  const [customClass, setCustomClass] = useState<string>(styles.thumbnail)
  const [bgColor, setBgColor] = useState<string>('')

  useEffect(() => {
    switch (size) {
      case 'medium':
        return setCustomClass(styles.medium)
      case 'large':
        return setCustomClass(styles.large)
      case 'small':
        return setCustomClass(styles.thumbnail)
      default:
        return setCustomClass(styles.thumbnail)
    }
  }, [size])

  useEffect(() => {
    switch (theme) {
      case 'dark':
        return setBgColor('lightgrey')
      default:
        return setBgColor('')
    }
  }, [theme])

  return (
    <div
      className={`${styles.thumbnail} ${customClass}`}
      style={{ background: bgColor }}
    >
      <Shimmer theme={theme} />
    </div>
  )
}

export default Thumbnail
