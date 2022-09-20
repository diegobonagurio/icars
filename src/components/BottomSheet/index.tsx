import React, { forwardRef } from 'react'

import { useTheme } from 'styled-components/native'

import { Modalize, ModalizeProps } from 'react-native-modalize'
import { Easing } from 'react-native-reanimated'

const animationConfig = {
  duration: 400,
  easing: Easing.inOut(Easing.ease)
}

const BottomSheetBase: React.ForwardRefRenderFunction<
  Modalize,
  ModalizeProps
> = ({ children, ...rest }, ref) => {
  const { COLORS } = useTheme()

  return (
    <Modalize
      ref={ref}
      modalStyle={{
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,

        backgroundColor: COLORS.background[100]
      }}
      handlePosition="inside"
      handleStyle={{
        width: 56,
        height: 3,

        top: 16,

        backgroundColor: COLORS.gray[500]
      }}
      scrollViewProps={{
        scrollEnabled: false
      }}
      openAnimationConfig={{ timing: animationConfig }}
      closeAnimationConfig={{ timing: animationConfig }}
      adjustToContentHeight
      {...rest}
    >
      {children}
    </Modalize>
  )
}

export const BottomSheet = forwardRef(BottomSheetBase)
