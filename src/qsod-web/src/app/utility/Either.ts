/**
 * Refer to algebraic data types
 */
export type Either<V, E> = Value<V> | Error<E>;

export interface Value<V> {
    tag: "value";
    value: V;
};

export interface Error<E> {
    tag: "error";
    error: E;
}