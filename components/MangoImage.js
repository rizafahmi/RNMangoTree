import React from 'react'
import {
  Image
} from 'react-native'

const MangoImage = ({ age, deadAge, deadStatus, stopAge }) => {
  if (age <= stopAge) {
    return <Image source={require('./img/mango-tree-growth-0.png')} />
  } else if (age > stopAge) {
    return <Image source={require('./img/mango-tree-growth-3.png')} />
  }
}

export default MangoImage
