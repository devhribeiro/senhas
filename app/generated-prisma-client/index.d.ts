
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Guiche
 * 
 */
export type Guiche = $Result.DefaultSelection<Prisma.$GuichePayload>
/**
 * Model SenhaChamada
 * 
 */
export type SenhaChamada = $Result.DefaultSelection<Prisma.$SenhaChamadaPayload>
/**
 * Model Configuracao
 * 
 */
export type Configuracao = $Result.DefaultSelection<Prisma.$ConfiguracaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guiche`: Exposes CRUD operations for the **Guiche** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guiches
    * const guiches = await prisma.guiche.findMany()
    * ```
    */
  get guiche(): Prisma.GuicheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.senhaChamada`: Exposes CRUD operations for the **SenhaChamada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SenhaChamadas
    * const senhaChamadas = await prisma.senhaChamada.findMany()
    * ```
    */
  get senhaChamada(): Prisma.SenhaChamadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracao`: Exposes CRUD operations for the **Configuracao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracaos
    * const configuracaos = await prisma.configuracao.findMany()
    * ```
    */
  get configuracao(): Prisma.ConfiguracaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Guiche: 'Guiche',
    SenhaChamada: 'SenhaChamada',
    Configuracao: 'Configuracao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "guiche" | "senhaChamada" | "configuracao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Guiche: {
        payload: Prisma.$GuichePayload<ExtArgs>
        fields: Prisma.GuicheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuicheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuicheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          findFirst: {
            args: Prisma.GuicheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuicheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          findMany: {
            args: Prisma.GuicheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          create: {
            args: Prisma.GuicheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          createMany: {
            args: Prisma.GuicheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuicheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          delete: {
            args: Prisma.GuicheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          update: {
            args: Prisma.GuicheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          deleteMany: {
            args: Prisma.GuicheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuicheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuicheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          upsert: {
            args: Prisma.GuicheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          aggregate: {
            args: Prisma.GuicheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuiche>
          }
          groupBy: {
            args: Prisma.GuicheGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuicheGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuicheCountArgs<ExtArgs>
            result: $Utils.Optional<GuicheCountAggregateOutputType> | number
          }
        }
      }
      SenhaChamada: {
        payload: Prisma.$SenhaChamadaPayload<ExtArgs>
        fields: Prisma.SenhaChamadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SenhaChamadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SenhaChamadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>
          }
          findFirst: {
            args: Prisma.SenhaChamadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SenhaChamadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>
          }
          findMany: {
            args: Prisma.SenhaChamadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>[]
          }
          create: {
            args: Prisma.SenhaChamadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>
          }
          createMany: {
            args: Prisma.SenhaChamadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SenhaChamadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>[]
          }
          delete: {
            args: Prisma.SenhaChamadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>
          }
          update: {
            args: Prisma.SenhaChamadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>
          }
          deleteMany: {
            args: Prisma.SenhaChamadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SenhaChamadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SenhaChamadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>[]
          }
          upsert: {
            args: Prisma.SenhaChamadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaChamadaPayload>
          }
          aggregate: {
            args: Prisma.SenhaChamadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSenhaChamada>
          }
          groupBy: {
            args: Prisma.SenhaChamadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SenhaChamadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SenhaChamadaCountArgs<ExtArgs>
            result: $Utils.Optional<SenhaChamadaCountAggregateOutputType> | number
          }
        }
      }
      Configuracao: {
        payload: Prisma.$ConfiguracaoPayload<ExtArgs>
        fields: Prisma.ConfiguracaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          findMany: {
            args: Prisma.ConfiguracaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          create: {
            args: Prisma.ConfiguracaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          createMany: {
            args: Prisma.ConfiguracaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfiguracaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          delete: {
            args: Prisma.ConfiguracaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          update: {
            args: Prisma.ConfiguracaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfiguracaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          upsert: {
            args: Prisma.ConfiguracaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracao>
          }
          groupBy: {
            args: Prisma.ConfiguracaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracaoCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    guiche?: GuicheOmit
    senhaChamada?: SenhaChamadaOmit
    configuracao?: ConfiguracaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GuicheCountOutputType
   */

  export type GuicheCountOutputType = {
    usuarios: number
  }

  export type GuicheCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | GuicheCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * GuicheCountOutputType without action
   */
  export type GuicheCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuicheCountOutputType
     */
    select?: GuicheCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuicheCountOutputType without action
   */
  export type GuicheCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    guicheId: string | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    guicheId: string | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    username: number
    password: number
    guicheId: number
    createdAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    guicheId?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    guicheId?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    guicheId?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    username: string
    password: string
    guicheId: string | null
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    guicheId?: boolean
    createdAt?: boolean
    guiche?: boolean | Usuario$guicheArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    guicheId?: boolean
    createdAt?: boolean
    guiche?: boolean | Usuario$guicheArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    guicheId?: boolean
    createdAt?: boolean
    guiche?: boolean | Usuario$guicheArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    guicheId?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "guicheId" | "createdAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guiche?: boolean | Usuario$guicheArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guiche?: boolean | Usuario$guicheArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guiche?: boolean | Usuario$guicheArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      guiche: Prisma.$GuichePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      guicheId: string | null
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guiche<T extends Usuario$guicheArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$guicheArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly guicheId: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.guiche
   */
  export type Usuario$guicheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    where?: GuicheWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Guiche
   */

  export type AggregateGuiche = {
    _count: GuicheCountAggregateOutputType | null
    _min: GuicheMinAggregateOutputType | null
    _max: GuicheMaxAggregateOutputType | null
  }

  export type GuicheMinAggregateOutputType = {
    id: string | null
    numero: string | null
    nome: string | null
    usuarioId: string | null
    createdAt: Date | null
  }

  export type GuicheMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    nome: string | null
    usuarioId: string | null
    createdAt: Date | null
  }

  export type GuicheCountAggregateOutputType = {
    id: number
    numero: number
    nome: number
    usuarioId: number
    createdAt: number
    _all: number
  }


  export type GuicheMinAggregateInputType = {
    id?: true
    numero?: true
    nome?: true
    usuarioId?: true
    createdAt?: true
  }

  export type GuicheMaxAggregateInputType = {
    id?: true
    numero?: true
    nome?: true
    usuarioId?: true
    createdAt?: true
  }

  export type GuicheCountAggregateInputType = {
    id?: true
    numero?: true
    nome?: true
    usuarioId?: true
    createdAt?: true
    _all?: true
  }

  export type GuicheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guiche to aggregate.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guiches
    **/
    _count?: true | GuicheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuicheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuicheMaxAggregateInputType
  }

  export type GetGuicheAggregateType<T extends GuicheAggregateArgs> = {
        [P in keyof T & keyof AggregateGuiche]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuiche[P]>
      : GetScalarType<T[P], AggregateGuiche[P]>
  }




  export type GuicheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuicheWhereInput
    orderBy?: GuicheOrderByWithAggregationInput | GuicheOrderByWithAggregationInput[]
    by: GuicheScalarFieldEnum[] | GuicheScalarFieldEnum
    having?: GuicheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuicheCountAggregateInputType | true
    _min?: GuicheMinAggregateInputType
    _max?: GuicheMaxAggregateInputType
  }

  export type GuicheGroupByOutputType = {
    id: string
    numero: string
    nome: string
    usuarioId: string | null
    createdAt: Date
    _count: GuicheCountAggregateOutputType | null
    _min: GuicheMinAggregateOutputType | null
    _max: GuicheMaxAggregateOutputType | null
  }

  type GetGuicheGroupByPayload<T extends GuicheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuicheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuicheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuicheGroupByOutputType[P]>
            : GetScalarType<T[P], GuicheGroupByOutputType[P]>
        }
      >
    >


  export type GuicheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    nome?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    usuarios?: boolean | Guiche$usuariosArgs<ExtArgs>
    _count?: boolean | GuicheCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    nome?: boolean
    usuarioId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    nome?: boolean
    usuarioId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectScalar = {
    id?: boolean
    numero?: boolean
    nome?: boolean
    usuarioId?: boolean
    createdAt?: boolean
  }

  export type GuicheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "nome" | "usuarioId" | "createdAt", ExtArgs["result"]["guiche"]>
  export type GuicheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Guiche$usuariosArgs<ExtArgs>
    _count?: boolean | GuicheCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuicheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuicheIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuichePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guiche"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string
      nome: string
      usuarioId: string | null
      createdAt: Date
    }, ExtArgs["result"]["guiche"]>
    composites: {}
  }

  type GuicheGetPayload<S extends boolean | null | undefined | GuicheDefaultArgs> = $Result.GetResult<Prisma.$GuichePayload, S>

  type GuicheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuicheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuicheCountAggregateInputType | true
    }

  export interface GuicheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guiche'], meta: { name: 'Guiche' } }
    /**
     * Find zero or one Guiche that matches the filter.
     * @param {GuicheFindUniqueArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuicheFindUniqueArgs>(args: SelectSubset<T, GuicheFindUniqueArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guiche that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuicheFindUniqueOrThrowArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuicheFindUniqueOrThrowArgs>(args: SelectSubset<T, GuicheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guiche that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindFirstArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuicheFindFirstArgs>(args?: SelectSubset<T, GuicheFindFirstArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guiche that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindFirstOrThrowArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuicheFindFirstOrThrowArgs>(args?: SelectSubset<T, GuicheFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guiches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guiches
     * const guiches = await prisma.guiche.findMany()
     * 
     * // Get first 10 Guiches
     * const guiches = await prisma.guiche.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guicheWithIdOnly = await prisma.guiche.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuicheFindManyArgs>(args?: SelectSubset<T, GuicheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guiche.
     * @param {GuicheCreateArgs} args - Arguments to create a Guiche.
     * @example
     * // Create one Guiche
     * const Guiche = await prisma.guiche.create({
     *   data: {
     *     // ... data to create a Guiche
     *   }
     * })
     * 
     */
    create<T extends GuicheCreateArgs>(args: SelectSubset<T, GuicheCreateArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guiches.
     * @param {GuicheCreateManyArgs} args - Arguments to create many Guiches.
     * @example
     * // Create many Guiches
     * const guiche = await prisma.guiche.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuicheCreateManyArgs>(args?: SelectSubset<T, GuicheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guiches and returns the data saved in the database.
     * @param {GuicheCreateManyAndReturnArgs} args - Arguments to create many Guiches.
     * @example
     * // Create many Guiches
     * const guiche = await prisma.guiche.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guiches and only return the `id`
     * const guicheWithIdOnly = await prisma.guiche.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuicheCreateManyAndReturnArgs>(args?: SelectSubset<T, GuicheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guiche.
     * @param {GuicheDeleteArgs} args - Arguments to delete one Guiche.
     * @example
     * // Delete one Guiche
     * const Guiche = await prisma.guiche.delete({
     *   where: {
     *     // ... filter to delete one Guiche
     *   }
     * })
     * 
     */
    delete<T extends GuicheDeleteArgs>(args: SelectSubset<T, GuicheDeleteArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guiche.
     * @param {GuicheUpdateArgs} args - Arguments to update one Guiche.
     * @example
     * // Update one Guiche
     * const guiche = await prisma.guiche.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuicheUpdateArgs>(args: SelectSubset<T, GuicheUpdateArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guiches.
     * @param {GuicheDeleteManyArgs} args - Arguments to filter Guiches to delete.
     * @example
     * // Delete a few Guiches
     * const { count } = await prisma.guiche.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuicheDeleteManyArgs>(args?: SelectSubset<T, GuicheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guiches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guiches
     * const guiche = await prisma.guiche.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuicheUpdateManyArgs>(args: SelectSubset<T, GuicheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guiches and returns the data updated in the database.
     * @param {GuicheUpdateManyAndReturnArgs} args - Arguments to update many Guiches.
     * @example
     * // Update many Guiches
     * const guiche = await prisma.guiche.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guiches and only return the `id`
     * const guicheWithIdOnly = await prisma.guiche.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuicheUpdateManyAndReturnArgs>(args: SelectSubset<T, GuicheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guiche.
     * @param {GuicheUpsertArgs} args - Arguments to update or create a Guiche.
     * @example
     * // Update or create a Guiche
     * const guiche = await prisma.guiche.upsert({
     *   create: {
     *     // ... data to create a Guiche
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guiche we want to update
     *   }
     * })
     */
    upsert<T extends GuicheUpsertArgs>(args: SelectSubset<T, GuicheUpsertArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guiches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheCountArgs} args - Arguments to filter Guiches to count.
     * @example
     * // Count the number of Guiches
     * const count = await prisma.guiche.count({
     *   where: {
     *     // ... the filter for the Guiches we want to count
     *   }
     * })
    **/
    count<T extends GuicheCountArgs>(
      args?: Subset<T, GuicheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuicheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guiche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuicheAggregateArgs>(args: Subset<T, GuicheAggregateArgs>): Prisma.PrismaPromise<GetGuicheAggregateType<T>>

    /**
     * Group by Guiche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuicheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuicheGroupByArgs['orderBy'] }
        : { orderBy?: GuicheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuicheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuicheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guiche model
   */
  readonly fields: GuicheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guiche.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuicheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Guiche$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Guiche$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guiche model
   */
  interface GuicheFieldRefs {
    readonly id: FieldRef<"Guiche", 'String'>
    readonly numero: FieldRef<"Guiche", 'String'>
    readonly nome: FieldRef<"Guiche", 'String'>
    readonly usuarioId: FieldRef<"Guiche", 'String'>
    readonly createdAt: FieldRef<"Guiche", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guiche findUnique
   */
  export type GuicheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche findUniqueOrThrow
   */
  export type GuicheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche findFirst
   */
  export type GuicheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guiches.
     */
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche findFirstOrThrow
   */
  export type GuicheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guiches.
     */
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche findMany
   */
  export type GuicheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiches to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche create
   */
  export type GuicheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * The data needed to create a Guiche.
     */
    data: XOR<GuicheCreateInput, GuicheUncheckedCreateInput>
  }

  /**
   * Guiche createMany
   */
  export type GuicheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guiches.
     */
    data: GuicheCreateManyInput | GuicheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guiche createManyAndReturn
   */
  export type GuicheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The data used to create many Guiches.
     */
    data: GuicheCreateManyInput | GuicheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guiche update
   */
  export type GuicheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * The data needed to update a Guiche.
     */
    data: XOR<GuicheUpdateInput, GuicheUncheckedUpdateInput>
    /**
     * Choose, which Guiche to update.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche updateMany
   */
  export type GuicheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guiches.
     */
    data: XOR<GuicheUpdateManyMutationInput, GuicheUncheckedUpdateManyInput>
    /**
     * Filter which Guiches to update
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to update.
     */
    limit?: number
  }

  /**
   * Guiche updateManyAndReturn
   */
  export type GuicheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The data used to update Guiches.
     */
    data: XOR<GuicheUpdateManyMutationInput, GuicheUncheckedUpdateManyInput>
    /**
     * Filter which Guiches to update
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to update.
     */
    limit?: number
  }

  /**
   * Guiche upsert
   */
  export type GuicheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * The filter to search for the Guiche to update in case it exists.
     */
    where: GuicheWhereUniqueInput
    /**
     * In case the Guiche found by the `where` argument doesn't exist, create a new Guiche with this data.
     */
    create: XOR<GuicheCreateInput, GuicheUncheckedCreateInput>
    /**
     * In case the Guiche was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuicheUpdateInput, GuicheUncheckedUpdateInput>
  }

  /**
   * Guiche delete
   */
  export type GuicheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter which Guiche to delete.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche deleteMany
   */
  export type GuicheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guiches to delete
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to delete.
     */
    limit?: number
  }

  /**
   * Guiche.usuarios
   */
  export type Guiche$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Guiche without action
   */
  export type GuicheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
  }


  /**
   * Model SenhaChamada
   */

  export type AggregateSenhaChamada = {
    _count: SenhaChamadaCountAggregateOutputType | null
    _avg: SenhaChamadaAvgAggregateOutputType | null
    _sum: SenhaChamadaSumAggregateOutputType | null
    _min: SenhaChamadaMinAggregateOutputType | null
    _max: SenhaChamadaMaxAggregateOutputType | null
  }

  export type SenhaChamadaAvgAggregateOutputType = {
    id: number | null
  }

  export type SenhaChamadaSumAggregateOutputType = {
    id: number | null
  }

  export type SenhaChamadaMinAggregateOutputType = {
    id: number | null
    senha: string | null
    guiche: string | null
    horario: Date | null
    isPrioritaria: boolean | null
    status: string | null
    horarioInicio: Date | null
    horarioFim: Date | null
    createdAt: Date | null
  }

  export type SenhaChamadaMaxAggregateOutputType = {
    id: number | null
    senha: string | null
    guiche: string | null
    horario: Date | null
    isPrioritaria: boolean | null
    status: string | null
    horarioInicio: Date | null
    horarioFim: Date | null
    createdAt: Date | null
  }

  export type SenhaChamadaCountAggregateOutputType = {
    id: number
    senha: number
    guiche: number
    horario: number
    isPrioritaria: number
    status: number
    horarioInicio: number
    horarioFim: number
    createdAt: number
    _all: number
  }


  export type SenhaChamadaAvgAggregateInputType = {
    id?: true
  }

  export type SenhaChamadaSumAggregateInputType = {
    id?: true
  }

  export type SenhaChamadaMinAggregateInputType = {
    id?: true
    senha?: true
    guiche?: true
    horario?: true
    isPrioritaria?: true
    status?: true
    horarioInicio?: true
    horarioFim?: true
    createdAt?: true
  }

  export type SenhaChamadaMaxAggregateInputType = {
    id?: true
    senha?: true
    guiche?: true
    horario?: true
    isPrioritaria?: true
    status?: true
    horarioInicio?: true
    horarioFim?: true
    createdAt?: true
  }

  export type SenhaChamadaCountAggregateInputType = {
    id?: true
    senha?: true
    guiche?: true
    horario?: true
    isPrioritaria?: true
    status?: true
    horarioInicio?: true
    horarioFim?: true
    createdAt?: true
    _all?: true
  }

  export type SenhaChamadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SenhaChamada to aggregate.
     */
    where?: SenhaChamadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SenhaChamadas to fetch.
     */
    orderBy?: SenhaChamadaOrderByWithRelationInput | SenhaChamadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SenhaChamadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SenhaChamadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SenhaChamadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SenhaChamadas
    **/
    _count?: true | SenhaChamadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SenhaChamadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SenhaChamadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SenhaChamadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SenhaChamadaMaxAggregateInputType
  }

  export type GetSenhaChamadaAggregateType<T extends SenhaChamadaAggregateArgs> = {
        [P in keyof T & keyof AggregateSenhaChamada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSenhaChamada[P]>
      : GetScalarType<T[P], AggregateSenhaChamada[P]>
  }




  export type SenhaChamadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenhaChamadaWhereInput
    orderBy?: SenhaChamadaOrderByWithAggregationInput | SenhaChamadaOrderByWithAggregationInput[]
    by: SenhaChamadaScalarFieldEnum[] | SenhaChamadaScalarFieldEnum
    having?: SenhaChamadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SenhaChamadaCountAggregateInputType | true
    _avg?: SenhaChamadaAvgAggregateInputType
    _sum?: SenhaChamadaSumAggregateInputType
    _min?: SenhaChamadaMinAggregateInputType
    _max?: SenhaChamadaMaxAggregateInputType
  }

  export type SenhaChamadaGroupByOutputType = {
    id: number
    senha: string
    guiche: string
    horario: Date
    isPrioritaria: boolean
    status: string
    horarioInicio: Date | null
    horarioFim: Date | null
    createdAt: Date
    _count: SenhaChamadaCountAggregateOutputType | null
    _avg: SenhaChamadaAvgAggregateOutputType | null
    _sum: SenhaChamadaSumAggregateOutputType | null
    _min: SenhaChamadaMinAggregateOutputType | null
    _max: SenhaChamadaMaxAggregateOutputType | null
  }

  type GetSenhaChamadaGroupByPayload<T extends SenhaChamadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SenhaChamadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SenhaChamadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SenhaChamadaGroupByOutputType[P]>
            : GetScalarType<T[P], SenhaChamadaGroupByOutputType[P]>
        }
      >
    >


  export type SenhaChamadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    guiche?: boolean
    horario?: boolean
    isPrioritaria?: boolean
    status?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["senhaChamada"]>

  export type SenhaChamadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    guiche?: boolean
    horario?: boolean
    isPrioritaria?: boolean
    status?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["senhaChamada"]>

  export type SenhaChamadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    guiche?: boolean
    horario?: boolean
    isPrioritaria?: boolean
    status?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["senhaChamada"]>

  export type SenhaChamadaSelectScalar = {
    id?: boolean
    senha?: boolean
    guiche?: boolean
    horario?: boolean
    isPrioritaria?: boolean
    status?: boolean
    horarioInicio?: boolean
    horarioFim?: boolean
    createdAt?: boolean
  }

  export type SenhaChamadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senha" | "guiche" | "horario" | "isPrioritaria" | "status" | "horarioInicio" | "horarioFim" | "createdAt", ExtArgs["result"]["senhaChamada"]>

  export type $SenhaChamadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SenhaChamada"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senha: string
      guiche: string
      horario: Date
      isPrioritaria: boolean
      status: string
      horarioInicio: Date | null
      horarioFim: Date | null
      createdAt: Date
    }, ExtArgs["result"]["senhaChamada"]>
    composites: {}
  }

  type SenhaChamadaGetPayload<S extends boolean | null | undefined | SenhaChamadaDefaultArgs> = $Result.GetResult<Prisma.$SenhaChamadaPayload, S>

  type SenhaChamadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SenhaChamadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SenhaChamadaCountAggregateInputType | true
    }

  export interface SenhaChamadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SenhaChamada'], meta: { name: 'SenhaChamada' } }
    /**
     * Find zero or one SenhaChamada that matches the filter.
     * @param {SenhaChamadaFindUniqueArgs} args - Arguments to find a SenhaChamada
     * @example
     * // Get one SenhaChamada
     * const senhaChamada = await prisma.senhaChamada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SenhaChamadaFindUniqueArgs>(args: SelectSubset<T, SenhaChamadaFindUniqueArgs<ExtArgs>>): Prisma__SenhaChamadaClient<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SenhaChamada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SenhaChamadaFindUniqueOrThrowArgs} args - Arguments to find a SenhaChamada
     * @example
     * // Get one SenhaChamada
     * const senhaChamada = await prisma.senhaChamada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SenhaChamadaFindUniqueOrThrowArgs>(args: SelectSubset<T, SenhaChamadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SenhaChamadaClient<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SenhaChamada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaChamadaFindFirstArgs} args - Arguments to find a SenhaChamada
     * @example
     * // Get one SenhaChamada
     * const senhaChamada = await prisma.senhaChamada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SenhaChamadaFindFirstArgs>(args?: SelectSubset<T, SenhaChamadaFindFirstArgs<ExtArgs>>): Prisma__SenhaChamadaClient<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SenhaChamada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaChamadaFindFirstOrThrowArgs} args - Arguments to find a SenhaChamada
     * @example
     * // Get one SenhaChamada
     * const senhaChamada = await prisma.senhaChamada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SenhaChamadaFindFirstOrThrowArgs>(args?: SelectSubset<T, SenhaChamadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SenhaChamadaClient<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SenhaChamadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaChamadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SenhaChamadas
     * const senhaChamadas = await prisma.senhaChamada.findMany()
     * 
     * // Get first 10 SenhaChamadas
     * const senhaChamadas = await prisma.senhaChamada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const senhaChamadaWithIdOnly = await prisma.senhaChamada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SenhaChamadaFindManyArgs>(args?: SelectSubset<T, SenhaChamadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SenhaChamada.
     * @param {SenhaChamadaCreateArgs} args - Arguments to create a SenhaChamada.
     * @example
     * // Create one SenhaChamada
     * const SenhaChamada = await prisma.senhaChamada.create({
     *   data: {
     *     // ... data to create a SenhaChamada
     *   }
     * })
     * 
     */
    create<T extends SenhaChamadaCreateArgs>(args: SelectSubset<T, SenhaChamadaCreateArgs<ExtArgs>>): Prisma__SenhaChamadaClient<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SenhaChamadas.
     * @param {SenhaChamadaCreateManyArgs} args - Arguments to create many SenhaChamadas.
     * @example
     * // Create many SenhaChamadas
     * const senhaChamada = await prisma.senhaChamada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SenhaChamadaCreateManyArgs>(args?: SelectSubset<T, SenhaChamadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SenhaChamadas and returns the data saved in the database.
     * @param {SenhaChamadaCreateManyAndReturnArgs} args - Arguments to create many SenhaChamadas.
     * @example
     * // Create many SenhaChamadas
     * const senhaChamada = await prisma.senhaChamada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SenhaChamadas and only return the `id`
     * const senhaChamadaWithIdOnly = await prisma.senhaChamada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SenhaChamadaCreateManyAndReturnArgs>(args?: SelectSubset<T, SenhaChamadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SenhaChamada.
     * @param {SenhaChamadaDeleteArgs} args - Arguments to delete one SenhaChamada.
     * @example
     * // Delete one SenhaChamada
     * const SenhaChamada = await prisma.senhaChamada.delete({
     *   where: {
     *     // ... filter to delete one SenhaChamada
     *   }
     * })
     * 
     */
    delete<T extends SenhaChamadaDeleteArgs>(args: SelectSubset<T, SenhaChamadaDeleteArgs<ExtArgs>>): Prisma__SenhaChamadaClient<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SenhaChamada.
     * @param {SenhaChamadaUpdateArgs} args - Arguments to update one SenhaChamada.
     * @example
     * // Update one SenhaChamada
     * const senhaChamada = await prisma.senhaChamada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SenhaChamadaUpdateArgs>(args: SelectSubset<T, SenhaChamadaUpdateArgs<ExtArgs>>): Prisma__SenhaChamadaClient<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SenhaChamadas.
     * @param {SenhaChamadaDeleteManyArgs} args - Arguments to filter SenhaChamadas to delete.
     * @example
     * // Delete a few SenhaChamadas
     * const { count } = await prisma.senhaChamada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SenhaChamadaDeleteManyArgs>(args?: SelectSubset<T, SenhaChamadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SenhaChamadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaChamadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SenhaChamadas
     * const senhaChamada = await prisma.senhaChamada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SenhaChamadaUpdateManyArgs>(args: SelectSubset<T, SenhaChamadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SenhaChamadas and returns the data updated in the database.
     * @param {SenhaChamadaUpdateManyAndReturnArgs} args - Arguments to update many SenhaChamadas.
     * @example
     * // Update many SenhaChamadas
     * const senhaChamada = await prisma.senhaChamada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SenhaChamadas and only return the `id`
     * const senhaChamadaWithIdOnly = await prisma.senhaChamada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SenhaChamadaUpdateManyAndReturnArgs>(args: SelectSubset<T, SenhaChamadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SenhaChamada.
     * @param {SenhaChamadaUpsertArgs} args - Arguments to update or create a SenhaChamada.
     * @example
     * // Update or create a SenhaChamada
     * const senhaChamada = await prisma.senhaChamada.upsert({
     *   create: {
     *     // ... data to create a SenhaChamada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SenhaChamada we want to update
     *   }
     * })
     */
    upsert<T extends SenhaChamadaUpsertArgs>(args: SelectSubset<T, SenhaChamadaUpsertArgs<ExtArgs>>): Prisma__SenhaChamadaClient<$Result.GetResult<Prisma.$SenhaChamadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SenhaChamadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaChamadaCountArgs} args - Arguments to filter SenhaChamadas to count.
     * @example
     * // Count the number of SenhaChamadas
     * const count = await prisma.senhaChamada.count({
     *   where: {
     *     // ... the filter for the SenhaChamadas we want to count
     *   }
     * })
    **/
    count<T extends SenhaChamadaCountArgs>(
      args?: Subset<T, SenhaChamadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SenhaChamadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SenhaChamada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaChamadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SenhaChamadaAggregateArgs>(args: Subset<T, SenhaChamadaAggregateArgs>): Prisma.PrismaPromise<GetSenhaChamadaAggregateType<T>>

    /**
     * Group by SenhaChamada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaChamadaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SenhaChamadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SenhaChamadaGroupByArgs['orderBy'] }
        : { orderBy?: SenhaChamadaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SenhaChamadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenhaChamadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SenhaChamada model
   */
  readonly fields: SenhaChamadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SenhaChamada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SenhaChamadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SenhaChamada model
   */
  interface SenhaChamadaFieldRefs {
    readonly id: FieldRef<"SenhaChamada", 'Int'>
    readonly senha: FieldRef<"SenhaChamada", 'String'>
    readonly guiche: FieldRef<"SenhaChamada", 'String'>
    readonly horario: FieldRef<"SenhaChamada", 'DateTime'>
    readonly isPrioritaria: FieldRef<"SenhaChamada", 'Boolean'>
    readonly status: FieldRef<"SenhaChamada", 'String'>
    readonly horarioInicio: FieldRef<"SenhaChamada", 'DateTime'>
    readonly horarioFim: FieldRef<"SenhaChamada", 'DateTime'>
    readonly createdAt: FieldRef<"SenhaChamada", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SenhaChamada findUnique
   */
  export type SenhaChamadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * Filter, which SenhaChamada to fetch.
     */
    where: SenhaChamadaWhereUniqueInput
  }

  /**
   * SenhaChamada findUniqueOrThrow
   */
  export type SenhaChamadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * Filter, which SenhaChamada to fetch.
     */
    where: SenhaChamadaWhereUniqueInput
  }

  /**
   * SenhaChamada findFirst
   */
  export type SenhaChamadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * Filter, which SenhaChamada to fetch.
     */
    where?: SenhaChamadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SenhaChamadas to fetch.
     */
    orderBy?: SenhaChamadaOrderByWithRelationInput | SenhaChamadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SenhaChamadas.
     */
    cursor?: SenhaChamadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SenhaChamadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SenhaChamadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SenhaChamadas.
     */
    distinct?: SenhaChamadaScalarFieldEnum | SenhaChamadaScalarFieldEnum[]
  }

  /**
   * SenhaChamada findFirstOrThrow
   */
  export type SenhaChamadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * Filter, which SenhaChamada to fetch.
     */
    where?: SenhaChamadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SenhaChamadas to fetch.
     */
    orderBy?: SenhaChamadaOrderByWithRelationInput | SenhaChamadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SenhaChamadas.
     */
    cursor?: SenhaChamadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SenhaChamadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SenhaChamadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SenhaChamadas.
     */
    distinct?: SenhaChamadaScalarFieldEnum | SenhaChamadaScalarFieldEnum[]
  }

  /**
   * SenhaChamada findMany
   */
  export type SenhaChamadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * Filter, which SenhaChamadas to fetch.
     */
    where?: SenhaChamadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SenhaChamadas to fetch.
     */
    orderBy?: SenhaChamadaOrderByWithRelationInput | SenhaChamadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SenhaChamadas.
     */
    cursor?: SenhaChamadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SenhaChamadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SenhaChamadas.
     */
    skip?: number
    distinct?: SenhaChamadaScalarFieldEnum | SenhaChamadaScalarFieldEnum[]
  }

  /**
   * SenhaChamada create
   */
  export type SenhaChamadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * The data needed to create a SenhaChamada.
     */
    data: XOR<SenhaChamadaCreateInput, SenhaChamadaUncheckedCreateInput>
  }

  /**
   * SenhaChamada createMany
   */
  export type SenhaChamadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SenhaChamadas.
     */
    data: SenhaChamadaCreateManyInput | SenhaChamadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SenhaChamada createManyAndReturn
   */
  export type SenhaChamadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * The data used to create many SenhaChamadas.
     */
    data: SenhaChamadaCreateManyInput | SenhaChamadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SenhaChamada update
   */
  export type SenhaChamadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * The data needed to update a SenhaChamada.
     */
    data: XOR<SenhaChamadaUpdateInput, SenhaChamadaUncheckedUpdateInput>
    /**
     * Choose, which SenhaChamada to update.
     */
    where: SenhaChamadaWhereUniqueInput
  }

  /**
   * SenhaChamada updateMany
   */
  export type SenhaChamadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SenhaChamadas.
     */
    data: XOR<SenhaChamadaUpdateManyMutationInput, SenhaChamadaUncheckedUpdateManyInput>
    /**
     * Filter which SenhaChamadas to update
     */
    where?: SenhaChamadaWhereInput
    /**
     * Limit how many SenhaChamadas to update.
     */
    limit?: number
  }

  /**
   * SenhaChamada updateManyAndReturn
   */
  export type SenhaChamadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * The data used to update SenhaChamadas.
     */
    data: XOR<SenhaChamadaUpdateManyMutationInput, SenhaChamadaUncheckedUpdateManyInput>
    /**
     * Filter which SenhaChamadas to update
     */
    where?: SenhaChamadaWhereInput
    /**
     * Limit how many SenhaChamadas to update.
     */
    limit?: number
  }

  /**
   * SenhaChamada upsert
   */
  export type SenhaChamadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * The filter to search for the SenhaChamada to update in case it exists.
     */
    where: SenhaChamadaWhereUniqueInput
    /**
     * In case the SenhaChamada found by the `where` argument doesn't exist, create a new SenhaChamada with this data.
     */
    create: XOR<SenhaChamadaCreateInput, SenhaChamadaUncheckedCreateInput>
    /**
     * In case the SenhaChamada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SenhaChamadaUpdateInput, SenhaChamadaUncheckedUpdateInput>
  }

  /**
   * SenhaChamada delete
   */
  export type SenhaChamadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
    /**
     * Filter which SenhaChamada to delete.
     */
    where: SenhaChamadaWhereUniqueInput
  }

  /**
   * SenhaChamada deleteMany
   */
  export type SenhaChamadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SenhaChamadas to delete
     */
    where?: SenhaChamadaWhereInput
    /**
     * Limit how many SenhaChamadas to delete.
     */
    limit?: number
  }

  /**
   * SenhaChamada without action
   */
  export type SenhaChamadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenhaChamada
     */
    select?: SenhaChamadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenhaChamada
     */
    omit?: SenhaChamadaOmit<ExtArgs> | null
  }


  /**
   * Model Configuracao
   */

  export type AggregateConfiguracao = {
    _count: ConfiguracaoCountAggregateOutputType | null
    _avg: ConfiguracaoAvgAggregateOutputType | null
    _sum: ConfiguracaoSumAggregateOutputType | null
    _min: ConfiguracaoMinAggregateOutputType | null
    _max: ConfiguracaoMaxAggregateOutputType | null
  }

  export type ConfiguracaoAvgAggregateOutputType = {
    id: number | null
    senhaAtualNormal: number | null
    senhaAtualPrioritaria: number | null
  }

  export type ConfiguracaoSumAggregateOutputType = {
    id: number | null
    senhaAtualNormal: number | null
    senhaAtualPrioritaria: number | null
  }

  export type ConfiguracaoMinAggregateOutputType = {
    id: number | null
    senhaAtualNormal: number | null
    senhaAtualPrioritaria: number | null
    prefixoNormal: string | null
    prefixoPrioritaria: string | null
    updatedAt: Date | null
  }

  export type ConfiguracaoMaxAggregateOutputType = {
    id: number | null
    senhaAtualNormal: number | null
    senhaAtualPrioritaria: number | null
    prefixoNormal: string | null
    prefixoPrioritaria: string | null
    updatedAt: Date | null
  }

  export type ConfiguracaoCountAggregateOutputType = {
    id: number
    senhaAtualNormal: number
    senhaAtualPrioritaria: number
    prefixoNormal: number
    prefixoPrioritaria: number
    updatedAt: number
    _all: number
  }


  export type ConfiguracaoAvgAggregateInputType = {
    id?: true
    senhaAtualNormal?: true
    senhaAtualPrioritaria?: true
  }

  export type ConfiguracaoSumAggregateInputType = {
    id?: true
    senhaAtualNormal?: true
    senhaAtualPrioritaria?: true
  }

  export type ConfiguracaoMinAggregateInputType = {
    id?: true
    senhaAtualNormal?: true
    senhaAtualPrioritaria?: true
    prefixoNormal?: true
    prefixoPrioritaria?: true
    updatedAt?: true
  }

  export type ConfiguracaoMaxAggregateInputType = {
    id?: true
    senhaAtualNormal?: true
    senhaAtualPrioritaria?: true
    prefixoNormal?: true
    prefixoPrioritaria?: true
    updatedAt?: true
  }

  export type ConfiguracaoCountAggregateInputType = {
    id?: true
    senhaAtualNormal?: true
    senhaAtualPrioritaria?: true
    prefixoNormal?: true
    prefixoPrioritaria?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfiguracaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracao to aggregate.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configuracaos
    **/
    _count?: true | ConfiguracaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracaoMaxAggregateInputType
  }

  export type GetConfiguracaoAggregateType<T extends ConfiguracaoAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracao[P]>
      : GetScalarType<T[P], AggregateConfiguracao[P]>
  }




  export type ConfiguracaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracaoWhereInput
    orderBy?: ConfiguracaoOrderByWithAggregationInput | ConfiguracaoOrderByWithAggregationInput[]
    by: ConfiguracaoScalarFieldEnum[] | ConfiguracaoScalarFieldEnum
    having?: ConfiguracaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracaoCountAggregateInputType | true
    _avg?: ConfiguracaoAvgAggregateInputType
    _sum?: ConfiguracaoSumAggregateInputType
    _min?: ConfiguracaoMinAggregateInputType
    _max?: ConfiguracaoMaxAggregateInputType
  }

  export type ConfiguracaoGroupByOutputType = {
    id: number
    senhaAtualNormal: number
    senhaAtualPrioritaria: number
    prefixoNormal: string
    prefixoPrioritaria: string
    updatedAt: Date
    _count: ConfiguracaoCountAggregateOutputType | null
    _avg: ConfiguracaoAvgAggregateOutputType | null
    _sum: ConfiguracaoSumAggregateOutputType | null
    _min: ConfiguracaoMinAggregateOutputType | null
    _max: ConfiguracaoMaxAggregateOutputType | null
  }

  type GetConfiguracaoGroupByPayload<T extends ConfiguracaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracaoGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracaoGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senhaAtualNormal?: boolean
    senhaAtualPrioritaria?: boolean
    prefixoNormal?: boolean
    prefixoPrioritaria?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senhaAtualNormal?: boolean
    senhaAtualPrioritaria?: boolean
    prefixoNormal?: boolean
    prefixoPrioritaria?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senhaAtualNormal?: boolean
    senhaAtualPrioritaria?: boolean
    prefixoNormal?: boolean
    prefixoPrioritaria?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectScalar = {
    id?: boolean
    senhaAtualNormal?: boolean
    senhaAtualPrioritaria?: boolean
    prefixoNormal?: boolean
    prefixoPrioritaria?: boolean
    updatedAt?: boolean
  }

  export type ConfiguracaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senhaAtualNormal" | "senhaAtualPrioritaria" | "prefixoNormal" | "prefixoPrioritaria" | "updatedAt", ExtArgs["result"]["configuracao"]>

  export type $ConfiguracaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuracao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senhaAtualNormal: number
      senhaAtualPrioritaria: number
      prefixoNormal: string
      prefixoPrioritaria: string
      updatedAt: Date
    }, ExtArgs["result"]["configuracao"]>
    composites: {}
  }

  type ConfiguracaoGetPayload<S extends boolean | null | undefined | ConfiguracaoDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracaoPayload, S>

  type ConfiguracaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfiguracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracaoCountAggregateInputType | true
    }

  export interface ConfiguracaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuracao'], meta: { name: 'Configuracao' } }
    /**
     * Find zero or one Configuracao that matches the filter.
     * @param {ConfiguracaoFindUniqueArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracaoFindUniqueArgs>(args: SelectSubset<T, ConfiguracaoFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfiguracaoFindUniqueOrThrowArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindFirstArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracaoFindFirstArgs>(args?: SelectSubset<T, ConfiguracaoFindFirstArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindFirstOrThrowArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracaos
     * const configuracaos = await prisma.configuracao.findMany()
     * 
     * // Get first 10 Configuracaos
     * const configuracaos = await prisma.configuracao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfiguracaoFindManyArgs>(args?: SelectSubset<T, ConfiguracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracao.
     * @param {ConfiguracaoCreateArgs} args - Arguments to create a Configuracao.
     * @example
     * // Create one Configuracao
     * const Configuracao = await prisma.configuracao.create({
     *   data: {
     *     // ... data to create a Configuracao
     *   }
     * })
     * 
     */
    create<T extends ConfiguracaoCreateArgs>(args: SelectSubset<T, ConfiguracaoCreateArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracaos.
     * @param {ConfiguracaoCreateManyArgs} args - Arguments to create many Configuracaos.
     * @example
     * // Create many Configuracaos
     * const configuracao = await prisma.configuracao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracaoCreateManyArgs>(args?: SelectSubset<T, ConfiguracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracaos and returns the data saved in the database.
     * @param {ConfiguracaoCreateManyAndReturnArgs} args - Arguments to create many Configuracaos.
     * @example
     * // Create many Configuracaos
     * const configuracao = await prisma.configuracao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracaos and only return the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfiguracaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfiguracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuracao.
     * @param {ConfiguracaoDeleteArgs} args - Arguments to delete one Configuracao.
     * @example
     * // Delete one Configuracao
     * const Configuracao = await prisma.configuracao.delete({
     *   where: {
     *     // ... filter to delete one Configuracao
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracaoDeleteArgs>(args: SelectSubset<T, ConfiguracaoDeleteArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracao.
     * @param {ConfiguracaoUpdateArgs} args - Arguments to update one Configuracao.
     * @example
     * // Update one Configuracao
     * const configuracao = await prisma.configuracao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracaoUpdateArgs>(args: SelectSubset<T, ConfiguracaoUpdateArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracaos.
     * @param {ConfiguracaoDeleteManyArgs} args - Arguments to filter Configuracaos to delete.
     * @example
     * // Delete a few Configuracaos
     * const { count } = await prisma.configuracao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracaoDeleteManyArgs>(args?: SelectSubset<T, ConfiguracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracaos
     * const configuracao = await prisma.configuracao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracaoUpdateManyArgs>(args: SelectSubset<T, ConfiguracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracaos and returns the data updated in the database.
     * @param {ConfiguracaoUpdateManyAndReturnArgs} args - Arguments to update many Configuracaos.
     * @example
     * // Update many Configuracaos
     * const configuracao = await prisma.configuracao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configuracaos and only return the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfiguracaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfiguracaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuracao.
     * @param {ConfiguracaoUpsertArgs} args - Arguments to update or create a Configuracao.
     * @example
     * // Update or create a Configuracao
     * const configuracao = await prisma.configuracao.upsert({
     *   create: {
     *     // ... data to create a Configuracao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracao we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracaoUpsertArgs>(args: SelectSubset<T, ConfiguracaoUpsertArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoCountArgs} args - Arguments to filter Configuracaos to count.
     * @example
     * // Count the number of Configuracaos
     * const count = await prisma.configuracao.count({
     *   where: {
     *     // ... the filter for the Configuracaos we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracaoCountArgs>(
      args?: Subset<T, ConfiguracaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfiguracaoAggregateArgs>(args: Subset<T, ConfiguracaoAggregateArgs>): Prisma.PrismaPromise<GetConfiguracaoAggregateType<T>>

    /**
     * Group by Configuracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfiguracaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracaoGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfiguracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuracao model
   */
  readonly fields: ConfiguracaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuracao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Configuracao model
   */
  interface ConfiguracaoFieldRefs {
    readonly id: FieldRef<"Configuracao", 'Int'>
    readonly senhaAtualNormal: FieldRef<"Configuracao", 'Int'>
    readonly senhaAtualPrioritaria: FieldRef<"Configuracao", 'Int'>
    readonly prefixoNormal: FieldRef<"Configuracao", 'String'>
    readonly prefixoPrioritaria: FieldRef<"Configuracao", 'String'>
    readonly updatedAt: FieldRef<"Configuracao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Configuracao findUnique
   */
  export type ConfiguracaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao findUniqueOrThrow
   */
  export type ConfiguracaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao findFirst
   */
  export type ConfiguracaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao findFirstOrThrow
   */
  export type ConfiguracaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao findMany
   */
  export type ConfiguracaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracaos to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao create
   */
  export type ConfiguracaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Configuracao.
     */
    data?: XOR<ConfiguracaoCreateInput, ConfiguracaoUncheckedCreateInput>
  }

  /**
   * Configuracao createMany
   */
  export type ConfiguracaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configuracaos.
     */
    data: ConfiguracaoCreateManyInput | ConfiguracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracao createManyAndReturn
   */
  export type ConfiguracaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data used to create many Configuracaos.
     */
    data: ConfiguracaoCreateManyInput | ConfiguracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracao update
   */
  export type ConfiguracaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Configuracao.
     */
    data: XOR<ConfiguracaoUpdateInput, ConfiguracaoUncheckedUpdateInput>
    /**
     * Choose, which Configuracao to update.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao updateMany
   */
  export type ConfiguracaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configuracaos.
     */
    data: XOR<ConfiguracaoUpdateManyMutationInput, ConfiguracaoUncheckedUpdateManyInput>
    /**
     * Filter which Configuracaos to update
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to update.
     */
    limit?: number
  }

  /**
   * Configuracao updateManyAndReturn
   */
  export type ConfiguracaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data used to update Configuracaos.
     */
    data: XOR<ConfiguracaoUpdateManyMutationInput, ConfiguracaoUncheckedUpdateManyInput>
    /**
     * Filter which Configuracaos to update
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to update.
     */
    limit?: number
  }

  /**
   * Configuracao upsert
   */
  export type ConfiguracaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Configuracao to update in case it exists.
     */
    where: ConfiguracaoWhereUniqueInput
    /**
     * In case the Configuracao found by the `where` argument doesn't exist, create a new Configuracao with this data.
     */
    create: XOR<ConfiguracaoCreateInput, ConfiguracaoUncheckedCreateInput>
    /**
     * In case the Configuracao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracaoUpdateInput, ConfiguracaoUncheckedUpdateInput>
  }

  /**
   * Configuracao delete
   */
  export type ConfiguracaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter which Configuracao to delete.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao deleteMany
   */
  export type ConfiguracaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracaos to delete
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to delete.
     */
    limit?: number
  }

  /**
   * Configuracao without action
   */
  export type ConfiguracaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    guicheId: 'guicheId',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const GuicheScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    nome: 'nome',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt'
  };

  export type GuicheScalarFieldEnum = (typeof GuicheScalarFieldEnum)[keyof typeof GuicheScalarFieldEnum]


  export const SenhaChamadaScalarFieldEnum: {
    id: 'id',
    senha: 'senha',
    guiche: 'guiche',
    horario: 'horario',
    isPrioritaria: 'isPrioritaria',
    status: 'status',
    horarioInicio: 'horarioInicio',
    horarioFim: 'horarioFim',
    createdAt: 'createdAt'
  };

  export type SenhaChamadaScalarFieldEnum = (typeof SenhaChamadaScalarFieldEnum)[keyof typeof SenhaChamadaScalarFieldEnum]


  export const ConfiguracaoScalarFieldEnum: {
    id: 'id',
    senhaAtualNormal: 'senhaAtualNormal',
    senhaAtualPrioritaria: 'senhaAtualPrioritaria',
    prefixoNormal: 'prefixoNormal',
    prefixoPrioritaria: 'prefixoPrioritaria',
    updatedAt: 'updatedAt'
  };

  export type ConfiguracaoScalarFieldEnum = (typeof ConfiguracaoScalarFieldEnum)[keyof typeof ConfiguracaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    guicheId?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    guiche?: XOR<GuicheNullableScalarRelationFilter, GuicheWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    guicheId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    guiche?: GuicheOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    guicheId?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    guiche?: XOR<GuicheNullableScalarRelationFilter, GuicheWhereInput> | null
  }, "id" | "username">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    guicheId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    guicheId?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type GuicheWhereInput = {
    AND?: GuicheWhereInput | GuicheWhereInput[]
    OR?: GuicheWhereInput[]
    NOT?: GuicheWhereInput | GuicheWhereInput[]
    id?: StringFilter<"Guiche"> | string
    numero?: StringFilter<"Guiche"> | string
    nome?: StringFilter<"Guiche"> | string
    usuarioId?: StringNullableFilter<"Guiche"> | string | null
    createdAt?: DateTimeFilter<"Guiche"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }

  export type GuicheOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type GuicheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuicheWhereInput | GuicheWhereInput[]
    OR?: GuicheWhereInput[]
    NOT?: GuicheWhereInput | GuicheWhereInput[]
    numero?: StringFilter<"Guiche"> | string
    nome?: StringFilter<"Guiche"> | string
    usuarioId?: StringNullableFilter<"Guiche"> | string | null
    createdAt?: DateTimeFilter<"Guiche"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type GuicheOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GuicheCountOrderByAggregateInput
    _max?: GuicheMaxOrderByAggregateInput
    _min?: GuicheMinOrderByAggregateInput
  }

  export type GuicheScalarWhereWithAggregatesInput = {
    AND?: GuicheScalarWhereWithAggregatesInput | GuicheScalarWhereWithAggregatesInput[]
    OR?: GuicheScalarWhereWithAggregatesInput[]
    NOT?: GuicheScalarWhereWithAggregatesInput | GuicheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guiche"> | string
    numero?: StringWithAggregatesFilter<"Guiche"> | string
    nome?: StringWithAggregatesFilter<"Guiche"> | string
    usuarioId?: StringNullableWithAggregatesFilter<"Guiche"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Guiche"> | Date | string
  }

  export type SenhaChamadaWhereInput = {
    AND?: SenhaChamadaWhereInput | SenhaChamadaWhereInput[]
    OR?: SenhaChamadaWhereInput[]
    NOT?: SenhaChamadaWhereInput | SenhaChamadaWhereInput[]
    id?: IntFilter<"SenhaChamada"> | number
    senha?: StringFilter<"SenhaChamada"> | string
    guiche?: StringFilter<"SenhaChamada"> | string
    horario?: DateTimeFilter<"SenhaChamada"> | Date | string
    isPrioritaria?: BoolFilter<"SenhaChamada"> | boolean
    status?: StringFilter<"SenhaChamada"> | string
    horarioInicio?: DateTimeNullableFilter<"SenhaChamada"> | Date | string | null
    horarioFim?: DateTimeNullableFilter<"SenhaChamada"> | Date | string | null
    createdAt?: DateTimeFilter<"SenhaChamada"> | Date | string
  }

  export type SenhaChamadaOrderByWithRelationInput = {
    id?: SortOrder
    senha?: SortOrder
    guiche?: SortOrder
    horario?: SortOrder
    isPrioritaria?: SortOrder
    status?: SortOrder
    horarioInicio?: SortOrderInput | SortOrder
    horarioFim?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SenhaChamadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SenhaChamadaWhereInput | SenhaChamadaWhereInput[]
    OR?: SenhaChamadaWhereInput[]
    NOT?: SenhaChamadaWhereInput | SenhaChamadaWhereInput[]
    senha?: StringFilter<"SenhaChamada"> | string
    guiche?: StringFilter<"SenhaChamada"> | string
    horario?: DateTimeFilter<"SenhaChamada"> | Date | string
    isPrioritaria?: BoolFilter<"SenhaChamada"> | boolean
    status?: StringFilter<"SenhaChamada"> | string
    horarioInicio?: DateTimeNullableFilter<"SenhaChamada"> | Date | string | null
    horarioFim?: DateTimeNullableFilter<"SenhaChamada"> | Date | string | null
    createdAt?: DateTimeFilter<"SenhaChamada"> | Date | string
  }, "id">

  export type SenhaChamadaOrderByWithAggregationInput = {
    id?: SortOrder
    senha?: SortOrder
    guiche?: SortOrder
    horario?: SortOrder
    isPrioritaria?: SortOrder
    status?: SortOrder
    horarioInicio?: SortOrderInput | SortOrder
    horarioFim?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SenhaChamadaCountOrderByAggregateInput
    _avg?: SenhaChamadaAvgOrderByAggregateInput
    _max?: SenhaChamadaMaxOrderByAggregateInput
    _min?: SenhaChamadaMinOrderByAggregateInput
    _sum?: SenhaChamadaSumOrderByAggregateInput
  }

  export type SenhaChamadaScalarWhereWithAggregatesInput = {
    AND?: SenhaChamadaScalarWhereWithAggregatesInput | SenhaChamadaScalarWhereWithAggregatesInput[]
    OR?: SenhaChamadaScalarWhereWithAggregatesInput[]
    NOT?: SenhaChamadaScalarWhereWithAggregatesInput | SenhaChamadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SenhaChamada"> | number
    senha?: StringWithAggregatesFilter<"SenhaChamada"> | string
    guiche?: StringWithAggregatesFilter<"SenhaChamada"> | string
    horario?: DateTimeWithAggregatesFilter<"SenhaChamada"> | Date | string
    isPrioritaria?: BoolWithAggregatesFilter<"SenhaChamada"> | boolean
    status?: StringWithAggregatesFilter<"SenhaChamada"> | string
    horarioInicio?: DateTimeNullableWithAggregatesFilter<"SenhaChamada"> | Date | string | null
    horarioFim?: DateTimeNullableWithAggregatesFilter<"SenhaChamada"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SenhaChamada"> | Date | string
  }

  export type ConfiguracaoWhereInput = {
    AND?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    OR?: ConfiguracaoWhereInput[]
    NOT?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    id?: IntFilter<"Configuracao"> | number
    senhaAtualNormal?: IntFilter<"Configuracao"> | number
    senhaAtualPrioritaria?: IntFilter<"Configuracao"> | number
    prefixoNormal?: StringFilter<"Configuracao"> | string
    prefixoPrioritaria?: StringFilter<"Configuracao"> | string
    updatedAt?: DateTimeFilter<"Configuracao"> | Date | string
  }

  export type ConfiguracaoOrderByWithRelationInput = {
    id?: SortOrder
    senhaAtualNormal?: SortOrder
    senhaAtualPrioritaria?: SortOrder
    prefixoNormal?: SortOrder
    prefixoPrioritaria?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    OR?: ConfiguracaoWhereInput[]
    NOT?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    senhaAtualNormal?: IntFilter<"Configuracao"> | number
    senhaAtualPrioritaria?: IntFilter<"Configuracao"> | number
    prefixoNormal?: StringFilter<"Configuracao"> | string
    prefixoPrioritaria?: StringFilter<"Configuracao"> | string
    updatedAt?: DateTimeFilter<"Configuracao"> | Date | string
  }, "id">

  export type ConfiguracaoOrderByWithAggregationInput = {
    id?: SortOrder
    senhaAtualNormal?: SortOrder
    senhaAtualPrioritaria?: SortOrder
    prefixoNormal?: SortOrder
    prefixoPrioritaria?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfiguracaoCountOrderByAggregateInput
    _avg?: ConfiguracaoAvgOrderByAggregateInput
    _max?: ConfiguracaoMaxOrderByAggregateInput
    _min?: ConfiguracaoMinOrderByAggregateInput
    _sum?: ConfiguracaoSumOrderByAggregateInput
  }

  export type ConfiguracaoScalarWhereWithAggregatesInput = {
    AND?: ConfiguracaoScalarWhereWithAggregatesInput | ConfiguracaoScalarWhereWithAggregatesInput[]
    OR?: ConfiguracaoScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracaoScalarWhereWithAggregatesInput | ConfiguracaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Configuracao"> | number
    senhaAtualNormal?: IntWithAggregatesFilter<"Configuracao"> | number
    senhaAtualPrioritaria?: IntWithAggregatesFilter<"Configuracao"> | number
    prefixoNormal?: StringWithAggregatesFilter<"Configuracao"> | string
    prefixoPrioritaria?: StringWithAggregatesFilter<"Configuracao"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Configuracao"> | Date | string
  }

  export type UsuarioCreateInput = {
    id: string
    username: string
    password: string
    createdAt?: Date | string
    guiche?: GuicheCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id: string
    username: string
    password: string
    guicheId?: string | null
    createdAt?: Date | string
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guiche?: GuicheUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id: string
    username: string
    password: string
    guicheId?: string | null
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheCreateInput = {
    id: string
    numero: string
    nome: string
    usuarioId?: string | null
    createdAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutGuicheInput
  }

  export type GuicheUncheckedCreateInput = {
    id: string
    numero: string
    nome: string
    usuarioId?: string | null
    createdAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutGuicheInput
  }

  export type GuicheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutGuicheNestedInput
  }

  export type GuicheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutGuicheNestedInput
  }

  export type GuicheCreateManyInput = {
    id: string
    numero: string
    nome: string
    usuarioId?: string | null
    createdAt?: Date | string
  }

  export type GuicheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaChamadaCreateInput = {
    senha: string
    guiche: string
    horario: Date | string
    isPrioritaria: boolean
    status?: string
    horarioInicio?: Date | string | null
    horarioFim?: Date | string | null
    createdAt?: Date | string
  }

  export type SenhaChamadaUncheckedCreateInput = {
    id?: number
    senha: string
    guiche: string
    horario: Date | string
    isPrioritaria: boolean
    status?: string
    horarioInicio?: Date | string | null
    horarioFim?: Date | string | null
    createdAt?: Date | string
  }

  export type SenhaChamadaUpdateInput = {
    senha?: StringFieldUpdateOperationsInput | string
    guiche?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrioritaria?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horarioFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaChamadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    guiche?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrioritaria?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horarioFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaChamadaCreateManyInput = {
    id?: number
    senha: string
    guiche: string
    horario: Date | string
    isPrioritaria: boolean
    status?: string
    horarioInicio?: Date | string | null
    horarioFim?: Date | string | null
    createdAt?: Date | string
  }

  export type SenhaChamadaUpdateManyMutationInput = {
    senha?: StringFieldUpdateOperationsInput | string
    guiche?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrioritaria?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horarioFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaChamadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    guiche?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrioritaria?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    horarioInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horarioFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoCreateInput = {
    id?: number
    senhaAtualNormal?: number
    senhaAtualPrioritaria?: number
    prefixoNormal?: string
    prefixoPrioritaria?: string
    updatedAt?: Date | string
  }

  export type ConfiguracaoUncheckedCreateInput = {
    id?: number
    senhaAtualNormal?: number
    senhaAtualPrioritaria?: number
    prefixoNormal?: string
    prefixoPrioritaria?: string
    updatedAt?: Date | string
  }

  export type ConfiguracaoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senhaAtualNormal?: IntFieldUpdateOperationsInput | number
    senhaAtualPrioritaria?: IntFieldUpdateOperationsInput | number
    prefixoNormal?: StringFieldUpdateOperationsInput | string
    prefixoPrioritaria?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senhaAtualNormal?: IntFieldUpdateOperationsInput | number
    senhaAtualPrioritaria?: IntFieldUpdateOperationsInput | number
    prefixoNormal?: StringFieldUpdateOperationsInput | string
    prefixoPrioritaria?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoCreateManyInput = {
    id?: number
    senhaAtualNormal?: number
    senhaAtualPrioritaria?: number
    prefixoNormal?: string
    prefixoPrioritaria?: string
    updatedAt?: Date | string
  }

  export type ConfiguracaoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    senhaAtualNormal?: IntFieldUpdateOperationsInput | number
    senhaAtualPrioritaria?: IntFieldUpdateOperationsInput | number
    prefixoNormal?: StringFieldUpdateOperationsInput | string
    prefixoPrioritaria?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senhaAtualNormal?: IntFieldUpdateOperationsInput | number
    senhaAtualPrioritaria?: IntFieldUpdateOperationsInput | number
    prefixoNormal?: StringFieldUpdateOperationsInput | string
    prefixoPrioritaria?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GuicheNullableScalarRelationFilter = {
    is?: GuicheWhereInput | null
    isNot?: GuicheWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    guicheId?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    guicheId?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    guicheId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuicheCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type GuicheMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type GuicheMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    nome?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SenhaChamadaCountOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    guiche?: SortOrder
    horario?: SortOrder
    isPrioritaria?: SortOrder
    status?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    createdAt?: SortOrder
  }

  export type SenhaChamadaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SenhaChamadaMaxOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    guiche?: SortOrder
    horario?: SortOrder
    isPrioritaria?: SortOrder
    status?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    createdAt?: SortOrder
  }

  export type SenhaChamadaMinOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    guiche?: SortOrder
    horario?: SortOrder
    isPrioritaria?: SortOrder
    status?: SortOrder
    horarioInicio?: SortOrder
    horarioFim?: SortOrder
    createdAt?: SortOrder
  }

  export type SenhaChamadaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ConfiguracaoCountOrderByAggregateInput = {
    id?: SortOrder
    senhaAtualNormal?: SortOrder
    senhaAtualPrioritaria?: SortOrder
    prefixoNormal?: SortOrder
    prefixoPrioritaria?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoAvgOrderByAggregateInput = {
    id?: SortOrder
    senhaAtualNormal?: SortOrder
    senhaAtualPrioritaria?: SortOrder
  }

  export type ConfiguracaoMaxOrderByAggregateInput = {
    id?: SortOrder
    senhaAtualNormal?: SortOrder
    senhaAtualPrioritaria?: SortOrder
    prefixoNormal?: SortOrder
    prefixoPrioritaria?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoMinOrderByAggregateInput = {
    id?: SortOrder
    senhaAtualNormal?: SortOrder
    senhaAtualPrioritaria?: SortOrder
    prefixoNormal?: SortOrder
    prefixoPrioritaria?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoSumOrderByAggregateInput = {
    id?: SortOrder
    senhaAtualNormal?: SortOrder
    senhaAtualPrioritaria?: SortOrder
  }

  export type GuicheCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<GuicheCreateWithoutUsuariosInput, GuicheUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: GuicheCreateOrConnectWithoutUsuariosInput
    connect?: GuicheWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuicheUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<GuicheCreateWithoutUsuariosInput, GuicheUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: GuicheCreateOrConnectWithoutUsuariosInput
    upsert?: GuicheUpsertWithoutUsuariosInput
    disconnect?: GuicheWhereInput | boolean
    delete?: GuicheWhereInput | boolean
    connect?: GuicheWhereUniqueInput
    update?: XOR<XOR<GuicheUpdateToOneWithWhereWithoutUsuariosInput, GuicheUpdateWithoutUsuariosInput>, GuicheUncheckedUpdateWithoutUsuariosInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioCreateNestedManyWithoutGuicheInput = {
    create?: XOR<UsuarioCreateWithoutGuicheInput, UsuarioUncheckedCreateWithoutGuicheInput> | UsuarioCreateWithoutGuicheInput[] | UsuarioUncheckedCreateWithoutGuicheInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGuicheInput | UsuarioCreateOrConnectWithoutGuicheInput[]
    createMany?: UsuarioCreateManyGuicheInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutGuicheInput = {
    create?: XOR<UsuarioCreateWithoutGuicheInput, UsuarioUncheckedCreateWithoutGuicheInput> | UsuarioCreateWithoutGuicheInput[] | UsuarioUncheckedCreateWithoutGuicheInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGuicheInput | UsuarioCreateOrConnectWithoutGuicheInput[]
    createMany?: UsuarioCreateManyGuicheInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutGuicheNestedInput = {
    create?: XOR<UsuarioCreateWithoutGuicheInput, UsuarioUncheckedCreateWithoutGuicheInput> | UsuarioCreateWithoutGuicheInput[] | UsuarioUncheckedCreateWithoutGuicheInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGuicheInput | UsuarioCreateOrConnectWithoutGuicheInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutGuicheInput | UsuarioUpsertWithWhereUniqueWithoutGuicheInput[]
    createMany?: UsuarioCreateManyGuicheInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutGuicheInput | UsuarioUpdateWithWhereUniqueWithoutGuicheInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutGuicheInput | UsuarioUpdateManyWithWhereWithoutGuicheInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutGuicheNestedInput = {
    create?: XOR<UsuarioCreateWithoutGuicheInput, UsuarioUncheckedCreateWithoutGuicheInput> | UsuarioCreateWithoutGuicheInput[] | UsuarioUncheckedCreateWithoutGuicheInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGuicheInput | UsuarioCreateOrConnectWithoutGuicheInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutGuicheInput | UsuarioUpsertWithWhereUniqueWithoutGuicheInput[]
    createMany?: UsuarioCreateManyGuicheInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutGuicheInput | UsuarioUpdateWithWhereUniqueWithoutGuicheInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutGuicheInput | UsuarioUpdateManyWithWhereWithoutGuicheInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GuicheCreateWithoutUsuariosInput = {
    id: string
    numero: string
    nome: string
    usuarioId?: string | null
    createdAt?: Date | string
  }

  export type GuicheUncheckedCreateWithoutUsuariosInput = {
    id: string
    numero: string
    nome: string
    usuarioId?: string | null
    createdAt?: Date | string
  }

  export type GuicheCreateOrConnectWithoutUsuariosInput = {
    where: GuicheWhereUniqueInput
    create: XOR<GuicheCreateWithoutUsuariosInput, GuicheUncheckedCreateWithoutUsuariosInput>
  }

  export type GuicheUpsertWithoutUsuariosInput = {
    update: XOR<GuicheUpdateWithoutUsuariosInput, GuicheUncheckedUpdateWithoutUsuariosInput>
    create: XOR<GuicheCreateWithoutUsuariosInput, GuicheUncheckedCreateWithoutUsuariosInput>
    where?: GuicheWhereInput
  }

  export type GuicheUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: GuicheWhereInput
    data: XOR<GuicheUpdateWithoutUsuariosInput, GuicheUncheckedUpdateWithoutUsuariosInput>
  }

  export type GuicheUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutGuicheInput = {
    id: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutGuicheInput = {
    id: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutGuicheInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGuicheInput, UsuarioUncheckedCreateWithoutGuicheInput>
  }

  export type UsuarioCreateManyGuicheInputEnvelope = {
    data: UsuarioCreateManyGuicheInput | UsuarioCreateManyGuicheInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutGuicheInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutGuicheInput, UsuarioUncheckedUpdateWithoutGuicheInput>
    create: XOR<UsuarioCreateWithoutGuicheInput, UsuarioUncheckedCreateWithoutGuicheInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutGuicheInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutGuicheInput, UsuarioUncheckedUpdateWithoutGuicheInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutGuicheInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutGuicheInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    guicheId?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioCreateManyGuicheInput = {
    id: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UsuarioUpdateWithoutGuicheInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutGuicheInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyWithoutGuicheInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}