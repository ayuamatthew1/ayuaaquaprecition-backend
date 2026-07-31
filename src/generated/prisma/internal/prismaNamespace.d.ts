import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.9.1
 * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | ({
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O) : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: 'User';
    readonly Farm: 'Farm';
    readonly Pond: 'Pond';
    readonly FishBatch: 'FishBatch';
    readonly Device: 'Device';
    readonly Purchase: 'Purchase';
    readonly SensorReading: 'SensorReading';
    readonly FeedingSchedule: 'FeedingSchedule';
    readonly FeedHistory: 'FeedHistory';
    readonly Alert: 'Alert';
    readonly WaterQualityPrediction: 'WaterQualityPrediction';
    readonly DiseasePrediction: 'DiseasePrediction';
    readonly Notification: 'Notification';
    readonly Subscription: 'Subscription';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "farm" | "pond" | "fishBatch" | "device" | "purchase" | "sensorReading" | "feedingSchedule" | "feedHistory" | "alert" | "waterQualityPrediction" | "diseasePrediction" | "notification" | "subscription";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Farm: {
            payload: Prisma.$FarmPayload<ExtArgs>;
            fields: Prisma.FarmFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FarmFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FarmFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>;
                };
                findFirst: {
                    args: Prisma.FarmFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FarmFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>;
                };
                findMany: {
                    args: Prisma.FarmFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>[];
                };
                create: {
                    args: Prisma.FarmCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>;
                };
                createMany: {
                    args: Prisma.FarmCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FarmCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>[];
                };
                delete: {
                    args: Prisma.FarmDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>;
                };
                update: {
                    args: Prisma.FarmUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>;
                };
                deleteMany: {
                    args: Prisma.FarmDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FarmUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FarmUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>[];
                };
                upsert: {
                    args: Prisma.FarmUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmPayload>;
                };
                aggregate: {
                    args: Prisma.FarmAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFarm>;
                };
                groupBy: {
                    args: Prisma.FarmGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FarmGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FarmCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FarmCountAggregateOutputType> | number;
                };
            };
        };
        Pond: {
            payload: Prisma.$PondPayload<ExtArgs>;
            fields: Prisma.PondFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PondFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PondFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>;
                };
                findFirst: {
                    args: Prisma.PondFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PondFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>;
                };
                findMany: {
                    args: Prisma.PondFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>[];
                };
                create: {
                    args: Prisma.PondCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>;
                };
                createMany: {
                    args: Prisma.PondCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PondCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>[];
                };
                delete: {
                    args: Prisma.PondDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>;
                };
                update: {
                    args: Prisma.PondUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>;
                };
                deleteMany: {
                    args: Prisma.PondDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PondUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PondUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>[];
                };
                upsert: {
                    args: Prisma.PondUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PondPayload>;
                };
                aggregate: {
                    args: Prisma.PondAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePond>;
                };
                groupBy: {
                    args: Prisma.PondGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PondGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PondCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PondCountAggregateOutputType> | number;
                };
            };
        };
        FishBatch: {
            payload: Prisma.$FishBatchPayload<ExtArgs>;
            fields: Prisma.FishBatchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FishBatchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FishBatchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>;
                };
                findFirst: {
                    args: Prisma.FishBatchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FishBatchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>;
                };
                findMany: {
                    args: Prisma.FishBatchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>[];
                };
                create: {
                    args: Prisma.FishBatchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>;
                };
                createMany: {
                    args: Prisma.FishBatchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FishBatchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>[];
                };
                delete: {
                    args: Prisma.FishBatchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>;
                };
                update: {
                    args: Prisma.FishBatchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>;
                };
                deleteMany: {
                    args: Prisma.FishBatchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FishBatchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FishBatchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>[];
                };
                upsert: {
                    args: Prisma.FishBatchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FishBatchPayload>;
                };
                aggregate: {
                    args: Prisma.FishBatchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFishBatch>;
                };
                groupBy: {
                    args: Prisma.FishBatchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FishBatchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FishBatchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FishBatchCountAggregateOutputType> | number;
                };
            };
        };
        Device: {
            payload: Prisma.$DevicePayload<ExtArgs>;
            fields: Prisma.DeviceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                findFirst: {
                    args: Prisma.DeviceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                findMany: {
                    args: Prisma.DeviceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                create: {
                    args: Prisma.DeviceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                createMany: {
                    args: Prisma.DeviceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                delete: {
                    args: Prisma.DeviceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                update: {
                    args: Prisma.DeviceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                upsert: {
                    args: Prisma.DeviceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                aggregate: {
                    args: Prisma.DeviceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDevice>;
                };
                groupBy: {
                    args: Prisma.DeviceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceCountAggregateOutputType> | number;
                };
            };
        };
        Purchase: {
            payload: Prisma.$PurchasePayload<ExtArgs>;
            fields: Prisma.PurchaseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PurchaseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                findFirst: {
                    args: Prisma.PurchaseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                findMany: {
                    args: Prisma.PurchaseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>[];
                };
                create: {
                    args: Prisma.PurchaseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                createMany: {
                    args: Prisma.PurchaseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>[];
                };
                delete: {
                    args: Prisma.PurchaseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                update: {
                    args: Prisma.PurchaseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                deleteMany: {
                    args: Prisma.PurchaseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PurchaseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>[];
                };
                upsert: {
                    args: Prisma.PurchaseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                aggregate: {
                    args: Prisma.PurchaseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchase>;
                };
                groupBy: {
                    args: Prisma.PurchaseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PurchaseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PurchaseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PurchaseCountAggregateOutputType> | number;
                };
            };
        };
        SensorReading: {
            payload: Prisma.$SensorReadingPayload<ExtArgs>;
            fields: Prisma.SensorReadingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SensorReadingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SensorReadingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>;
                };
                findFirst: {
                    args: Prisma.SensorReadingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SensorReadingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>;
                };
                findMany: {
                    args: Prisma.SensorReadingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>[];
                };
                create: {
                    args: Prisma.SensorReadingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>;
                };
                createMany: {
                    args: Prisma.SensorReadingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SensorReadingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>[];
                };
                delete: {
                    args: Prisma.SensorReadingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>;
                };
                update: {
                    args: Prisma.SensorReadingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>;
                };
                deleteMany: {
                    args: Prisma.SensorReadingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SensorReadingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SensorReadingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>[];
                };
                upsert: {
                    args: Prisma.SensorReadingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SensorReadingPayload>;
                };
                aggregate: {
                    args: Prisma.SensorReadingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSensorReading>;
                };
                groupBy: {
                    args: Prisma.SensorReadingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SensorReadingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SensorReadingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SensorReadingCountAggregateOutputType> | number;
                };
            };
        };
        FeedingSchedule: {
            payload: Prisma.$FeedingSchedulePayload<ExtArgs>;
            fields: Prisma.FeedingScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeedingScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeedingScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                findFirst: {
                    args: Prisma.FeedingScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeedingScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                findMany: {
                    args: Prisma.FeedingScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[];
                };
                create: {
                    args: Prisma.FeedingScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                createMany: {
                    args: Prisma.FeedingScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeedingScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[];
                };
                delete: {
                    args: Prisma.FeedingScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                update: {
                    args: Prisma.FeedingScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.FeedingScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeedingScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeedingScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[];
                };
                upsert: {
                    args: Prisma.FeedingScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                aggregate: {
                    args: Prisma.FeedingScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeedingSchedule>;
                };
                groupBy: {
                    args: Prisma.FeedingScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeedingScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeedingScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeedingScheduleCountAggregateOutputType> | number;
                };
            };
        };
        FeedHistory: {
            payload: Prisma.$FeedHistoryPayload<ExtArgs>;
            fields: Prisma.FeedHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeedHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeedHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.FeedHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeedHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>;
                };
                findMany: {
                    args: Prisma.FeedHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>[];
                };
                create: {
                    args: Prisma.FeedHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>;
                };
                createMany: {
                    args: Prisma.FeedHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeedHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>[];
                };
                delete: {
                    args: Prisma.FeedHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>;
                };
                update: {
                    args: Prisma.FeedHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.FeedHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeedHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeedHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.FeedHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.FeedHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeedHistory>;
                };
                groupBy: {
                    args: Prisma.FeedHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeedHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeedHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeedHistoryCountAggregateOutputType> | number;
                };
            };
        };
        Alert: {
            payload: Prisma.$AlertPayload<ExtArgs>;
            fields: Prisma.AlertFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AlertFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                findFirst: {
                    args: Prisma.AlertFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                findMany: {
                    args: Prisma.AlertFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>[];
                };
                create: {
                    args: Prisma.AlertCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                createMany: {
                    args: Prisma.AlertCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>[];
                };
                delete: {
                    args: Prisma.AlertDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                update: {
                    args: Prisma.AlertUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                deleteMany: {
                    args: Prisma.AlertDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AlertUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>[];
                };
                upsert: {
                    args: Prisma.AlertUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                aggregate: {
                    args: Prisma.AlertAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlert>;
                };
                groupBy: {
                    args: Prisma.AlertGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlertGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AlertCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlertCountAggregateOutputType> | number;
                };
            };
        };
        WaterQualityPrediction: {
            payload: Prisma.$WaterQualityPredictionPayload<ExtArgs>;
            fields: Prisma.WaterQualityPredictionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WaterQualityPredictionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WaterQualityPredictionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>;
                };
                findFirst: {
                    args: Prisma.WaterQualityPredictionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WaterQualityPredictionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>;
                };
                findMany: {
                    args: Prisma.WaterQualityPredictionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>[];
                };
                create: {
                    args: Prisma.WaterQualityPredictionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>;
                };
                createMany: {
                    args: Prisma.WaterQualityPredictionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WaterQualityPredictionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>[];
                };
                delete: {
                    args: Prisma.WaterQualityPredictionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>;
                };
                update: {
                    args: Prisma.WaterQualityPredictionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>;
                };
                deleteMany: {
                    args: Prisma.WaterQualityPredictionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WaterQualityPredictionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WaterQualityPredictionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>[];
                };
                upsert: {
                    args: Prisma.WaterQualityPredictionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WaterQualityPredictionPayload>;
                };
                aggregate: {
                    args: Prisma.WaterQualityPredictionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWaterQualityPrediction>;
                };
                groupBy: {
                    args: Prisma.WaterQualityPredictionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WaterQualityPredictionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WaterQualityPredictionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WaterQualityPredictionCountAggregateOutputType> | number;
                };
            };
        };
        DiseasePrediction: {
            payload: Prisma.$DiseasePredictionPayload<ExtArgs>;
            fields: Prisma.DiseasePredictionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DiseasePredictionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DiseasePredictionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>;
                };
                findFirst: {
                    args: Prisma.DiseasePredictionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DiseasePredictionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>;
                };
                findMany: {
                    args: Prisma.DiseasePredictionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>[];
                };
                create: {
                    args: Prisma.DiseasePredictionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>;
                };
                createMany: {
                    args: Prisma.DiseasePredictionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DiseasePredictionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>[];
                };
                delete: {
                    args: Prisma.DiseasePredictionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>;
                };
                update: {
                    args: Prisma.DiseasePredictionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>;
                };
                deleteMany: {
                    args: Prisma.DiseasePredictionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DiseasePredictionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DiseasePredictionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>[];
                };
                upsert: {
                    args: Prisma.DiseasePredictionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiseasePredictionPayload>;
                };
                aggregate: {
                    args: Prisma.DiseasePredictionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDiseasePrediction>;
                };
                groupBy: {
                    args: Prisma.DiseasePredictionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DiseasePredictionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DiseasePredictionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DiseasePredictionCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        Subscription: {
            payload: Prisma.$SubscriptionPayload<ExtArgs>;
            fields: Prisma.SubscriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findFirst: {
                    args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findMany: {
                    args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                create: {
                    args: Prisma.SubscriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                createMany: {
                    args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                delete: {
                    args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                update: {
                    args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                upsert: {
                    args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>;
                };
                groupBy: {
                    args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubscriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly firstName: 'firstName';
    readonly lastName: 'lastName';
    readonly email: 'email';
    readonly phone: 'phone';
    readonly passwordHash: 'passwordHash';
    readonly avatar: 'avatar';
    readonly role: 'role';
    readonly status: 'status';
    readonly emailVerified: 'emailVerified';
    readonly lastLoginAt: 'lastLoginAt';
    readonly passwordChangedAt: 'passwordChangedAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly deletedAt: 'deletedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const FarmScalarFieldEnum: {
    readonly id: 'id';
    readonly ownerId: 'ownerId';
    readonly name: 'name';
    readonly description: 'description';
    readonly address: 'address';
    readonly city: 'city';
    readonly state: 'state';
    readonly country: 'country';
    readonly latitude: 'latitude';
    readonly longitude: 'longitude';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum];
export declare const PondScalarFieldEnum: {
    readonly id: 'id';
    readonly farmId: 'farmId';
    readonly name: 'name';
    readonly code: 'code';
    readonly type: 'type';
    readonly status: 'status';
    readonly length: 'length';
    readonly width: 'width';
    readonly depth: 'depth';
    readonly capacity: 'capacity';
    readonly waterVolume: 'waterVolume';
    readonly notes: 'notes';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type PondScalarFieldEnum = (typeof PondScalarFieldEnum)[keyof typeof PondScalarFieldEnum];
export declare const FishBatchScalarFieldEnum: {
    readonly id: 'id';
    readonly pondId: 'pondId';
    readonly species: 'species';
    readonly breed: 'breed';
    readonly quantity: 'quantity';
    readonly averageWeight: 'averageWeight';
    readonly source: 'source';
    readonly stockedAt: 'stockedAt';
    readonly expectedHarvestDate: 'expectedHarvestDate';
    readonly harvestedAt: 'harvestedAt';
    readonly notes: 'notes';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type FishBatchScalarFieldEnum = (typeof FishBatchScalarFieldEnum)[keyof typeof FishBatchScalarFieldEnum];
export declare const DeviceScalarFieldEnum: {
    readonly id: 'id';
    readonly pondId: 'pondId';
    readonly ownerId: 'ownerId';
    readonly listedById: 'listedById';
    readonly name: 'name';
    readonly serialNumber: 'serialNumber';
    readonly firmwareVersion: 'firmwareVersion';
    readonly hardwareVersion: 'hardwareVersion';
    readonly macAddress: 'macAddress';
    readonly status: 'status';
    readonly isListed: 'isListed';
    readonly listedPrice: 'listedPrice';
    readonly installedAt: 'installedAt';
    readonly lastSeenAt: 'lastSeenAt';
    readonly batteryLevel: 'batteryLevel';
    readonly signalStrength: 'signalStrength';
    readonly ipAddress: 'ipAddress';
    readonly notes: 'notes';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum];
export declare const PurchaseScalarFieldEnum: {
    readonly id: 'id';
    readonly buyerId: 'buyerId';
    readonly deviceId: 'deviceId';
    readonly price: 'price';
    readonly status: 'status';
    readonly paymentProvider: 'paymentProvider';
    readonly paymentReference: 'paymentReference';
    readonly createdAt: 'createdAt';
    readonly completedAt: 'completedAt';
};
export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum];
export declare const SensorReadingScalarFieldEnum: {
    readonly id: 'id';
    readonly deviceId: 'deviceId';
    readonly temperature: 'temperature';
    readonly ph: 'ph';
    readonly dissolvedOxygen: 'dissolvedOxygen';
    readonly turbidity: 'turbidity';
    readonly ammonia: 'ammonia';
    readonly conductivity: 'conductivity';
    readonly salinity: 'salinity';
    readonly waterLevel: 'waterLevel';
    readonly recordedAt: 'recordedAt';
};
export type SensorReadingScalarFieldEnum = (typeof SensorReadingScalarFieldEnum)[keyof typeof SensorReadingScalarFieldEnum];
export declare const FeedingScheduleScalarFieldEnum: {
    readonly id: 'id';
    readonly pondId: 'pondId';
    readonly feedType: 'feedType';
    readonly quantity: 'quantity';
    readonly unit: 'unit';
    readonly feedTime: 'feedTime';
    readonly repeatDays: 'repeatDays';
    readonly isActive: 'isActive';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type FeedingScheduleScalarFieldEnum = (typeof FeedingScheduleScalarFieldEnum)[keyof typeof FeedingScheduleScalarFieldEnum];
export declare const FeedHistoryScalarFieldEnum: {
    readonly id: 'id';
    readonly scheduleId: 'scheduleId';
    readonly fedAt: 'fedAt';
    readonly quantity: 'quantity';
    readonly completedById: 'completedById';
    readonly notes: 'notes';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type FeedHistoryScalarFieldEnum = (typeof FeedHistoryScalarFieldEnum)[keyof typeof FeedHistoryScalarFieldEnum];
export declare const AlertScalarFieldEnum: {
    readonly id: 'id';
    readonly pondId: 'pondId';
    readonly sensorReadingId: 'sensorReadingId';
    readonly title: 'title';
    readonly message: 'message';
    readonly severity: 'severity';
    readonly status: 'status';
    readonly acknowledgedAt: 'acknowledgedAt';
    readonly resolvedAt: 'resolvedAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum];
export declare const WaterQualityPredictionScalarFieldEnum: {
    readonly id: 'id';
    readonly pondId: 'pondId';
    readonly overallScore: 'overallScore';
    readonly riskLevel: 'riskLevel';
    readonly summary: 'summary';
    readonly recommendations: 'recommendations';
    readonly confidence: 'confidence';
    readonly generatedAt: 'generatedAt';
    readonly expiresAt: 'expiresAt';
    readonly createdAt: 'createdAt';
};
export type WaterQualityPredictionScalarFieldEnum = (typeof WaterQualityPredictionScalarFieldEnum)[keyof typeof WaterQualityPredictionScalarFieldEnum];
export declare const DiseasePredictionScalarFieldEnum: {
    readonly id: 'id';
    readonly pondId: 'pondId';
    readonly disease: 'disease';
    readonly probability: 'probability';
    readonly riskLevel: 'riskLevel';
    readonly symptoms: 'symptoms';
    readonly recommendation: 'recommendation';
    readonly generatedAt: 'generatedAt';
    readonly createdAt: 'createdAt';
};
export type DiseasePredictionScalarFieldEnum = (typeof DiseasePredictionScalarFieldEnum)[keyof typeof DiseasePredictionScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly title: 'title';
    readonly message: 'message';
    readonly type: 'type';
    readonly channel: 'channel';
    readonly isRead: 'isRead';
    readonly readAt: 'readAt';
    readonly createdAt: 'createdAt';
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: 'id';
    readonly farmId: 'farmId';
    readonly plan: 'plan';
    readonly status: 'status';
    readonly billingCycle: 'billingCycle';
    readonly startsAt: 'startsAt';
    readonly endsAt: 'endsAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'UserRole'
 */
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
/**
 * Reference to a field of type 'UserRole[]'
 */
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
/**
 * Reference to a field of type 'UserStatus'
 */
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
/**
 * Reference to a field of type 'UserStatus[]'
 */
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'FarmStatus'
 */
export type EnumFarmStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FarmStatus'>;
/**
 * Reference to a field of type 'FarmStatus[]'
 */
export type ListEnumFarmStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FarmStatus[]'>;
/**
 * Reference to a field of type 'PondType'
 */
export type EnumPondTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PondType'>;
/**
 * Reference to a field of type 'PondType[]'
 */
export type ListEnumPondTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PondType[]'>;
/**
 * Reference to a field of type 'PondStatus'
 */
export type EnumPondStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PondStatus'>;
/**
 * Reference to a field of type 'PondStatus[]'
 */
export type ListEnumPondStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PondStatus[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DeviceStatus'
 */
export type EnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus'>;
/**
 * Reference to a field of type 'DeviceStatus[]'
 */
export type ListEnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus[]'>;
/**
 * Reference to a field of type 'PurchaseStatus'
 */
export type EnumPurchaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseStatus'>;
/**
 * Reference to a field of type 'PurchaseStatus[]'
 */
export type ListEnumPurchaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseStatus[]'>;
/**
 * Reference to a field of type 'PaymentProvider'
 */
export type EnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider'>;
/**
 * Reference to a field of type 'PaymentProvider[]'
 */
export type ListEnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider[]'>;
/**
 * Reference to a field of type 'FeedType'
 */
export type EnumFeedTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedType'>;
/**
 * Reference to a field of type 'FeedType[]'
 */
export type ListEnumFeedTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedType[]'>;
/**
 * Reference to a field of type 'AlertSeverity'
 */
export type EnumAlertSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertSeverity'>;
/**
 * Reference to a field of type 'AlertSeverity[]'
 */
export type ListEnumAlertSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertSeverity[]'>;
/**
 * Reference to a field of type 'AlertStatus'
 */
export type EnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus'>;
/**
 * Reference to a field of type 'AlertStatus[]'
 */
export type ListEnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus[]'>;
/**
 * Reference to a field of type 'RiskLevel'
 */
export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>;
/**
 * Reference to a field of type 'RiskLevel[]'
 */
export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>;
/**
 * Reference to a field of type 'NotificationType'
 */
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
/**
 * Reference to a field of type 'NotificationType[]'
 */
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
/**
 * Reference to a field of type 'NotificationChannel'
 */
export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>;
/**
 * Reference to a field of type 'NotificationChannel[]'
 */
export type ListEnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel[]'>;
/**
 * Reference to a field of type 'SubscriptionStatus'
 */
export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>;
/**
 * Reference to a field of type 'SubscriptionStatus[]'
 */
export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>;
/**
 * Reference to a field of type 'BillingCycle'
 */
export type EnumBillingCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingCycle'>;
/**
 * Reference to a field of type 'BillingCycle[]'
 */
export type ListEnumBillingCycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingCycle[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
}
/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 *
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl: string;
    adapter?: never;
}
/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 *
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
/**
 * Options passed to the `PrismaClient` constructor.
 *
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 *
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    farm?: Prisma.FarmOmit;
    pond?: Prisma.PondOmit;
    fishBatch?: Prisma.FishBatchOmit;
    device?: Prisma.DeviceOmit;
    purchase?: Prisma.PurchaseOmit;
    sensorReading?: Prisma.SensorReadingOmit;
    feedingSchedule?: Prisma.FeedingScheduleOmit;
    feedHistory?: Prisma.FeedHistoryOmit;
    alert?: Prisma.AlertOmit;
    waterQualityPrediction?: Prisma.WaterQualityPredictionOmit;
    diseasePrediction?: Prisma.DiseasePredictionOmit;
    notification?: Prisma.NotificationOmit;
    subscription?: Prisma.SubscriptionOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map