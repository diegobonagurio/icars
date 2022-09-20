interface IVehicleImages {
  id: number
  url: string
  created_at: string
  vehicleId: number
}

export interface ICarDTO {
  id: number
  vehicleImages: IVehicleImages[]
  name: string
  year: string
  categoryId: number
}
