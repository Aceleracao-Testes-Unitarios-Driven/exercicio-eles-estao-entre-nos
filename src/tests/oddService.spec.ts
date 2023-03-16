import { jest } from "@jest/globals";
import { oddService } from "../services/oddService";
import { secretService } from "../_secret_/secretService";
import { areaFiftyOneRepository } from "../repositories/areaFiftyOneRepository";

describe("Odd Service", () => {
  it("should return 'maybe not, who knows?' given its odd", () => {
    const oddNumber = 1;
    jest.spyOn(secretService, "isOdd").mockReturnValue(true);
    const result = oddService.isReallyOdd(oddNumber);
    expect(result).toEqual("maybe not, who knows?");
  });

  it("should return 'Im not sure...' given its even", () => {
    const oddNumber = 2;
    jest.spyOn(secretService, "isOdd").mockReturnValue(false);
    const result = oddService.isReallyOdd(oddNumber);
    expect(result).toEqual("Im not sure...");
  });

  it("should return an Ovni array", async () => {
    const expectedResult = [];

    jest
      .spyOn(areaFiftyOneRepository, "listOVNIS")
      .mockResolvedValue(expectedResult);

    const result = await oddService.listOVNIS();

    expect(result).toEqual(expectedResult);
  });
});
