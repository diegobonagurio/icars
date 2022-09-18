import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
`

export const Brand = styled.View`
  width: 38px;
  height: 38px;

  justify-content: center;
  align-items: center;

  margin-right: 16px;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.COLORS.background[100]};
`

export const Information = styled.View``

export const Name = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.background[100]};

  margin-bottom: 2px;
`

export const Year = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.gray[100]};
`
