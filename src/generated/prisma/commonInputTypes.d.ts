import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type EnumFarmStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmStatus | Prisma.EnumFarmStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FarmStatus[] | Prisma.ListEnumFarmStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FarmStatus[] | Prisma.ListEnumFarmStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFarmStatusFilter<$PrismaModel> | $Enums.FarmStatus;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type EnumFarmStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmStatus | Prisma.EnumFarmStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FarmStatus[] | Prisma.ListEnumFarmStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FarmStatus[] | Prisma.ListEnumFarmStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFarmStatusWithAggregatesFilter<$PrismaModel> | $Enums.FarmStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFarmStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFarmStatusFilter<$PrismaModel>;
};
export type EnumPondTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PondType | Prisma.EnumPondTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PondType[] | Prisma.ListEnumPondTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PondType[] | Prisma.ListEnumPondTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPondTypeFilter<$PrismaModel> | $Enums.PondType;
};
export type EnumPondStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PondStatus | Prisma.EnumPondStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PondStatus[] | Prisma.ListEnumPondStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PondStatus[] | Prisma.ListEnumPondStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPondStatusFilter<$PrismaModel> | $Enums.PondStatus;
};
export type EnumPondTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PondType | Prisma.EnumPondTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PondType[] | Prisma.ListEnumPondTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PondType[] | Prisma.ListEnumPondTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPondTypeWithAggregatesFilter<$PrismaModel> | $Enums.PondType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPondTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPondTypeFilter<$PrismaModel>;
};
export type EnumPondStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PondStatus | Prisma.EnumPondStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PondStatus[] | Prisma.ListEnumPondStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PondStatus[] | Prisma.ListEnumPondStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPondStatusWithAggregatesFilter<$PrismaModel> | $Enums.PondStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPondStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPondStatusFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | Prisma.EnumDeviceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeviceStatus[] | Prisma.ListEnumDeviceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeviceStatus[] | Prisma.ListEnumDeviceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus;
};
export type EnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | Prisma.EnumDeviceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeviceStatus[] | Prisma.ListEnumDeviceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeviceStatus[] | Prisma.ListEnumDeviceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeviceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeviceStatusFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type EnumPurchaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | Prisma.EnumPurchaseStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PurchaseStatus[] | Prisma.ListEnumPurchaseStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PurchaseStatus[] | Prisma.ListEnumPurchaseStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPurchaseStatusFilter<$PrismaModel> | $Enums.PurchaseStatus;
};
export type EnumPaymentProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | Prisma.EnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PaymentProvider[] | Prisma.ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PaymentProvider[] | Prisma.ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPaymentProviderNullableFilter<$PrismaModel> | $Enums.PaymentProvider | null;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumPurchaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | Prisma.EnumPurchaseStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PurchaseStatus[] | Prisma.ListEnumPurchaseStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PurchaseStatus[] | Prisma.ListEnumPurchaseStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPurchaseStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPurchaseStatusFilter<$PrismaModel>;
};
export type EnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | Prisma.EnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PaymentProvider[] | Prisma.ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PaymentProvider[] | Prisma.ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentProviderNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentProviderNullableFilter<$PrismaModel>;
};
export type EnumFeedTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedType | Prisma.EnumFeedTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FeedType[] | Prisma.ListEnumFeedTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FeedType[] | Prisma.ListEnumFeedTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFeedTypeFilter<$PrismaModel> | $Enums.FeedType;
};
export type EnumFeedTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedType | Prisma.EnumFeedTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FeedType[] | Prisma.ListEnumFeedTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FeedType[] | Prisma.ListEnumFeedTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFeedTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeedType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFeedTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFeedTypeFilter<$PrismaModel>;
};
export type EnumAlertSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | Prisma.EnumAlertSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel> | $Enums.AlertSeverity;
};
export type EnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | Prisma.EnumAlertStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus;
};
export type EnumAlertSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | Prisma.EnumAlertSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel> | $Enums.AlertSeverity;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel>;
};
export type EnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | Prisma.EnumAlertStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel>;
};
export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel;
};
export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
};
export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType;
};
export type EnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | Prisma.EnumNotificationChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel;
};
export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
};
export type EnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | Prisma.EnumNotificationChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel>;
};
export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus;
};
export type EnumBillingCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | Prisma.EnumBillingCycleFieldRefInput<$PrismaModel>;
    in?: $Enums.BillingCycle[] | Prisma.ListEnumBillingCycleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BillingCycle[] | Prisma.ListEnumBillingCycleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBillingCycleFilter<$PrismaModel> | $Enums.BillingCycle;
};
export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
};
export type EnumBillingCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | Prisma.EnumBillingCycleFieldRefInput<$PrismaModel>;
    in?: $Enums.BillingCycle[] | Prisma.ListEnumBillingCycleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BillingCycle[] | Prisma.ListEnumBillingCycleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel> | $Enums.BillingCycle;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBillingCycleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBillingCycleFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumFarmStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmStatus | Prisma.EnumFarmStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FarmStatus[] | Prisma.ListEnumFarmStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FarmStatus[] | Prisma.ListEnumFarmStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFarmStatusFilter<$PrismaModel> | $Enums.FarmStatus;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedEnumFarmStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmStatus | Prisma.EnumFarmStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FarmStatus[] | Prisma.ListEnumFarmStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FarmStatus[] | Prisma.ListEnumFarmStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFarmStatusWithAggregatesFilter<$PrismaModel> | $Enums.FarmStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFarmStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFarmStatusFilter<$PrismaModel>;
};
export type NestedEnumPondTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PondType | Prisma.EnumPondTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PondType[] | Prisma.ListEnumPondTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PondType[] | Prisma.ListEnumPondTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPondTypeFilter<$PrismaModel> | $Enums.PondType;
};
export type NestedEnumPondStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PondStatus | Prisma.EnumPondStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PondStatus[] | Prisma.ListEnumPondStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PondStatus[] | Prisma.ListEnumPondStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPondStatusFilter<$PrismaModel> | $Enums.PondStatus;
};
export type NestedEnumPondTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PondType | Prisma.EnumPondTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PondType[] | Prisma.ListEnumPondTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PondType[] | Prisma.ListEnumPondTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPondTypeWithAggregatesFilter<$PrismaModel> | $Enums.PondType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPondTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPondTypeFilter<$PrismaModel>;
};
export type NestedEnumPondStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PondStatus | Prisma.EnumPondStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PondStatus[] | Prisma.ListEnumPondStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PondStatus[] | Prisma.ListEnumPondStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPondStatusWithAggregatesFilter<$PrismaModel> | $Enums.PondStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPondStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPondStatusFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | Prisma.EnumDeviceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeviceStatus[] | Prisma.ListEnumDeviceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeviceStatus[] | Prisma.ListEnumDeviceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus;
};
export type NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | Prisma.EnumDeviceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeviceStatus[] | Prisma.ListEnumDeviceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeviceStatus[] | Prisma.ListEnumDeviceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeviceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeviceStatusFilter<$PrismaModel>;
};
export type NestedEnumPurchaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | Prisma.EnumPurchaseStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PurchaseStatus[] | Prisma.ListEnumPurchaseStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PurchaseStatus[] | Prisma.ListEnumPurchaseStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPurchaseStatusFilter<$PrismaModel> | $Enums.PurchaseStatus;
};
export type NestedEnumPaymentProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | Prisma.EnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PaymentProvider[] | Prisma.ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PaymentProvider[] | Prisma.ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPaymentProviderNullableFilter<$PrismaModel> | $Enums.PaymentProvider | null;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | Prisma.EnumPurchaseStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PurchaseStatus[] | Prisma.ListEnumPurchaseStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PurchaseStatus[] | Prisma.ListEnumPurchaseStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPurchaseStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPurchaseStatusFilter<$PrismaModel>;
};
export type NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | Prisma.EnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PaymentProvider[] | Prisma.ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PaymentProvider[] | Prisma.ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentProviderNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentProviderNullableFilter<$PrismaModel>;
};
export type NestedEnumFeedTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedType | Prisma.EnumFeedTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FeedType[] | Prisma.ListEnumFeedTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FeedType[] | Prisma.ListEnumFeedTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFeedTypeFilter<$PrismaModel> | $Enums.FeedType;
};
export type NestedEnumFeedTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedType | Prisma.EnumFeedTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FeedType[] | Prisma.ListEnumFeedTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FeedType[] | Prisma.ListEnumFeedTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFeedTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeedType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFeedTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFeedTypeFilter<$PrismaModel>;
};
export type NestedEnumAlertSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | Prisma.EnumAlertSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel> | $Enums.AlertSeverity;
};
export type NestedEnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | Prisma.EnumAlertStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus;
};
export type NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | Prisma.EnumAlertSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel> | $Enums.AlertSeverity;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel>;
};
export type NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | Prisma.EnumAlertStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel>;
};
export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel;
};
export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
};
export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType;
};
export type NestedEnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | Prisma.EnumNotificationChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel;
};
export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
};
export type NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | Prisma.EnumNotificationChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel>;
};
export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus;
};
export type NestedEnumBillingCycleFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | Prisma.EnumBillingCycleFieldRefInput<$PrismaModel>;
    in?: $Enums.BillingCycle[] | Prisma.ListEnumBillingCycleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BillingCycle[] | Prisma.ListEnumBillingCycleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBillingCycleFilter<$PrismaModel> | $Enums.BillingCycle;
};
export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
};
export type NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingCycle | Prisma.EnumBillingCycleFieldRefInput<$PrismaModel>;
    in?: $Enums.BillingCycle[] | Prisma.ListEnumBillingCycleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BillingCycle[] | Prisma.ListEnumBillingCycleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBillingCycleWithAggregatesFilter<$PrismaModel> | $Enums.BillingCycle;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBillingCycleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBillingCycleFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map