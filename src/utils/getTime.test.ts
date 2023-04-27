import { getTime } from "./getTime";

describe("getTime function", () => {
  it("returns the elapsed time in days", () => {
    const now = new Date();
    const twoDaysAgo = new Date(now.setDate(now.getDate() - 2));
    expect(getTime(twoDaysAgo)).toEqual({ info: 2, nickname: "days" });
  });

  it("returns the elapsed time in hours", () => {
    const now = new Date();
    const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    expect(getTime(twoHoursAgo)).toEqual({ info: 2, nickname: "hours" });
  });

  it("returns the elapsed time in minutes", () => {
    const now = new Date();
    const twoMinutesAgo = new Date(now.getTime() - 2 * 60 * 1000);
    expect(getTime(twoMinutesAgo)).toEqual({ info: 2, nickname: "minutes" });
  });

  it("returns the elapsed time in seconds", () => {
    const now = new Date();
    const twoSecondsAgo = new Date(now.getTime() - 2 * 1000);
    expect(getTime(twoSecondsAgo)).toEqual({ info: 2, nickname: "seconds" });
  });
});
