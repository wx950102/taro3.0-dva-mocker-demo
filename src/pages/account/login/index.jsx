import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {connect} from 'react-redux'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello login!</Text>
      </View>
    )
  }
}

export default connect(({index})=>({index}))(Index);