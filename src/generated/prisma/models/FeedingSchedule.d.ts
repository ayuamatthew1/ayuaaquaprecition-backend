import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FeedingSchedule
 *
 */
export type FeedingScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$FeedingSchedulePayload>;
export type AggregateFeedingSchedule = {
    _count: FeedingScheduleCountAggregateOutputType | null;
    _avg: FeedingScheduleAvgAggregateOutputType | null;
    _sum: FeedingScheduleSumAggregateOutputType | null;
    _min: FeedingScheduleMinAggregateOutputType | null;
    _max: FeedingScheduleMaxAggregateOutputType | null;
};
export type FeedingScheduleAvgAggregateOutputType = {
    quantity: number | null;
};
export type FeedingScheduleSumAggregateOutputType = {
    quantity: number | null;
};
export type FeedingScheduleMinAggregateOutputType = {
    id: string | null;
    pondId: string | null;
    feedType: $Enums.FeedType | null;
    quantity: number | null;
    unit: string | null;
    feedTime: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeedingScheduleMaxAggregateOutputType = {
    id: string | null;
    pondId: string | null;
    feedType: $Enums.FeedType | null;
    quantity: number | null;
    unit: string | null;
    feedTime: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeedingScheduleCountAggregateOutputType = {
    id: number;
    pondId: number;
    feedType: number;
    quantity: number;
    unit: number;
    feedTime: number;
    repeatDays: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FeedingScheduleAvgAggregateInputType = {
    quantity?: true;
};
export type FeedingScheduleSumAggregateInputType = {
    quantity?: true;
};
export type FeedingScheduleMinAggregateInputType = {
    id?: true;
    pondId?: true;
    feedType?: true;
    quantity?: true;
    unit?: true;
    feedTime?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeedingScheduleMaxAggregateInputType = {
    id?: true;
    pondId?: true;
    feedType?: true;
    quantity?: true;
    unit?: true;
    feedTime?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeedingScheduleCountAggregateInputType = {
    id?: true;
    pondId?: true;
    feedType?: true;
    quantity?: true;
    unit?: true;
    feedTime?: true;
    repeatDays?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FeedingScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FeedingSchedule to aggregate.
     */
    where?: Prisma.FeedingScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedingSchedules to fetch.
     */
    orderBy?: Prisma.FeedingScheduleOrderByWithRelationInput | Prisma.FeedingScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FeedingScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedingSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedingSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FeedingSchedules
    **/
    _count?: true | FeedingScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FeedingScheduleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FeedingScheduleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FeedingScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FeedingScheduleMaxAggregateInputType;
};
export type GetFeedingScheduleAggregateType<T extends FeedingScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateFeedingSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeedingSchedule[P]> : Prisma.GetScalarType<T[P], AggregateFeedingSchedule[P]>;
};
export type FeedingScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedingScheduleWhereInput;
    orderBy?: Prisma.FeedingScheduleOrderByWithAggregationInput | Prisma.FeedingScheduleOrderByWithAggregationInput[];
    by: Prisma.FeedingScheduleScalarFieldEnum[] | Prisma.FeedingScheduleScalarFieldEnum;
    having?: Prisma.FeedingScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeedingScheduleCountAggregateInputType | true;
    _avg?: FeedingScheduleAvgAggregateInputType;
    _sum?: FeedingScheduleSumAggregateInputType;
    _min?: FeedingScheduleMinAggregateInputType;
    _max?: FeedingScheduleMaxAggregateInputType;
};
export type FeedingScheduleGroupByOutputType = {
    id: string;
    pondId: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date;
    repeatDays: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: FeedingScheduleCountAggregateOutputType | null;
    _avg: FeedingScheduleAvgAggregateOutputType | null;
    _sum: FeedingScheduleSumAggregateOutputType | null;
    _min: FeedingScheduleMinAggregateOutputType | null;
    _max: FeedingScheduleMaxAggregateOutputType | null;
};
export type GetFeedingScheduleGroupByPayload<T extends FeedingScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeedingScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeedingScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeedingScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeedingScheduleGroupByOutputType[P]>;
}>>;
export type FeedingScheduleWhereInput = {
    AND?: Prisma.FeedingScheduleWhereInput | Prisma.FeedingScheduleWhereInput[];
    OR?: Prisma.FeedingScheduleWhereInput[];
    NOT?: Prisma.FeedingScheduleWhereInput | Prisma.FeedingScheduleWhereInput[];
    id?: Prisma.StringFilter<"FeedingSchedule"> | string;
    pondId?: Prisma.StringFilter<"FeedingSchedule"> | string;
    feedType?: Prisma.EnumFeedTypeFilter<"FeedingSchedule"> | $Enums.FeedType;
    quantity?: Prisma.FloatFilter<"FeedingSchedule"> | number;
    unit?: Prisma.StringFilter<"FeedingSchedule"> | string;
    feedTime?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
    repeatDays?: Prisma.StringNullableListFilter<"FeedingSchedule">;
    isActive?: Prisma.BoolFilter<"FeedingSchedule"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
    pond?: Prisma.XOR<Prisma.PondScalarRelationFilter, Prisma.PondWhereInput>;
    histories?: Prisma.FeedHistoryListRelationFilter;
};
export type FeedingScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    feedType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    feedTime?: Prisma.SortOrder;
    repeatDays?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pond?: Prisma.PondOrderByWithRelationInput;
    histories?: Prisma.FeedHistoryOrderByRelationAggregateInput;
};
export type FeedingScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FeedingScheduleWhereInput | Prisma.FeedingScheduleWhereInput[];
    OR?: Prisma.FeedingScheduleWhereInput[];
    NOT?: Prisma.FeedingScheduleWhereInput | Prisma.FeedingScheduleWhereInput[];
    pondId?: Prisma.StringFilter<"FeedingSchedule"> | string;
    feedType?: Prisma.EnumFeedTypeFilter<"FeedingSchedule"> | $Enums.FeedType;
    quantity?: Prisma.FloatFilter<"FeedingSchedule"> | number;
    unit?: Prisma.StringFilter<"FeedingSchedule"> | string;
    feedTime?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
    repeatDays?: Prisma.StringNullableListFilter<"FeedingSchedule">;
    isActive?: Prisma.BoolFilter<"FeedingSchedule"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
    pond?: Prisma.XOR<Prisma.PondScalarRelationFilter, Prisma.PondWhereInput>;
    histories?: Prisma.FeedHistoryListRelationFilter;
}, "id">;
export type FeedingScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    feedType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    feedTime?: Prisma.SortOrder;
    repeatDays?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FeedingScheduleCountOrderByAggregateInput;
    _avg?: Prisma.FeedingScheduleAvgOrderByAggregateInput;
    _max?: Prisma.FeedingScheduleMaxOrderByAggregateInput;
    _min?: Prisma.FeedingScheduleMinOrderByAggregateInput;
    _sum?: Prisma.FeedingScheduleSumOrderByAggregateInput;
};
export type FeedingScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeedingScheduleScalarWhereWithAggregatesInput | Prisma.FeedingScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeedingScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeedingScheduleScalarWhereWithAggregatesInput | Prisma.FeedingScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FeedingSchedule"> | string;
    pondId?: Prisma.StringWithAggregatesFilter<"FeedingSchedule"> | string;
    feedType?: Prisma.EnumFeedTypeWithAggregatesFilter<"FeedingSchedule"> | $Enums.FeedType;
    quantity?: Prisma.FloatWithAggregatesFilter<"FeedingSchedule"> | number;
    unit?: Prisma.StringWithAggregatesFilter<"FeedingSchedule"> | string;
    feedTime?: Prisma.DateTimeWithAggregatesFilter<"FeedingSchedule"> | Date | string;
    repeatDays?: Prisma.StringNullableListFilter<"FeedingSchedule">;
    isActive?: Prisma.BoolWithAggregatesFilter<"FeedingSchedule"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeedingSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FeedingSchedule"> | Date | string;
};
export type FeedingScheduleCreateInput = {
    id?: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date | string;
    repeatDays?: Prisma.FeedingScheduleCreaterepeatDaysInput | string[];
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pond: Prisma.PondCreateNestedOneWithoutFeedingSchedulesInput;
    histories?: Prisma.FeedHistoryCreateNestedManyWithoutScheduleInput;
};
export type FeedingScheduleUncheckedCreateInput = {
    id?: string;
    pondId: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date | string;
    repeatDays?: Prisma.FeedingScheduleCreaterepeatDaysInput | string[];
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    histories?: Prisma.FeedHistoryUncheckedCreateNestedManyWithoutScheduleInput;
};
export type FeedingScheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pond?: Prisma.PondUpdateOneRequiredWithoutFeedingSchedulesNestedInput;
    histories?: Prisma.FeedHistoryUpdateManyWithoutScheduleNestedInput;
};
export type FeedingScheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pondId?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    histories?: Prisma.FeedHistoryUncheckedUpdateManyWithoutScheduleNestedInput;
};
export type FeedingScheduleCreateManyInput = {
    id?: string;
    pondId: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date | string;
    repeatDays?: Prisma.FeedingScheduleCreaterepeatDaysInput | string[];
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedingScheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedingScheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pondId?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedingScheduleListRelationFilter = {
    every?: Prisma.FeedingScheduleWhereInput;
    some?: Prisma.FeedingScheduleWhereInput;
    none?: Prisma.FeedingScheduleWhereInput;
};
export type FeedingScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type FeedingScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    feedType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    feedTime?: Prisma.SortOrder;
    repeatDays?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedingScheduleAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type FeedingScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    feedType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    feedTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedingScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    feedType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    feedTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedingScheduleSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type FeedingScheduleScalarRelationFilter = {
    is?: Prisma.FeedingScheduleWhereInput;
    isNot?: Prisma.FeedingScheduleWhereInput;
};
export type FeedingScheduleCreateNestedManyWithoutPondInput = {
    create?: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutPondInput, Prisma.FeedingScheduleUncheckedCreateWithoutPondInput> | Prisma.FeedingScheduleCreateWithoutPondInput[] | Prisma.FeedingScheduleUncheckedCreateWithoutPondInput[];
    connectOrCreate?: Prisma.FeedingScheduleCreateOrConnectWithoutPondInput | Prisma.FeedingScheduleCreateOrConnectWithoutPondInput[];
    createMany?: Prisma.FeedingScheduleCreateManyPondInputEnvelope;
    connect?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
};
export type FeedingScheduleUncheckedCreateNestedManyWithoutPondInput = {
    create?: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutPondInput, Prisma.FeedingScheduleUncheckedCreateWithoutPondInput> | Prisma.FeedingScheduleCreateWithoutPondInput[] | Prisma.FeedingScheduleUncheckedCreateWithoutPondInput[];
    connectOrCreate?: Prisma.FeedingScheduleCreateOrConnectWithoutPondInput | Prisma.FeedingScheduleCreateOrConnectWithoutPondInput[];
    createMany?: Prisma.FeedingScheduleCreateManyPondInputEnvelope;
    connect?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
};
export type FeedingScheduleUpdateManyWithoutPondNestedInput = {
    create?: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutPondInput, Prisma.FeedingScheduleUncheckedCreateWithoutPondInput> | Prisma.FeedingScheduleCreateWithoutPondInput[] | Prisma.FeedingScheduleUncheckedCreateWithoutPondInput[];
    connectOrCreate?: Prisma.FeedingScheduleCreateOrConnectWithoutPondInput | Prisma.FeedingScheduleCreateOrConnectWithoutPondInput[];
    upsert?: Prisma.FeedingScheduleUpsertWithWhereUniqueWithoutPondInput | Prisma.FeedingScheduleUpsertWithWhereUniqueWithoutPondInput[];
    createMany?: Prisma.FeedingScheduleCreateManyPondInputEnvelope;
    set?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
    disconnect?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
    delete?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
    connect?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
    update?: Prisma.FeedingScheduleUpdateWithWhereUniqueWithoutPondInput | Prisma.FeedingScheduleUpdateWithWhereUniqueWithoutPondInput[];
    updateMany?: Prisma.FeedingScheduleUpdateManyWithWhereWithoutPondInput | Prisma.FeedingScheduleUpdateManyWithWhereWithoutPondInput[];
    deleteMany?: Prisma.FeedingScheduleScalarWhereInput | Prisma.FeedingScheduleScalarWhereInput[];
};
export type FeedingScheduleUncheckedUpdateManyWithoutPondNestedInput = {
    create?: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutPondInput, Prisma.FeedingScheduleUncheckedCreateWithoutPondInput> | Prisma.FeedingScheduleCreateWithoutPondInput[] | Prisma.FeedingScheduleUncheckedCreateWithoutPondInput[];
    connectOrCreate?: Prisma.FeedingScheduleCreateOrConnectWithoutPondInput | Prisma.FeedingScheduleCreateOrConnectWithoutPondInput[];
    upsert?: Prisma.FeedingScheduleUpsertWithWhereUniqueWithoutPondInput | Prisma.FeedingScheduleUpsertWithWhereUniqueWithoutPondInput[];
    createMany?: Prisma.FeedingScheduleCreateManyPondInputEnvelope;
    set?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
    disconnect?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
    delete?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
    connect?: Prisma.FeedingScheduleWhereUniqueInput | Prisma.FeedingScheduleWhereUniqueInput[];
    update?: Prisma.FeedingScheduleUpdateWithWhereUniqueWithoutPondInput | Prisma.FeedingScheduleUpdateWithWhereUniqueWithoutPondInput[];
    updateMany?: Prisma.FeedingScheduleUpdateManyWithWhereWithoutPondInput | Prisma.FeedingScheduleUpdateManyWithWhereWithoutPondInput[];
    deleteMany?: Prisma.FeedingScheduleScalarWhereInput | Prisma.FeedingScheduleScalarWhereInput[];
};
export type FeedingScheduleCreaterepeatDaysInput = {
    set: string[];
};
export type EnumFeedTypeFieldUpdateOperationsInput = {
    set?: $Enums.FeedType;
};
export type FeedingScheduleUpdaterepeatDaysInput = {
    set?: string[];
    push?: string | string[];
};
export type FeedingScheduleCreateNestedOneWithoutHistoriesInput = {
    create?: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutHistoriesInput, Prisma.FeedingScheduleUncheckedCreateWithoutHistoriesInput>;
    connectOrCreate?: Prisma.FeedingScheduleCreateOrConnectWithoutHistoriesInput;
    connect?: Prisma.FeedingScheduleWhereUniqueInput;
};
export type FeedingScheduleUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutHistoriesInput, Prisma.FeedingScheduleUncheckedCreateWithoutHistoriesInput>;
    connectOrCreate?: Prisma.FeedingScheduleCreateOrConnectWithoutHistoriesInput;
    upsert?: Prisma.FeedingScheduleUpsertWithoutHistoriesInput;
    connect?: Prisma.FeedingScheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeedingScheduleUpdateToOneWithWhereWithoutHistoriesInput, Prisma.FeedingScheduleUpdateWithoutHistoriesInput>, Prisma.FeedingScheduleUncheckedUpdateWithoutHistoriesInput>;
};
export type FeedingScheduleCreateWithoutPondInput = {
    id?: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date | string;
    repeatDays?: Prisma.FeedingScheduleCreaterepeatDaysInput | string[];
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    histories?: Prisma.FeedHistoryCreateNestedManyWithoutScheduleInput;
};
export type FeedingScheduleUncheckedCreateWithoutPondInput = {
    id?: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date | string;
    repeatDays?: Prisma.FeedingScheduleCreaterepeatDaysInput | string[];
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    histories?: Prisma.FeedHistoryUncheckedCreateNestedManyWithoutScheduleInput;
};
export type FeedingScheduleCreateOrConnectWithoutPondInput = {
    where: Prisma.FeedingScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutPondInput, Prisma.FeedingScheduleUncheckedCreateWithoutPondInput>;
};
export type FeedingScheduleCreateManyPondInputEnvelope = {
    data: Prisma.FeedingScheduleCreateManyPondInput | Prisma.FeedingScheduleCreateManyPondInput[];
    skipDuplicates?: boolean;
};
export type FeedingScheduleUpsertWithWhereUniqueWithoutPondInput = {
    where: Prisma.FeedingScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeedingScheduleUpdateWithoutPondInput, Prisma.FeedingScheduleUncheckedUpdateWithoutPondInput>;
    create: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutPondInput, Prisma.FeedingScheduleUncheckedCreateWithoutPondInput>;
};
export type FeedingScheduleUpdateWithWhereUniqueWithoutPondInput = {
    where: Prisma.FeedingScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeedingScheduleUpdateWithoutPondInput, Prisma.FeedingScheduleUncheckedUpdateWithoutPondInput>;
};
export type FeedingScheduleUpdateManyWithWhereWithoutPondInput = {
    where: Prisma.FeedingScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.FeedingScheduleUpdateManyMutationInput, Prisma.FeedingScheduleUncheckedUpdateManyWithoutPondInput>;
};
export type FeedingScheduleScalarWhereInput = {
    AND?: Prisma.FeedingScheduleScalarWhereInput | Prisma.FeedingScheduleScalarWhereInput[];
    OR?: Prisma.FeedingScheduleScalarWhereInput[];
    NOT?: Prisma.FeedingScheduleScalarWhereInput | Prisma.FeedingScheduleScalarWhereInput[];
    id?: Prisma.StringFilter<"FeedingSchedule"> | string;
    pondId?: Prisma.StringFilter<"FeedingSchedule"> | string;
    feedType?: Prisma.EnumFeedTypeFilter<"FeedingSchedule"> | $Enums.FeedType;
    quantity?: Prisma.FloatFilter<"FeedingSchedule"> | number;
    unit?: Prisma.StringFilter<"FeedingSchedule"> | string;
    feedTime?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
    repeatDays?: Prisma.StringNullableListFilter<"FeedingSchedule">;
    isActive?: Prisma.BoolFilter<"FeedingSchedule"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedingSchedule"> | Date | string;
};
export type FeedingScheduleCreateWithoutHistoriesInput = {
    id?: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date | string;
    repeatDays?: Prisma.FeedingScheduleCreaterepeatDaysInput | string[];
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pond: Prisma.PondCreateNestedOneWithoutFeedingSchedulesInput;
};
export type FeedingScheduleUncheckedCreateWithoutHistoriesInput = {
    id?: string;
    pondId: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date | string;
    repeatDays?: Prisma.FeedingScheduleCreaterepeatDaysInput | string[];
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedingScheduleCreateOrConnectWithoutHistoriesInput = {
    where: Prisma.FeedingScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutHistoriesInput, Prisma.FeedingScheduleUncheckedCreateWithoutHistoriesInput>;
};
export type FeedingScheduleUpsertWithoutHistoriesInput = {
    update: Prisma.XOR<Prisma.FeedingScheduleUpdateWithoutHistoriesInput, Prisma.FeedingScheduleUncheckedUpdateWithoutHistoriesInput>;
    create: Prisma.XOR<Prisma.FeedingScheduleCreateWithoutHistoriesInput, Prisma.FeedingScheduleUncheckedCreateWithoutHistoriesInput>;
    where?: Prisma.FeedingScheduleWhereInput;
};
export type FeedingScheduleUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: Prisma.FeedingScheduleWhereInput;
    data: Prisma.XOR<Prisma.FeedingScheduleUpdateWithoutHistoriesInput, Prisma.FeedingScheduleUncheckedUpdateWithoutHistoriesInput>;
};
export type FeedingScheduleUpdateWithoutHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pond?: Prisma.PondUpdateOneRequiredWithoutFeedingSchedulesNestedInput;
};
export type FeedingScheduleUncheckedUpdateWithoutHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pondId?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedingScheduleCreateManyPondInput = {
    id?: string;
    feedType: $Enums.FeedType;
    quantity: number;
    unit: string;
    feedTime: Date | string;
    repeatDays?: Prisma.FeedingScheduleCreaterepeatDaysInput | string[];
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedingScheduleUpdateWithoutPondInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    histories?: Prisma.FeedHistoryUpdateManyWithoutScheduleNestedInput;
};
export type FeedingScheduleUncheckedUpdateWithoutPondInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    histories?: Prisma.FeedHistoryUncheckedUpdateManyWithoutScheduleNestedInput;
};
export type FeedingScheduleUncheckedUpdateManyWithoutPondInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedType?: Prisma.EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    feedTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repeatDays?: Prisma.FeedingScheduleUpdaterepeatDaysInput | string[];
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type FeedingScheduleCountOutputType
 */
