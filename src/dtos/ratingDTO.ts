export interface IRatingDTO {
  total: number
  average: number | null
  data: {
    id: number
    author: string
    content: string
    note: number
    created_at: string
    vehicleId: number
  }[]
}
