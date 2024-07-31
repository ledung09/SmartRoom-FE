export default class TimeUtil {
  static convertUtcToLocalDate(utcString: string, timeZone: string): string {
    const utcDate = new Date(utcString);

    const formatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: timeZone,
    });

    const formattedDate = formatter.format(utcDate);
    const [day, month, year] = formattedDate.split("/");
    return `${day}/${month}/${year}`;
  }
}