export type FeedingScheduleCountOutputType = {
    histories: number;
};
export type FeedingScheduleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    histories?: boolean | FeedingScheduleCountOutputTypeCountHistoriesArgs;
};
/**
 * FeedingScheduleCountOutputType without action
 */
export type FeedingScheduleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingScheduleCountOutputType
     */
    select?: Prisma.FeedingScheduleCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FeedingScheduleCountOutputType without action
 */
export type FeedingScheduleCountOutputTypeCountHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedHistoryWhereInput;
};
export type FeedingScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pondId?: boolean;
    feedType?: boolean;
    quantity?: boolean;
    unit?: boolean;
    feedTime?: boolean;
    repeatDays?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
    histories?: boolean | Prisma.FeedingSchedule$historiesArgs<ExtArgs>;
    _count?: boolean | Prisma.FeedingScheduleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedingSchedule"]>;
export type FeedingScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pondId?: boolean;
    feedType?: boolean;
    quantity?: boolean;
    unit?: boolean;
    feedTime?: boolean;
    repeatDays?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedingSchedule"]>;
export type FeedingScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pondId?: boolean;
    feedType?: boolean;
    quantity?: boolean;
    unit?: boolean;
    feedTime?: boolean;
    repeatDays?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedingSchedule"]>;
