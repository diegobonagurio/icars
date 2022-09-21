import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 48px;

  justify-content: center;
  align-items: center;

  border-radius: 48px;

  margin-top: 12px;

  background-color: ${({ theme }) => theme.COLORS.brand[100]};
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.background[100]};
`
