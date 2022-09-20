import { ICarDTO } from '@dtos/CarDTO'

type RootStackParamList = {
  Home: undefined
  Details: {
    car: ICarDTO
  }
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