export type FeedingScheduleSelectScalar = {
    id?: boolean;
    pondId?: boolean;
    feedType?: boolean;
    quantity?: boolean;
    unit?: boolean;
    feedTime?: boolean;
    repeatDays?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FeedingScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pondId" | "feedType" | "quantity" | "unit" | "feedTime" | "repeatDays" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["feedingSchedule"]>;
export type FeedingScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
    histories?: boolean | Prisma.FeedingSchedule$historiesArgs<ExtArgs>;
    _count?: boolean | Prisma.FeedingScheduleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FeedingScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
};
export type FeedingScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
};
export type $FeedingSchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeedingSchedule";
    objects: {
        pond: Prisma.$PondPayload<ExtArgs>;
        histories: Prisma.$FeedHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        pondId: string;
        feedType: $Enums.FeedType;
        quantity: number;
        unit: string;
        feedTime: Date;
        repeatDays: string[];
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["feedingSchedule"]>;
    composites: {};
};
export type FeedingScheduleGetPayload<S extends boolean | null | undefined | FeedingScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload, S>;
export type FeedingScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeedingScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeedingScheduleCountAggregateInputType | true;
};
export interface FeedingScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeedingSchedule'];
        meta: {
            name: 'FeedingSchedule';
        };
    };
    /**
     * Find zero or one FeedingSchedule that matches the filter.
     * @param {FeedingScheduleFindUniqueArgs} args - Arguments to find a FeedingSchedule
     * @example
     * // Get one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedingScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, FeedingScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeedingScheduleClient<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FeedingSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedingScheduleFindUniqueOrThrowArgs} args - Arguments to find a FeedingSchedule
     * @example
     * // Get one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedingScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeedingScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeedingScheduleClient<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FeedingSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleFindFirstArgs} args - Arguments to find a FeedingSchedule
     * @example
     * // Get one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedingScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, FeedingScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeedingScheduleClient<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FeedingSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleFindFirstOrThrowArgs} args - Arguments to find a FeedingSchedule
     * @example
     * // Get one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedingScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeedingScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeedingScheduleClient<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FeedingSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedingSchedules
     * const feedingSchedules = await prisma.feedingSchedule.findMany()
     *
     * // Get first 10 FeedingSchedules
     * const feedingSchedules = await prisma.feedingSchedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const feedingScheduleWithIdOnly = await prisma.feedingSchedule.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FeedingScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, FeedingScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FeedingSchedule.
     * @param {FeedingScheduleCreateArgs} args - Arguments to create a FeedingSchedule.
     * @example
     * // Create one FeedingSchedule
     * const FeedingSchedule = await prisma.feedingSchedule.create({
     *   data: {
     *     // ... data to create a FeedingSchedule
     *   }
     * })
     *
     */
    create<T extends FeedingScheduleCreateArgs>(args: Prisma.SelectSubset<T, FeedingScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__FeedingScheduleClient<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FeedingSchedules.
     * @param {FeedingScheduleCreateManyArgs} args - Arguments to create many FeedingSchedules.
     * @example
     * // Create many FeedingSchedules
     * const feedingSchedule = await prisma.feedingSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FeedingScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, FeedingScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FeedingSchedules and returns the data saved in the database.
     * @param {FeedingScheduleCreateManyAndReturnArgs} args - Arguments to create many FeedingSchedules.
     * @example
     * // Create many FeedingSchedules
     * const feedingSchedule = await prisma.feedingSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FeedingSchedules and only return the `id`
     * const feedingScheduleWithIdOnly = await prisma.feedingSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FeedingScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeedingScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FeedingSchedule.
     * @param {FeedingScheduleDeleteArgs} args - Arguments to delete one FeedingSchedule.
     * @example
     * // Delete one FeedingSchedule
     * const FeedingSchedule = await prisma.feedingSchedule.delete({
     *   where: {
     *     // ... filter to delete one FeedingSchedule
     *   }
     * })
     *
     */
    delete<T extends FeedingScheduleDeleteArgs>(args: Prisma.SelectSubset<T, FeedingScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__FeedingScheduleClient<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FeedingSchedule.
     * @param {FeedingScheduleUpdateArgs} args - Arguments to update one FeedingSchedule.
     * @example
     * // Update one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FeedingScheduleUpdateArgs>(args: Prisma.SelectSubset<T, FeedingScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__FeedingScheduleClient<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FeedingSchedules.
     * @param {FeedingScheduleDeleteManyArgs} args - Arguments to filter FeedingSchedules to delete.
     * @example
     * // Delete a few FeedingSchedules
     * const { count } = await prisma.feedingSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FeedingScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeedingScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FeedingSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedingSchedules
     * const feedingSchedule = await prisma.feedingSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FeedingScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, FeedingScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FeedingSchedules and returns the data updated in the database.
     * @param {FeedingScheduleUpdateManyAndReturnArgs} args - Arguments to update many FeedingSchedules.
     * @example
     * // Update many FeedingSchedules
     * const feedingSchedule = await prisma.feedingSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FeedingSchedules and only return the `id`
     * const feedingScheduleWithIdOnly = await prisma.feedingSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedingScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeedingScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FeedingSchedule.
     * @param {FeedingScheduleUpsertArgs} args - Arguments to update or create a FeedingSchedule.
     * @example
     * // Update or create a FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.upsert({
     *   create: {
     *     // ... data to create a FeedingSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedingSchedule we want to update
     *   }
     * })
     */
    upsert<T extends FeedingScheduleUpsertArgs>(args: Prisma.SelectSubset<T, FeedingScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__FeedingScheduleClient<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FeedingSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleCountArgs} args - Arguments to filter FeedingSchedules to count.
     * @example
     * // Count the number of FeedingSchedules
     * const count = await prisma.feedingSchedule.count({
     *   where: {
     *     // ... the filter for the FeedingSchedules we want to count
     *   }
     * })
    **/
    count<T extends FeedingScheduleCountArgs>(args?: Prisma.Subset<T, FeedingScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeedingScheduleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FeedingSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedingScheduleAggregateArgs>(args: Prisma.Subset<T, FeedingScheduleAggregateArgs>): Prisma.PrismaPromise<GetFeedingScheduleAggregateType<T>>;
    /**
     * Group by FeedingSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FeedingScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeedingScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: FeedingScheduleGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeedingScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedingScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FeedingSchedule model
     */
    readonly fields: FeedingScheduleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FeedingSchedule.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FeedingScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pond<T extends Prisma.PondDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PondDefaultArgs<ExtArgs>>): Prisma.Prisma__PondClient<runtime.Types.Result.GetResult<Prisma.$PondPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    histories<T extends Prisma.FeedingSchedule$historiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeedingSchedule$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the FeedingSchedule model
 */
