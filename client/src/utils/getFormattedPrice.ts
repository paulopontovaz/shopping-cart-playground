export const getFormattedPrice = (price: number | null) => {
  if (!price) return "-";
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};
