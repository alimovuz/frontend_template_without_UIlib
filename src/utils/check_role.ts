const checkRole = (requiredRoles: string[] | undefined, userRole: string | null) => {
    if (Array.isArray(requiredRoles)) {
        return requiredRoles.some(role => role === userRole) || requiredRoles.includes("*")
    }
}

export default checkRole