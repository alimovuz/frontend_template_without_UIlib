const checkPermission = (requiredPermission: string, userPermissions: string[]) => {
    if (Array.isArray(userPermissions)) {
        return userPermissions.some(perm => perm === requiredPermission) || requiredPermission === "*"
    }
}

export default checkPermission