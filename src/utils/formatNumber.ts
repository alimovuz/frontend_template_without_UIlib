export const formatNumber = (num: number | string, format?:string): string => {
  return new Intl.NumberFormat(format || 'ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num ? Number(num) : 0);
};