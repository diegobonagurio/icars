import { ICarDTO } from '@dtos/carDTO'

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
