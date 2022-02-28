import { Bookmark } from "src/core/domain/bookmark/bookmark";

const titleList = ["eeee", "ttttt"];
const urlList = ["https://naver.com", "https://google.com"];
const getRandomTitleItem = () => titleList[Math.round(Math.random())];
const getRandomUrlItem = () => urlList[Math.round(Math.random())];

export const bookmarkItems: Bookmark[] = new Array(20).fill(0).map((_, i) => new Bookmark(
  undefined,
  (i + 1).toString(),
 `${i + 1}. ${getRandomTitleItem()}`,
  getRandomUrlItem()
));
