export type ReviewType = {
  text: string
  answer: ReviewType|undefined
}

export type PostType = {
  image_src: string
  title: string
  descript: string
  description: string
  date: Date
  compact: boolean
  review: ReviewType
}
