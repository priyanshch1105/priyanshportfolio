export type Achievement = {
  value: number
  suffix: string
  title: string
  detail: string
}

export const achievements: Achievement[] = [
  {
    value: 12,
    suffix: "+",
    title: "Hackathons",
    detail: "Shipped under pressure, constantly.",
  },
  {
    value: 2,
    suffix: "",
    title: "National Semifinalist",
    detail: "Selected among the country's best builders.",
  },
  {
    value: 1,
    suffix: "",
    title: "Patent",
    detail: "A filed invention in intelligent product systems.",
  },
  {
    value: 1,
    suffix: "",
    title: "Trademark",
    detail: "A protected brand identity in development.",
  },
  {
    value: 6,
    suffix: "",
    title: "Products Built",
    detail: "From idea to shipped, alone and with teams.",
  },
]
