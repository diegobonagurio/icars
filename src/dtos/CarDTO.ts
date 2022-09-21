export interface IVehicleImages {
  id: number
  url: string
  created_at: string
  vehicleId: number
}

export interface ICarDTO {
  id: number
  vehicleImages: IVehicleImages[]
  name: string
  description: string
  year: string
  categoryId: number
}
