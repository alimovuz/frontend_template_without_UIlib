const formatPinflNumber = (raw: string): string => {
    const cleaned = raw.replace(/\D/g, '').slice(0, 16);
    return cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
};

export { formatPinflNumber }