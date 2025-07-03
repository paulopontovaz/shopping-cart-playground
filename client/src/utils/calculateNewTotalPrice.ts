export const calculateNewTotalPrice = (
  unitPrice: number,
  purchasedQuantity: number,
  offerPrice: number | null,
  offerQuantity: number | null,
) => {
  if (!offerPrice || !offerQuantity) return unitPrice * purchasedQuantity;

  const ratio = Math.floor(purchasedQuantity / offerQuantity);
  const remainder = purchasedQuantity % offerQuantity;
  const totalOfferPrice = ratio * offerPrice;
  const totalNonOfferPrice = remainder * unitPrice;
  const totalPrice = totalNonOfferPrice + totalOfferPrice;

  return totalPrice;
};
