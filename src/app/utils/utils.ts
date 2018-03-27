/***
 * Returns the passed string in a better format to compare with another string
 * @param {string} dirtyString
 * @return {string}
 */
export function cleanString(dirtyString:string):string{
  return dirtyString.trim().toLowerCase();
}
