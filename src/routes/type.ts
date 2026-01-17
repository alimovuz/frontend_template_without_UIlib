import type { ComponentType, LazyExoticComponent, SVGProps } from "react"

type TypeRoutesSubMenu = {
    name: string
    path: string
    component: LazyExoticComponent<ComponentType>
    config: {
        permission: string,
        icon?: React.ComponentType<SVGProps<SVGSVGElement>>
        structure: 'layout' | 'nolayout'
        isMenu: boolean
        allowed_roles?: Array<string>
    }
}

type a<T> = T & {submenu?: T[]}

type b<T> = T & {submenu?: a<T>[]}

export type TypeRoutes = b<TypeRoutesSubMenu>