export interface FeedingScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"FeedingSchedule", 'String'>;
    readonly pondId: Prisma.FieldRef<"FeedingSchedule", 'String'>;
    readonly feedType: Prisma.FieldRef<"FeedingSchedule", 'FeedType'>;
    readonly quantity: Prisma.FieldRef<"FeedingSchedule", 'Float'>;
    readonly unit: Prisma.FieldRef<"FeedingSchedule", 'String'>;
    readonly feedTime: Prisma.FieldRef<"FeedingSchedule", 'DateTime'>;
    readonly repeatDays: Prisma.FieldRef<"FeedingSchedule", 'String[]'>;
    readonly isActive: Prisma.FieldRef<"FeedingSchedule", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"FeedingSchedule", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FeedingSchedule", 'DateTime'>;
}
/**
 * FeedingSchedule findUnique
 */
export type FeedingScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FeedingSchedule to fetch.
     */
    where: Prisma.FeedingScheduleWhereUniqueInput;
};
/**
 * FeedingSchedule findUniqueOrThrow
 */
export type FeedingScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FeedingSchedule to fetch.
     */
    where: Prisma.FeedingScheduleWhereUniqueInput;
};
/**
 * FeedingSchedule findFirst
 */
export type FeedingScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FeedingSchedule to fetch.
     */
    where?: Prisma.FeedingScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedingSchedules to fetch.
     */
    orderBy?: Prisma.FeedingScheduleOrderByWithRelationInput | Prisma.FeedingScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeedingSchedules.
     */
    cursor?: Prisma.FeedingScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedingSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedingSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedingSchedules.
     */
    distinct?: Prisma.FeedingScheduleScalarFieldEnum | Prisma.FeedingScheduleScalarFieldEnum[];
};
/**
 * FeedingSchedule findFirstOrThrow
 */
