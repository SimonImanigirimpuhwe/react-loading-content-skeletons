import React from 'react'
import CSS from 'csstype'
import { Avatar, Thumbnail, Text } from 'react-loading-content-skeletons'
import 'react-loading-content-skeletons/dist/index.css'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div style={container}>
        <div style={avatarWrapper}>
          <Avatar theme='light' size='small' />
          <div style={text}>
            <Text size='small' count={2} short />
            <Text size='medium' short />
          </div>
        </div>
        <div style={thumbnailWrapper}>
          <div style={thumbnailPosition}>
            <Thumbnail />
          </div>
          <div style={avatarPosition}>
            <Avatar theme='dark' size='small' />
          </div>
        </div>
        <div>
          <Text size='large' short count={2} />
          <Text size='medium' theme='light' count={2} />
          <Text />
          <Text short />
        </div>
      </div>
    </React.Fragment>
  )
}

const container: CSS.Properties = {
  margin: '20px',
  marginTop: '40px'
}
const avatarWrapper: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  width: '500px'
}
const text: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  marginLeft: 0,
  width: '300px'
}
const thumbnailWrapper: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
}

const avatarPosition: CSS.Properties = {
  position: 'absolute',
  left: '80px',
  bottom: 0
}
const thumbnailPosition: CSS.Properties = {
  position: 'relative',
  width: '600px'
}

export default App
