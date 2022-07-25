import { BRANDS, CUSTOMERS, GIFT_CARDS } from "./db";

export const findConsumerCount = (customerName: string) => {
  const customer = CUSTOMERS.find((c) => c.name === customerName);
  if (customer === undefined) {
    throw new Error("Customer can not be found");
  }
  return customer.consumers.length;
};

export const findGiftCardDetails = (giftCardName: string) => {
  const giftCard = GIFT_CARDS.find((g) => g.name === giftCardName);
  if (giftCard === undefined) {
    throw new Error("Gift card can not be found");
  }
  return giftCard;
};

export const findBrandDetails = (brandName: string) => {
  const brand = BRANDS.find((b) => b.name === brandName);
  if (brand === undefined) {
    throw new Error("Brand can not be found");
  }
  return brand;
};