export type FeedingScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FeedingSchedule to fetch.
     */
    where?: Prisma.FeedingScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedingSchedules to fetch.
     */
    orderBy?: Prisma.FeedingScheduleOrderByWithRelationInput | Prisma.FeedingScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeedingSchedules.
     */
    cursor?: Prisma.FeedingScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedingSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedingSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedingSchedules.
     */
    distinct?: Prisma.FeedingScheduleScalarFieldEnum | Prisma.FeedingScheduleScalarFieldEnum[];
};
/**
 * FeedingSchedule findMany
 */
export type FeedingScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FeedingSchedules to fetch.
     */
    where?: Prisma.FeedingScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedingSchedules to fetch.
     */
    orderBy?: Prisma.FeedingScheduleOrderByWithRelationInput | Prisma.FeedingScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FeedingSchedules.
     */
    cursor?: Prisma.FeedingScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedingSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedingSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedingSchedules.
     */
    distinct?: Prisma.FeedingScheduleScalarFieldEnum | Prisma.FeedingScheduleScalarFieldEnum[];
};
/**
 * FeedingSchedule create
 */
export type FeedingScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * The data needed to create a FeedingSchedule.
     */
    data: Prisma.XOR<Prisma.FeedingScheduleCreateInput, Prisma.FeedingScheduleUncheckedCreateInput>;
};
/**
 * FeedingSchedule createMany
 */
