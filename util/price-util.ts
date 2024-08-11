export default class PriceUtil {
  static priceCommaSeperation(price: number | undefined): string {
    if (price === undefined) return "";
    return price.toLocaleString("en-US");
  }

  static soldNumberReduce(num: number | undefined): string {
    if (num === undefined) return "";
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num.toString();
    }
  }
}
