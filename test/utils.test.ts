import { BRANDS, GIFT_CARDS, CUSTOMERS } from "../src/db";
import {
  findBrandDetails,
  findConsumerCount,
  findGiftCardDetails,
} from "../src/utils";

describe("TEST util functions", () => {
  beforeEach(() => {
    BRANDS.length = 0;
    GIFT_CARDS.length = 0;
    CUSTOMERS.length = 0;
  });

  describe("TEST findBrandDetails function", () => {
    const brandDetails = {
      name: "test brand",
      discountRate: 10,
    };
    beforeEach(() => {
      BRANDS.push(brandDetails);
    });

    it("SHOULD find the brand", () => {
      const result = findBrandDetails("test brand");
      expect(result).toBe(brandDetails);
    });

    it("SHOULD throw error for a non-existent brand", () => {
      try {
        const result = findBrandDetails("non-existent brand");
        expect(result).toBeUndefined();
      } catch (e) {
        expect((e as Error).message).toEqual("Brand can not be found");
      }
    });
  });

  describe("TEST findConsumerCount function", () => {
    const customerWithConsumers = {
      name: "test customer",
      consumers: ["c1", "c2", "c3", "c4", "c5"],
    };
    const customerWithoutConsumers = {
      name: "test customer without consumers",
      consumers: [],
    };
    beforeEach(() => {
      CUSTOMERS.push(...[customerWithConsumers, customerWithoutConsumers]);
    });

    it("SHOULD find the consumer count", () => {
      const result = findConsumerCount("test customer");
      expect(result).toBe(customerWithConsumers.consumers.length);
    });

    it("SHOULD find the consumer count for a customer without consumers", () => {
      const result = findConsumerCount("test customer without consumers");
      expect(result).toBe(0);
    });

    it("SHOULD throw error for a non-existent consumer", () => {
      try {
        const result = findConsumerCount("non-existent consumer");
        expect(result).toBeUndefined();
      } catch (e) {
        expect((e as Error).message).toEqual("Customer can not be found");
      }
    });
  });

  describe("TEST findGiftCardDetails function", () => {
    const giftCardDetails = {
      name: "test gift card",
      faceValue: 10,
      brand: "test brand",
    };
    beforeEach(() => {
      GIFT_CARDS.push(giftCardDetails);
    });

    it("SHOULD find the gift card details", () => {
      const result = findGiftCardDetails("test gift card");
      expect(result).toBe(giftCardDetails);
    });

    it("SHOULD throw error for a non-existent gift card", () => {
      try {
        const result = findGiftCardDetails("non-existent gift card");
        expect(result).toBeUndefined();
      } catch (e) {
        expect((e as Error).message).toEqual("Gift card can not be found");
      }
    });
  });
});
