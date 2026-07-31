import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map