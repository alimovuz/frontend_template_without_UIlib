const formatCardNumber = (raw: string): string => {
    const cleaned = raw.replace(/\D/g, '').slice(0, 16);
    return cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
};

const formatExpiry = (raw: string): string => {
    const cleaned = raw.replace(/\D/g, '').slice(0, 4);
    if (cleaned.length >= 3) {
        return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
};

export { formatCardNumber, formatExpiry }