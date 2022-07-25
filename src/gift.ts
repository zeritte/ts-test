import {
  findBrandDetails,
  findConsumerCount,
  findGiftCardDetails,
} from "./utils";

export const totalCostCalculator = (customerName: string, giftCardName: string) => {
  const consumerCount = findConsumerCount(customerName);
  const giftCardDetails = findGiftCardDetails(giftCardName);
  const brand = findBrandDetails(giftCardDetails.brand);

  const discountRate = brand.discountRate;
  const faceValue = giftCardDetails.faceValue;
  const cost = faceValue - (faceValue * discountRate) / 100;
  const totalCost = consumerCount * cost;

  return totalCost;
};
