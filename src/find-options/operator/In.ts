import {FindOperator} from "../FindOperator";

/**
 * Find Options Operator.
 * Example: { someField: In([...]) }
 */
export function In<T>(value: T[]|FindOperator<T>): FindOperator<any> {
    return new FindOperator("in", value as any, true, true);
}
