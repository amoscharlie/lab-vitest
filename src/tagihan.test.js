import { describe, it, expect } from "vitest";
import { hitungSisaTagihan } from "./tagihan.js";

describe("hitungSisaTagihan", () => {
  it("mengurangi tagihan dengan pembayaran", () => {
    expect(hitungSisaTagihan(1_000_000, 400_000)).toBe(600_000);
  });

  it("sisa sama dengan tagihan jika belum bayar sama sekali", () => {
    expect(hitungSisaTagihan(1_000_000, 0)).toBe(1_000_000);
  });

  it("sisa 0 jika bayar sama persis dengan tagihan", () => {
    expect(hitungSisaTagihan(1_000_000, 1_000_000)).toBe(0);
  });

  it("menolak pembayaran negatif", () => {
    expect(() => hitungSisaTagihan(1_000_000, -1)).toThrow("kurang dari 0");
  });

  it("menolak tagihan negatif", () => {
    expect(() => hitungSisaTagihan(-1, 0)).toThrow("kurang dari 0");
  });
});