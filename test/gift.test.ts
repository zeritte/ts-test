import { GIFT_CARDS } from "../src/db";
import { calculator } from "../src/gift";

// jest.mock("../src/gift", () => ({
//   ...jest.requireActual("../src/gift"),
//   findGiftCardDetails: jest.fn(),
// }));
// const mockedFindGiftCardDetails = findGiftCardDetails as jest.MockedFunction<
//   typeof findGiftCardDetails
// >;

describe("TEST Amazon $30 'New mobile phone package gift card'", () => {
  describe("WHEN Vodafone uses it", () => {
    it("SHOULD cost $72", () => {
      const result = calculator("Vodafone", "New mobile phone package");
      expect(result).toBe(72);
    });
  });

  describe("WHEN WeWork uses it", () => {
    it("SHOULD cost $96", () => {
      const result = calculator("WeWork", "New mobile phone package");
      expect(result).toBe(96);
    });
  });
});

describe("TEST Tesco $100 'Tesco loyalty card'", () => {
  describe("WHEN Vodafone uses it", () => {
    it("SHOULD cost $270", () => {
      const result = calculator("Vodafone", "Tesco loyalty card");
      expect(result).toBe(270);
    });
  });

  describe("WHEN WeWork uses it", () => {
    it("SHOULD cost $360", () => {
      const result = calculator("WeWork", "Tesco loyalty card");
      expect(result).toBe(360);
    });
  });
});

describe("TEST non-existent cases", () => {
  describe("WHEN customer DOES NOT exist", () => {
    it("SHOULD throw an error", () => {
      try {
        const result = calculator(
          "non-existent customer",
          "New mobile phone package"
        );
        expect(result).toBeUndefined();
      } catch (e) {
        expect((e as Error).message).toEqual("Customer can not be found");
      }
    });
  });

  describe("WHEN gift card DOES NOT exist", () => {
    it("SHOULD throw an error", () => {
      try {
        const result = calculator("Vodafone", "non-existent gift card");
        expect(result).toBeUndefined();
      } catch (e) {
        expect((e as Error).message).toEqual("Gift card can not be found");
      }
    });
  });

  describe("WHEN brand of the gift card DOES NOT exist", () => {
    GIFT_CARDS.push({
      name: "Brandless gift card",
      brand: "non-existent brand",
      faceValue: 100,
    });

    it("SHOULD throw an error", () => {
      try {
        const result = calculator("WeWork", "Brandless gift card");
        expect(result).toBeUndefined();
      } catch (e) {
        expect((e as Error).message).toEqual("Brand can not be found");
      }
    });
  });
});
