import type { ComponentType, SVGProps } from "react"
import type { TypeRoutes } from "@/routes/type"
import checkPermission from "@/utils/check_permission"
import checkRole from "@/utils/check_role"
import useAuth from "@/hooks/useAuth"

type MenuProp = {
  key: string,
  icon: ComponentType<SVGProps<SVGSVGElement>> | undefined,
  label: string,
  children?: MenuProp[]
}

const renderMenuItems = (menuItems: TypeRoutes[]): MenuProp[] => {
  const {permissions, role} = useAuth()
  return menuItems.map((menuItem: TypeRoutes) => {
    if (menuItem.submenu && menuItem.submenu.length > 0 && menuItem?.config?.isMenu) {
      return ({
        key: menuItem.path,
        icon: menuItem.config.icon,
        label: menuItem.name,
        children: renderMenuItems(menuItem.submenu)
      });
    } else if ((checkPermission(menuItem.config.permission, permissions) || checkRole(menuItem.config.allowed_roles, role)) && menuItem?.config?.isMenu) {
      return {
        key: menuItem.path,
        icon: menuItem.config.icon,
        label: menuItem.name
      }
    }
    return undefined;
  }).filter((item) => item !== undefined);
};

export function AppSidebar() {

  return (<div className="w-80 bg-white border-r shadow-xs"></div>)
}