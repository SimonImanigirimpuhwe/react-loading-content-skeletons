import React from 'react'
import styles from '../../styles.module.css'

interface ThemeProp {
  theme?: 'light' | 'dark'
}
const Shimmer = ({ theme }: ThemeProp): JSX.Element => {
  const getTheme: () => string = () => (theme === 'dark' ? styles.dark : '')

  return (
    <div className={styles.shimmerWrapper}>
      <div className={`${styles.shimmer} ${getTheme()}`} />
    </div>
  )
}

export default Shimmer
