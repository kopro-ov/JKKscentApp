import React from 'react'
import { Platform } from 'react-native'
import Styled from 'styled-components/native'

import SubTitle from './components/SubTitle/SubTitle'

const Container = Styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4B7EFF;
  height: 100%;
  width: 100%;
`

const Title = Styled.Text`
  color: white;
  font-size: 32px;
  font-weight: bold;
`

export function App() {
  return (
    <Container>
      <Title>REACT NATIVE WEB</Title>
      <SubTitle />
    </Container>
  )
}