import React, { useEffect, useState } from 'react'
import styles from '../../styles.module.css'
import Shimmer from '../Shimmer/Shimmer'

interface TextProps {
  size?: 'small' | 'medium' | 'large'
  theme?: 'light' | 'dark'
  short?: false | true
  count?: number
}

const Text: React.FC<TextProps> = ({ size, theme, short, count = 1 }) => {
  const [customClass, setCustomClass] = useState<string>(styles.text)
  const [bgColor, setBgColor] = useState<string>('')
  const [height, setHeight] = useState<number | string>('')

  useEffect(() => {
    switch (size) {
      case 'medium':
        return setCustomClass(styles.medium)
      case 'large':
        return setCustomClass(styles.large)
      case 'small':
        return setCustomClass(styles.text)
      default:
        return setCustomClass(styles.text)
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

  useEffect(() => (short === true ? setHeight(10) : setHeight('')), [height])

  const result: number[] = []
  for (let i: number = 1; i <= count; i++) {
    result.push(i)
  }

  return (
    <React.Fragment>
      {result.map((_, index) => (
        <div
          className={`${styles.text} ${customClass}`}
          style={{ background: bgColor, height }}
          key={index}
        >
          <Shimmer theme={theme} />
        </div>
      ))}
    </React.Fragment>
  )
}

export default Text
