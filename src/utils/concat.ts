import { isNull, isUndefined } from ".";
import { NullOfUndefinedError } from "../errors/NullOfUndefinedError";

export function concat(params: (string | number)[]): string {
    for (const param of params) {
      if (isNull(param) || isUndefined(param)) {
        throw new NullOfUndefinedError();
      }
    }
  
    const result = params.map(param => {
      if (typeof param === 'number') {
        return param.toString();
      }
      return param;
    }).join('');
  
    return result;
}