export type FeedingScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedingSchedules.
     */
    data: Prisma.FeedingScheduleCreateManyInput | Prisma.FeedingScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FeedingSchedule createManyAndReturn
 */
export type FeedingScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * The data used to create many FeedingSchedules.
     */
    data: Prisma.FeedingScheduleCreateManyInput | Prisma.FeedingScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FeedingSchedule update
 */
export type FeedingScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * The data needed to update a FeedingSchedule.
     */
    data: Prisma.XOR<Prisma.FeedingScheduleUpdateInput, Prisma.FeedingScheduleUncheckedUpdateInput>;
    /**
     * Choose, which FeedingSchedule to update.
     */
    where: Prisma.FeedingScheduleWhereUniqueInput;
};
/**
 * FeedingSchedule updateMany
 */
export type FeedingScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedingSchedules.
     */
    data: Prisma.XOR<Prisma.FeedingScheduleUpdateManyMutationInput, Prisma.FeedingScheduleUncheckedUpdateManyInput>;
    /**
     * Filter which FeedingSchedules to update
     */
    where?: Prisma.FeedingScheduleWhereInput;
    /**
     * Limit how many FeedingSchedules to update.
     */
    limit?: number;
};
/**
 * FeedingSchedule updateManyAndReturn
 */
