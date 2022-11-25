export class StringHelpers {
  static firstLetterUppercase(str: string): string {
    const lowerStr = str.toLowerCase();
    return `${lowerStr.charAt(0).toUpperCase()}${lowerStr.slice(1)}`;
  }

  static generateRandomIntegers(integerLength: number): number {
    const characters = '0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < integerLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return parseInt(result, 10);
  }
}
