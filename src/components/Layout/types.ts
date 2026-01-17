import type { ComponentType, SVGProps } from "react"

interface MenuProp {
  key: string
  icon: ComponentType<SVGProps<SVGSVGElement>> | undefined
  label: string
  children?: MenuProp[]
}

export type {MenuProp}