export type FeedingScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * The data used to update FeedingSchedules.
     */
    data: Prisma.XOR<Prisma.FeedingScheduleUpdateManyMutationInput, Prisma.FeedingScheduleUncheckedUpdateManyInput>;
    /**
     * Filter which FeedingSchedules to update
     */
    where?: Prisma.FeedingScheduleWhereInput;
    /**
     * Limit how many FeedingSchedules to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FeedingSchedule upsert
 */
export type FeedingScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * The filter to search for the FeedingSchedule to update in case it exists.
     */
    where: Prisma.FeedingScheduleWhereUniqueInput;
    /**
     * In case the FeedingSchedule found by the `where` argument doesn't exist, create a new FeedingSchedule with this data.
     */
    create: Prisma.XOR<Prisma.FeedingScheduleCreateInput, Prisma.FeedingScheduleUncheckedCreateInput>;
    /**
     * In case the FeedingSchedule was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FeedingScheduleUpdateInput, Prisma.FeedingScheduleUncheckedUpdateInput>;
};
/**
 * FeedingSchedule delete
 */
export type FeedingScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    /**
     * Filter which FeedingSchedule to delete.
     */
    where: Prisma.FeedingScheduleWhereUniqueInput;
};
/**
 * FeedingSchedule deleteMany
 */
export type FeedingScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FeedingSchedules to delete
     */
    where?: Prisma.FeedingScheduleWhereInput;
    /**
     * Limit how many FeedingSchedules to delete.
     */
    limit?: number;
};
/**
 * FeedingSchedule.histories
 */
export type FeedingSchedule$historiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedHistory
     */
    select?: Prisma.FeedHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedHistory
     */
    omit?: Prisma.FeedHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedHistoryInclude<ExtArgs> | null;
    where?: Prisma.FeedHistoryWhereInput;
    orderBy?: Prisma.FeedHistoryOrderByWithRelationInput | Prisma.FeedHistoryOrderByWithRelationInput[];
    cursor?: Prisma.FeedHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeedHistoryScalarFieldEnum | Prisma.FeedHistoryScalarFieldEnum[];
};
/**
 * FeedingSchedule without action
 */
export type FeedingScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
};
//# sourceMappingURL=FeedingSchedule.d.ts.map