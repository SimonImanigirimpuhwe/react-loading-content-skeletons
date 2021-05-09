import React, { useEffect, useState } from 'react'
import styles from '../../styles.module.css'
import Shimmer from '../Shimmer/Shimmer'

interface Props {
  theme?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
}

const Avatar: React.FC<Props> = ({ size, theme }) => {
  const [customClass, setCustomClass] = useState<string>(styles.avatar)
  const [bgColor, setBgColor] = useState<string>('')

  useEffect(() => {
    switch (size) {
      case 'medium':
        return setCustomClass(styles.medium)
      case 'large':
        return setCustomClass(styles.large)
      default:
        return setCustomClass(styles.avatar)
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
      className={`${styles.avatar} ${customClass}`}
      style={{ background: bgColor }}
    >
      <Shimmer theme={theme} />
    </div>
  )
}

export default Avatar
