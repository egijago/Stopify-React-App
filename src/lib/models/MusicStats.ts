export interface MusicStats {
  id: number
  title: string
  likedCount: number
  listener: {
    month: number
    count: number
  }[]
}
