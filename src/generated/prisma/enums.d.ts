export declare const UserRole: {
    readonly SUPER_ADMIN: 'SUPER_ADMIN';
    readonly ADMIN: 'ADMIN';
    readonly TECHNICIAN: 'TECHNICIAN';
    readonly FARMER: 'FARMER';
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly PENDING: 'PENDING';
    readonly SUSPENDED: 'SUSPENDED';
    readonly DEACTIVATED: 'DEACTIVATED';
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const AuthProvider: {
    readonly EMAIL: 'EMAIL';
    readonly GOOGLE: 'GOOGLE';
    readonly APPLE: 'APPLE';
};
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
export declare const FarmStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly INACTIVE: 'INACTIVE';
    readonly MAINTENANCE: 'MAINTENANCE';
};
export type FarmStatus = (typeof FarmStatus)[keyof typeof FarmStatus];
export declare const PondType: {
    readonly EARTHEN: 'EARTHEN';
    readonly CONCRETE: 'CONCRETE';
    readonly TARPAULIN: 'TARPAULIN';
    readonly FIBER: 'FIBER';
    readonly PLASTIC: 'PLASTIC';
};
export type PondType = (typeof PondType)[keyof typeof PondType];
export declare const PondStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly EMPTY: 'EMPTY';
    readonly STOCKING: 'STOCKING';
    readonly HARVESTING: 'HARVESTING';
    readonly QUARANTINE: 'QUARANTINE';
    readonly MAINTENANCE: 'MAINTENANCE';
};
export type PondStatus = (typeof PondStatus)[keyof typeof PondStatus];
export declare const DeviceStatus: {
    readonly ONLINE: 'ONLINE';
    readonly OFFLINE: 'OFFLINE';
    readonly MAINTENANCE: 'MAINTENANCE';
    readonly DISCONNECTED: 'DISCONNECTED';
};
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];
export declare const DeviceType: {
    readonly WATER_MONITOR: 'WATER_MONITOR';
    readonly FEEDING_CONTROLLER: 'FEEDING_CONTROLLER';
    readonly CAMERA: 'CAMERA';
};
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];
export declare const SensorStatus: {
    readonly NORMAL: 'NORMAL';
    readonly WARNING: 'WARNING';
    readonly CRITICAL: 'CRITICAL';
};
export type SensorStatus = (typeof SensorStatus)[keyof typeof SensorStatus];
export declare const SensorType: {
    readonly PH: 'PH';
    readonly TEMPERATURE: 'TEMPERATURE';
    readonly DISSOLVED_OXYGEN: 'DISSOLVED_OXYGEN';
    readonly TURBIDITY: 'TURBIDITY';
    readonly AMMONIA: 'AMMONIA';
};
export type SensorType = (typeof SensorType)[keyof typeof SensorType];
export declare const FeedingStatus: {
    readonly SCHEDULED: 'SCHEDULED';
    readonly COMPLETED: 'COMPLETED';
    readonly MISSED: 'MISSED';
    readonly CANCELLED: 'CANCELLED';
};
export type FeedingStatus = (typeof FeedingStatus)[keyof typeof FeedingStatus];
export declare const FeedType: {
    readonly STARTER: 'STARTER';
    readonly GROWER: 'GROWER';
    readonly FINISHER: 'FINISHER';
    readonly FLOATING: 'FLOATING';
    readonly SINKING: 'SINKING';
    readonly CUSTOM: 'CUSTOM';
};
export type FeedType = (typeof FeedType)[keyof typeof FeedType];
export declare const AlertSeverity: {
    readonly INFO: 'INFO';
    readonly WARNING: 'WARNING';
    readonly HIGH: 'HIGH';
    readonly CRITICAL: 'CRITICAL';
};
export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];
export declare const AlertStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly ACKNOWLEDGED: 'ACKNOWLEDGED';
    readonly RESOLVED: 'RESOLVED';
};
export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus];
export declare const PurchaseStatus: {
    readonly PENDING: 'PENDING';
    readonly COMPLETED: 'COMPLETED';
    readonly FAILED: 'FAILED';
    readonly REFUNDED: 'REFUNDED';
};
export type PurchaseStatus = (typeof PurchaseStatus)[keyof typeof PurchaseStatus];
export declare const PredictionType: {
    readonly WATER_QUALITY: 'WATER_QUALITY';
    readonly DISEASE: 'DISEASE';
    readonly GROWTH: 'GROWTH';
};
export type PredictionType = (typeof PredictionType)[keyof typeof PredictionType];
export declare const RiskLevel: {
    readonly LOW: 'LOW';
    readonly MEDIUM: 'MEDIUM';
    readonly HIGH: 'HIGH';
    readonly CRITICAL: 'CRITICAL';
};
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
export declare const NotificationType: {
    readonly ALERT: 'ALERT';
    readonly FEEDING: 'FEEDING';
    readonly DEVICE: 'DEVICE';
    readonly SYSTEM: 'SYSTEM';
    readonly SUBSCRIPTION: 'SUBSCRIPTION';
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const NotificationChannel: {
    readonly IN_APP: 'IN_APP';
    readonly PUSH: 'PUSH';
    readonly EMAIL: 'EMAIL';
    readonly SMS: 'SMS';
};
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];
export declare const SubscriptionStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly TRIAL: 'TRIAL';
    readonly EXPIRED: 'EXPIRED';
    readonly CANCELLED: 'CANCELLED';
};
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
export declare const BillingCycle: {
    readonly MONTHLY: 'MONTHLY';
    readonly YEARLY: 'YEARLY';
};
export type BillingCycle = (typeof BillingCycle)[keyof typeof BillingCycle];
export declare const PaymentStatus: {
    readonly PENDING: 'PENDING';
    readonly SUCCESS: 'SUCCESS';
    readonly FAILED: 'FAILED';
    readonly REFUNDED: 'REFUNDED';
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentProvider: {
    readonly PAYSTACK: 'PAYSTACK';
    readonly FLUTTERWAVE: 'FLUTTERWAVE';
    readonly STRIPE: 'STRIPE';
};
export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider];
export declare const ReportType: {
    readonly DAILY: 'DAILY';
    readonly WEEKLY: 'WEEKLY';
    readonly MONTHLY: 'MONTHLY';
    readonly CUSTOM: 'CUSTOM';
};
export type ReportType = (typeof ReportType)[keyof typeof ReportType];
//# sourceMappingURL=enums.d.ts.map