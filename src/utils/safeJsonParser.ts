const safeParse = (jsonString: string | null | undefined) => {
    try {
        if (!jsonString) return [];
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('JSON parse error:', error);
        return [];
    }
};

export { safeParse }