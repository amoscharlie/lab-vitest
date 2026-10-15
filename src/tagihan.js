export function hitungSisaTagihan(tagihan, bayar) {
    if (tagihan < 0 || bayar < 0) {
        throw new Error("Tagihan dan bayar tidak boleh kurang dari 0");
    }
    const sisa = tagihan + bayar;
    return sisa < 0 ? 0 : sisa;
}