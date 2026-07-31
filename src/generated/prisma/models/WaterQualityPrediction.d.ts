import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model WaterQualityPrediction
 *
 */
export type WaterQualityPredictionModel = runtime.Types.Result.DefaultSelection<Prisma.$WaterQualityPredictionPayload>;
export type AggregateWaterQualityPrediction = {
    _count: WaterQualityPredictionCountAggregateOutputType | null;
    _avg: WaterQualityPredictionAvgAggregateOutputType | null;
    _sum: WaterQualityPredictionSumAggregateOutputType | null;
    _min: WaterQualityPredictionMinAggregateOutputType | null;
    _max: WaterQualityPredictionMaxAggregateOutputType | null;
};
export type WaterQualityPredictionAvgAggregateOutputType = {
    overallScore: number | null;
    confidence: number | null;
};
export type WaterQualityPredictionSumAggregateOutputType = {
    overallScore: number | null;
    confidence: number | null;
};
export type WaterQualityPredictionMinAggregateOutputType = {
    id: string | null;
    pondId: string | null;
    overallScore: number | null;
    riskLevel: $Enums.RiskLevel | null;
    summary: string | null;
    recommendations: string | null;
    confidence: number | null;
    generatedAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type WaterQualityPredictionMaxAggregateOutputType = {
    id: string | null;
    pondId: string | null;
    overallScore: number | null;
    riskLevel: $Enums.RiskLevel | null;
    summary: string | null;
    recommendations: string | null;
    confidence: number | null;
    generatedAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type WaterQualityPredictionCountAggregateOutputType = {
    id: number;
    pondId: number;
    overallScore: number;
    riskLevel: number;
    summary: number;
    recommendations: number;
    confidence: number;
    generatedAt: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
};
export type WaterQualityPredictionAvgAggregateInputType = {
    overallScore?: true;
    confidence?: true;
};
export type WaterQualityPredictionSumAggregateInputType = {
    overallScore?: true;
    confidence?: true;
};
export type WaterQualityPredictionMinAggregateInputType = {
    id?: true;
    pondId?: true;
    overallScore?: true;
    riskLevel?: true;
    summary?: true;
    recommendations?: true;
    confidence?: true;
    generatedAt?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type WaterQualityPredictionMaxAggregateInputType = {
    id?: true;
    pondId?: true;
    overallScore?: true;
    riskLevel?: true;
    summary?: true;
    recommendations?: true;
    confidence?: true;
    generatedAt?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type WaterQualityPredictionCountAggregateInputType = {
    id?: true;
    pondId?: true;
    overallScore?: true;
    riskLevel?: true;
    summary?: true;
    recommendations?: true;
    confidence?: true;
    generatedAt?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
};
export type WaterQualityPredictionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WaterQualityPrediction to aggregate.
     */
    where?: Prisma.WaterQualityPredictionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WaterQualityPredictions to fetch.
     */
    orderBy?: Prisma.WaterQualityPredictionOrderByWithRelationInput | Prisma.WaterQualityPredictionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WaterQualityPredictionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WaterQualityPredictions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WaterQualityPredictions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WaterQualityPredictions
    **/
    _count?: true | WaterQualityPredictionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: WaterQualityPredictionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: WaterQualityPredictionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WaterQualityPredictionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WaterQualityPredictionMaxAggregateInputType;
};
export type GetWaterQualityPredictionAggregateType<T extends WaterQualityPredictionAggregateArgs> = {
    [P in keyof T & keyof AggregateWaterQualityPrediction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWaterQualityPrediction[P]> : Prisma.GetScalarType<T[P], AggregateWaterQualityPrediction[P]>;
};
export type WaterQualityPredictionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WaterQualityPredictionWhereInput;
    orderBy?: Prisma.WaterQualityPredictionOrderByWithAggregationInput | Prisma.WaterQualityPredictionOrderByWithAggregationInput[];
    by: Prisma.WaterQualityPredictionScalarFieldEnum[] | Prisma.WaterQualityPredictionScalarFieldEnum;
    having?: Prisma.WaterQualityPredictionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WaterQualityPredictionCountAggregateInputType | true;
    _avg?: WaterQualityPredictionAvgAggregateInputType;
    _sum?: WaterQualityPredictionSumAggregateInputType;
    _min?: WaterQualityPredictionMinAggregateInputType;
    _max?: WaterQualityPredictionMaxAggregateInputType;
};
export type WaterQualityPredictionGroupByOutputType = {
    id: string;
    pondId: string;
    overallScore: number;
    riskLevel: $Enums.RiskLevel;
    summary: string;
    recommendations: string;
    confidence: number | null;
    generatedAt: Date;
    expiresAt: Date | null;
    createdAt: Date;
    _count: WaterQualityPredictionCountAggregateOutputType | null;
    _avg: WaterQualityPredictionAvgAggregateOutputType | null;
    _sum: WaterQualityPredictionSumAggregateOutputType | null;
    _min: WaterQualityPredictionMinAggregateOutputType | null;
    _max: WaterQualityPredictionMaxAggregateOutputType | null;
};
export type GetWaterQualityPredictionGroupByPayload<T extends WaterQualityPredictionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WaterQualityPredictionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WaterQualityPredictionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WaterQualityPredictionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WaterQualityPredictionGroupByOutputType[P]>;
}>>;
export type WaterQualityPredictionWhereInput = {
    AND?: Prisma.WaterQualityPredictionWhereInput | Prisma.WaterQualityPredictionWhereInput[];
    OR?: Prisma.WaterQualityPredictionWhereInput[];
    NOT?: Prisma.WaterQualityPredictionWhereInput | Prisma.WaterQualityPredictionWhereInput[];
    id?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    pondId?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    overallScore?: Prisma.FloatFilter<"WaterQualityPrediction"> | number;
    riskLevel?: Prisma.EnumRiskLevelFilter<"WaterQualityPrediction"> | $Enums.RiskLevel;
    summary?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    recommendations?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    confidence?: Prisma.FloatNullableFilter<"WaterQualityPrediction"> | number | null;
    generatedAt?: Prisma.DateTimeFilter<"WaterQualityPrediction"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"WaterQualityPrediction"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WaterQualityPrediction"> | Date | string;
    pond?: Prisma.XOR<Prisma.PondScalarRelationFilter, Prisma.PondWhereInput>;
};
export type WaterQualityPredictionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    overallScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    recommendations?: Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    pond?: Prisma.PondOrderByWithRelationInput;
};
export type WaterQualityPredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WaterQualityPredictionWhereInput | Prisma.WaterQualityPredictionWhereInput[];
    OR?: Prisma.WaterQualityPredictionWhereInput[];
    NOT?: Prisma.WaterQualityPredictionWhereInput | Prisma.WaterQualityPredictionWhereInput[];
    pondId?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    overallScore?: Prisma.FloatFilter<"WaterQualityPrediction"> | number;
    riskLevel?: Prisma.EnumRiskLevelFilter<"WaterQualityPrediction"> | $Enums.RiskLevel;
    summary?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    recommendations?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    confidence?: Prisma.FloatNullableFilter<"WaterQualityPrediction"> | number | null;
    generatedAt?: Prisma.DateTimeFilter<"WaterQualityPrediction"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"WaterQualityPrediction"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WaterQualityPrediction"> | Date | string;
    pond?: Prisma.XOR<Prisma.PondScalarRelationFilter, Prisma.PondWhereInput>;
}, "id">;
export type WaterQualityPredictionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    overallScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    recommendations?: Prisma.SortOrder;
    confidence?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WaterQualityPredictionCountOrderByAggregateInput;
    _avg?: Prisma.WaterQualityPredictionAvgOrderByAggregateInput;
    _max?: Prisma.WaterQualityPredictionMaxOrderByAggregateInput;
    _min?: Prisma.WaterQualityPredictionMinOrderByAggregateInput;
    _sum?: Prisma.WaterQualityPredictionSumOrderByAggregateInput;
};
export type WaterQualityPredictionScalarWhereWithAggregatesInput = {
    AND?: Prisma.WaterQualityPredictionScalarWhereWithAggregatesInput | Prisma.WaterQualityPredictionScalarWhereWithAggregatesInput[];
    OR?: Prisma.WaterQualityPredictionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WaterQualityPredictionScalarWhereWithAggregatesInput | Prisma.WaterQualityPredictionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WaterQualityPrediction"> | string;
    pondId?: Prisma.StringWithAggregatesFilter<"WaterQualityPrediction"> | string;
    overallScore?: Prisma.FloatWithAggregatesFilter<"WaterQualityPrediction"> | number;
    riskLevel?: Prisma.EnumRiskLevelWithAggregatesFilter<"WaterQualityPrediction"> | $Enums.RiskLevel;
    summary?: Prisma.StringWithAggregatesFilter<"WaterQualityPrediction"> | string;
    recommendations?: Prisma.StringWithAggregatesFilter<"WaterQualityPrediction"> | string;
    confidence?: Prisma.FloatNullableWithAggregatesFilter<"WaterQualityPrediction"> | number | null;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"WaterQualityPrediction"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WaterQualityPrediction"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WaterQualityPrediction"> | Date | string;
};
export type WaterQualityPredictionCreateInput = {
    id?: string;
    overallScore: number;
    riskLevel: $Enums.RiskLevel;
    summary: string;
    recommendations: string;
    confidence?: number | null;
    generatedAt?: Date | string;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    pond: Prisma.PondCreateNestedOneWithoutWaterQualityPredictionsInput;
};
export type WaterQualityPredictionUncheckedCreateInput = {
    id?: string;
    pondId: string;
    overallScore: number;
    riskLevel: $Enums.RiskLevel;
    summary: string;
    recommendations: string;
    confidence?: number | null;
    generatedAt?: Date | string;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WaterQualityPredictionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overallScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendations?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pond?: Prisma.PondUpdateOneRequiredWithoutWaterQualityPredictionsNestedInput;
};
export type WaterQualityPredictionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pondId?: Prisma.StringFieldUpdateOperationsInput | string;
    overallScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendations?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaterQualityPredictionCreateManyInput = {
    id?: string;
    pondId: string;
    overallScore: number;
    riskLevel: $Enums.RiskLevel;
    summary: string;
    recommendations: string;
    confidence?: number | null;
    generatedAt?: Date | string;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WaterQualityPredictionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overallScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendations?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaterQualityPredictionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pondId?: Prisma.StringFieldUpdateOperationsInput | string;
    overallScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendations?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaterQualityPredictionListRelationFilter = {
    every?: Prisma.WaterQualityPredictionWhereInput;
    some?: Prisma.WaterQualityPredictionWhereInput;
    none?: Prisma.WaterQualityPredictionWhereInput;
};
export type WaterQualityPredictionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WaterQualityPredictionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    overallScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    recommendations?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WaterQualityPredictionAvgOrderByAggregateInput = {
    overallScore?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
};
export type WaterQualityPredictionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    overallScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    recommendations?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WaterQualityPredictionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pondId?: Prisma.SortOrder;
    overallScore?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    recommendations?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WaterQualityPredictionSumOrderByAggregateInput = {
    overallScore?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
};
export type WaterQualityPredictionCreateNestedManyWithoutPondInput = {
    create?: Prisma.XOR<Prisma.WaterQualityPredictionCreateWithoutPondInput, Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput> | Prisma.WaterQualityPredictionCreateWithoutPondInput[] | Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput[];
    connectOrCreate?: Prisma.WaterQualityPredictionCreateOrConnectWithoutPondInput | Prisma.WaterQualityPredictionCreateOrConnectWithoutPondInput[];
    createMany?: Prisma.WaterQualityPredictionCreateManyPondInputEnvelope;
    connect?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
};
export type WaterQualityPredictionUncheckedCreateNestedManyWithoutPondInput = {
    create?: Prisma.XOR<Prisma.WaterQualityPredictionCreateWithoutPondInput, Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput> | Prisma.WaterQualityPredictionCreateWithoutPondInput[] | Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput[];
    connectOrCreate?: Prisma.WaterQualityPredictionCreateOrConnectWithoutPondInput | Prisma.WaterQualityPredictionCreateOrConnectWithoutPondInput[];
    createMany?: Prisma.WaterQualityPredictionCreateManyPondInputEnvelope;
    connect?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
};
export type WaterQualityPredictionUpdateManyWithoutPondNestedInput = {
    create?: Prisma.XOR<Prisma.WaterQualityPredictionCreateWithoutPondInput, Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput> | Prisma.WaterQualityPredictionCreateWithoutPondInput[] | Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput[];
    connectOrCreate?: Prisma.WaterQualityPredictionCreateOrConnectWithoutPondInput | Prisma.WaterQualityPredictionCreateOrConnectWithoutPondInput[];
    upsert?: Prisma.WaterQualityPredictionUpsertWithWhereUniqueWithoutPondInput | Prisma.WaterQualityPredictionUpsertWithWhereUniqueWithoutPondInput[];
    createMany?: Prisma.WaterQualityPredictionCreateManyPondInputEnvelope;
    set?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
    disconnect?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
    delete?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
    connect?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
    update?: Prisma.WaterQualityPredictionUpdateWithWhereUniqueWithoutPondInput | Prisma.WaterQualityPredictionUpdateWithWhereUniqueWithoutPondInput[];
    updateMany?: Prisma.WaterQualityPredictionUpdateManyWithWhereWithoutPondInput | Prisma.WaterQualityPredictionUpdateManyWithWhereWithoutPondInput[];
    deleteMany?: Prisma.WaterQualityPredictionScalarWhereInput | Prisma.WaterQualityPredictionScalarWhereInput[];
};
export type WaterQualityPredictionUncheckedUpdateManyWithoutPondNestedInput = {
    create?: Prisma.XOR<Prisma.WaterQualityPredictionCreateWithoutPondInput, Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput> | Prisma.WaterQualityPredictionCreateWithoutPondInput[] | Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput[];
    connectOrCreate?: Prisma.WaterQualityPredictionCreateOrConnectWithoutPondInput | Prisma.WaterQualityPredictionCreateOrConnectWithoutPondInput[];
    upsert?: Prisma.WaterQualityPredictionUpsertWithWhereUniqueWithoutPondInput | Prisma.WaterQualityPredictionUpsertWithWhereUniqueWithoutPondInput[];
    createMany?: Prisma.WaterQualityPredictionCreateManyPondInputEnvelope;
    set?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
    disconnect?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
    delete?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
    connect?: Prisma.WaterQualityPredictionWhereUniqueInput | Prisma.WaterQualityPredictionWhereUniqueInput[];
    update?: Prisma.WaterQualityPredictionUpdateWithWhereUniqueWithoutPondInput | Prisma.WaterQualityPredictionUpdateWithWhereUniqueWithoutPondInput[];
    updateMany?: Prisma.WaterQualityPredictionUpdateManyWithWhereWithoutPondInput | Prisma.WaterQualityPredictionUpdateManyWithWhereWithoutPondInput[];
    deleteMany?: Prisma.WaterQualityPredictionScalarWhereInput | Prisma.WaterQualityPredictionScalarWhereInput[];
};
export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel;
};
export type WaterQualityPredictionCreateWithoutPondInput = {
    id?: string;
    overallScore: number;
    riskLevel: $Enums.RiskLevel;
    summary: string;
    recommendations: string;
    confidence?: number | null;
    generatedAt?: Date | string;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WaterQualityPredictionUncheckedCreateWithoutPondInput = {
    id?: string;
    overallScore: number;
    riskLevel: $Enums.RiskLevel;
    summary: string;
    recommendations: string;
    confidence?: number | null;
    generatedAt?: Date | string;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WaterQualityPredictionCreateOrConnectWithoutPondInput = {
    where: Prisma.WaterQualityPredictionWhereUniqueInput;
    create: Prisma.XOR<Prisma.WaterQualityPredictionCreateWithoutPondInput, Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput>;
};
export type WaterQualityPredictionCreateManyPondInputEnvelope = {
    data: Prisma.WaterQualityPredictionCreateManyPondInput | Prisma.WaterQualityPredictionCreateManyPondInput[];
    skipDuplicates?: boolean;
};
export type WaterQualityPredictionUpsertWithWhereUniqueWithoutPondInput = {
    where: Prisma.WaterQualityPredictionWhereUniqueInput;
    update: Prisma.XOR<Prisma.WaterQualityPredictionUpdateWithoutPondInput, Prisma.WaterQualityPredictionUncheckedUpdateWithoutPondInput>;
    create: Prisma.XOR<Prisma.WaterQualityPredictionCreateWithoutPondInput, Prisma.WaterQualityPredictionUncheckedCreateWithoutPondInput>;
};
export type WaterQualityPredictionUpdateWithWhereUniqueWithoutPondInput = {
    where: Prisma.WaterQualityPredictionWhereUniqueInput;
    data: Prisma.XOR<Prisma.WaterQualityPredictionUpdateWithoutPondInput, Prisma.WaterQualityPredictionUncheckedUpdateWithoutPondInput>;
};
export type WaterQualityPredictionUpdateManyWithWhereWithoutPondInput = {
    where: Prisma.WaterQualityPredictionScalarWhereInput;
    data: Prisma.XOR<Prisma.WaterQualityPredictionUpdateManyMutationInput, Prisma.WaterQualityPredictionUncheckedUpdateManyWithoutPondInput>;
};
export type WaterQualityPredictionScalarWhereInput = {
    AND?: Prisma.WaterQualityPredictionScalarWhereInput | Prisma.WaterQualityPredictionScalarWhereInput[];
    OR?: Prisma.WaterQualityPredictionScalarWhereInput[];
    NOT?: Prisma.WaterQualityPredictionScalarWhereInput | Prisma.WaterQualityPredictionScalarWhereInput[];
    id?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    pondId?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    overallScore?: Prisma.FloatFilter<"WaterQualityPrediction"> | number;
    riskLevel?: Prisma.EnumRiskLevelFilter<"WaterQualityPrediction"> | $Enums.RiskLevel;
    summary?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    recommendations?: Prisma.StringFilter<"WaterQualityPrediction"> | string;
    confidence?: Prisma.FloatNullableFilter<"WaterQualityPrediction"> | number | null;
    generatedAt?: Prisma.DateTimeFilter<"WaterQualityPrediction"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"WaterQualityPrediction"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WaterQualityPrediction"> | Date | string;
};
export type WaterQualityPredictionCreateManyPondInput = {
    id?: string;
    overallScore: number;
    riskLevel: $Enums.RiskLevel;
    summary: string;
    recommendations: string;
    confidence?: number | null;
    generatedAt?: Date | string;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WaterQualityPredictionUpdateWithoutPondInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overallScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendations?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaterQualityPredictionUncheckedUpdateWithoutPondInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overallScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendations?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaterQualityPredictionUncheckedUpdateManyWithoutPondInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    overallScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendations?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WaterQualityPredictionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pondId?: boolean;
    overallScore?: boolean;
    riskLevel?: boolean;
    summary?: boolean;
    recommendations?: boolean;
    confidence?: boolean;
    generatedAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["waterQualityPrediction"]>;
export type WaterQualityPredictionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pondId?: boolean;
    overallScore?: boolean;
    riskLevel?: boolean;
    summary?: boolean;
    recommendations?: boolean;
    confidence?: boolean;
    generatedAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["waterQualityPrediction"]>;
export type WaterQualityPredictionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pondId?: boolean;
    overallScore?: boolean;
    riskLevel?: boolean;
    summary?: boolean;
    recommendations?: boolean;
    confidence?: boolean;
    generatedAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["waterQualityPrediction"]>;
export type WaterQualityPredictionSelectScalar = {
    id?: boolean;
    pondId?: boolean;
    overallScore?: boolean;
    riskLevel?: boolean;
    summary?: boolean;
    recommendations?: boolean;
    confidence?: boolean;
    generatedAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
};
export type WaterQualityPredictionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pondId" | "overallScore" | "riskLevel" | "summary" | "recommendations" | "confidence" | "generatedAt" | "expiresAt" | "createdAt", ExtArgs["result"]["waterQualityPrediction"]>;
export type WaterQualityPredictionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
};
export type WaterQualityPredictionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
};
export type WaterQualityPredictionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pond?: boolean | Prisma.PondDefaultArgs<ExtArgs>;
};
export type $WaterQualityPredictionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WaterQualityPrediction";
    objects: {
        pond: Prisma.$PondPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        pondId: string;
        overallScore: number;
        riskLevel: $Enums.RiskLevel;
        summary: string;
        recommendations: string;
        confidence: number | null;
        generatedAt: Date;
        expiresAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["waterQualityPrediction"]>;
    composites: {};
};
export type WaterQualityPredictionGetPayload<S extends boolean | null | undefined | WaterQualityPredictionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload, S>;
export type WaterQualityPredictionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WaterQualityPredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WaterQualityPredictionCountAggregateInputType | true;
};
export interface WaterQualityPredictionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WaterQualityPrediction'];
        meta: {
            name: 'WaterQualityPrediction';
        };
    };
    /**
     * Find zero or one WaterQualityPrediction that matches the filter.
     * @param {WaterQualityPredictionFindUniqueArgs} args - Arguments to find a WaterQualityPrediction
     * @example
     * // Get one WaterQualityPrediction
     * const waterQualityPrediction = await prisma.waterQualityPrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterQualityPredictionFindUniqueArgs>(args: Prisma.SelectSubset<T, WaterQualityPredictionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WaterQualityPredictionClient<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WaterQualityPrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterQualityPredictionFindUniqueOrThrowArgs} args - Arguments to find a WaterQualityPrediction
     * @example
     * // Get one WaterQualityPrediction
     * const waterQualityPrediction = await prisma.waterQualityPrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterQualityPredictionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WaterQualityPredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WaterQualityPredictionClient<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WaterQualityPrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterQualityPredictionFindFirstArgs} args - Arguments to find a WaterQualityPrediction
     * @example
     * // Get one WaterQualityPrediction
     * const waterQualityPrediction = await prisma.waterQualityPrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterQualityPredictionFindFirstArgs>(args?: Prisma.SelectSubset<T, WaterQualityPredictionFindFirstArgs<ExtArgs>>): Prisma.Prisma__WaterQualityPredictionClient<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WaterQualityPrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterQualityPredictionFindFirstOrThrowArgs} args - Arguments to find a WaterQualityPrediction
     * @example
     * // Get one WaterQualityPrediction
     * const waterQualityPrediction = await prisma.waterQualityPrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterQualityPredictionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WaterQualityPredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WaterQualityPredictionClient<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WaterQualityPredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterQualityPredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterQualityPredictions
     * const waterQualityPredictions = await prisma.waterQualityPrediction.findMany()
     *
     * // Get first 10 WaterQualityPredictions
     * const waterQualityPredictions = await prisma.waterQualityPrediction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const waterQualityPredictionWithIdOnly = await prisma.waterQualityPrediction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WaterQualityPredictionFindManyArgs>(args?: Prisma.SelectSubset<T, WaterQualityPredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WaterQualityPrediction.
     * @param {WaterQualityPredictionCreateArgs} args - Arguments to create a WaterQualityPrediction.
     * @example
     * // Create one WaterQualityPrediction
     * const WaterQualityPrediction = await prisma.waterQualityPrediction.create({
     *   data: {
     *     // ... data to create a WaterQualityPrediction
     *   }
     * })
     *
     */
    create<T extends WaterQualityPredictionCreateArgs>(args: Prisma.SelectSubset<T, WaterQualityPredictionCreateArgs<ExtArgs>>): Prisma.Prisma__WaterQualityPredictionClient<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WaterQualityPredictions.
     * @param {WaterQualityPredictionCreateManyArgs} args - Arguments to create many WaterQualityPredictions.
     * @example
     * // Create many WaterQualityPredictions
     * const waterQualityPrediction = await prisma.waterQualityPrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WaterQualityPredictionCreateManyArgs>(args?: Prisma.SelectSubset<T, WaterQualityPredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WaterQualityPredictions and returns the data saved in the database.
     * @param {WaterQualityPredictionCreateManyAndReturnArgs} args - Arguments to create many WaterQualityPredictions.
     * @example
     * // Create many WaterQualityPredictions
     * const waterQualityPrediction = await prisma.waterQualityPrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WaterQualityPredictions and only return the `id`
     * const waterQualityPredictionWithIdOnly = await prisma.waterQualityPrediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WaterQualityPredictionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WaterQualityPredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WaterQualityPrediction.
     * @param {WaterQualityPredictionDeleteArgs} args - Arguments to delete one WaterQualityPrediction.
     * @example
     * // Delete one WaterQualityPrediction
     * const WaterQualityPrediction = await prisma.waterQualityPrediction.delete({
     *   where: {
     *     // ... filter to delete one WaterQualityPrediction
     *   }
     * })
     *
     */
    delete<T extends WaterQualityPredictionDeleteArgs>(args: Prisma.SelectSubset<T, WaterQualityPredictionDeleteArgs<ExtArgs>>): Prisma.Prisma__WaterQualityPredictionClient<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WaterQualityPrediction.
     * @param {WaterQualityPredictionUpdateArgs} args - Arguments to update one WaterQualityPrediction.
     * @example
     * // Update one WaterQualityPrediction
     * const waterQualityPrediction = await prisma.waterQualityPrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WaterQualityPredictionUpdateArgs>(args: Prisma.SelectSubset<T, WaterQualityPredictionUpdateArgs<ExtArgs>>): Prisma.Prisma__WaterQualityPredictionClient<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WaterQualityPredictions.
     * @param {WaterQualityPredictionDeleteManyArgs} args - Arguments to filter WaterQualityPredictions to delete.
     * @example
     * // Delete a few WaterQualityPredictions
     * const { count } = await prisma.waterQualityPrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WaterQualityPredictionDeleteManyArgs>(args?: Prisma.SelectSubset<T, WaterQualityPredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WaterQualityPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterQualityPredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterQualityPredictions
     * const waterQualityPrediction = await prisma.waterQualityPrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WaterQualityPredictionUpdateManyArgs>(args: Prisma.SelectSubset<T, WaterQualityPredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WaterQualityPredictions and returns the data updated in the database.
     * @param {WaterQualityPredictionUpdateManyAndReturnArgs} args - Arguments to update many WaterQualityPredictions.
     * @example
     * // Update many WaterQualityPredictions
     * const waterQualityPrediction = await prisma.waterQualityPrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WaterQualityPredictions and only return the `id`
     * const waterQualityPredictionWithIdOnly = await prisma.waterQualityPrediction.updateManyAndReturn({
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
    updateManyAndReturn<T extends WaterQualityPredictionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WaterQualityPredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WaterQualityPrediction.
     * @param {WaterQualityPredictionUpsertArgs} args - Arguments to update or create a WaterQualityPrediction.
     * @example
     * // Update or create a WaterQualityPrediction
     * const waterQualityPrediction = await prisma.waterQualityPrediction.upsert({
     *   create: {
     *     // ... data to create a WaterQualityPrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterQualityPrediction we want to update
     *   }
     * })
     */
    upsert<T extends WaterQualityPredictionUpsertArgs>(args: Prisma.SelectSubset<T, WaterQualityPredictionUpsertArgs<ExtArgs>>): Prisma.Prisma__WaterQualityPredictionClient<runtime.Types.Result.GetResult<Prisma.$WaterQualityPredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WaterQualityPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterQualityPredictionCountArgs} args - Arguments to filter WaterQualityPredictions to count.
     * @example
     * // Count the number of WaterQualityPredictions
     * const count = await prisma.waterQualityPrediction.count({
     *   where: {
     *     // ... the filter for the WaterQualityPredictions we want to count
     *   }
     * })
    **/
    count<T extends WaterQualityPredictionCountArgs>(args?: Prisma.Subset<T, WaterQualityPredictionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WaterQualityPredictionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WaterQualityPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterQualityPredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaterQualityPredictionAggregateArgs>(args: Prisma.Subset<T, WaterQualityPredictionAggregateArgs>): Prisma.PrismaPromise<GetWaterQualityPredictionAggregateType<T>>;
    /**
     * Group by WaterQualityPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterQualityPredictionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends WaterQualityPredictionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WaterQualityPredictionGroupByArgs['orderBy'];
    } : {
        orderBy?: WaterQualityPredictionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WaterQualityPredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterQualityPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WaterQualityPrediction model
     */
    readonly fields: WaterQualityPredictionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WaterQualityPrediction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WaterQualityPredictionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pond<T extends Prisma.PondDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PondDefaultArgs<ExtArgs>>): Prisma.Prisma__PondClient<runtime.Types.Result.GetResult<Prisma.$PondPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the WaterQualityPrediction model
 */
export interface WaterQualityPredictionFieldRefs {
    readonly id: Prisma.FieldRef<"WaterQualityPrediction", 'String'>;
    readonly pondId: Prisma.FieldRef<"WaterQualityPrediction", 'String'>;
    readonly overallScore: Prisma.FieldRef<"WaterQualityPrediction", 'Float'>;
    readonly riskLevel: Prisma.FieldRef<"WaterQualityPrediction", 'RiskLevel'>;
    readonly summary: Prisma.FieldRef<"WaterQualityPrediction", 'String'>;
    readonly recommendations: Prisma.FieldRef<"WaterQualityPrediction", 'String'>;
    readonly confidence: Prisma.FieldRef<"WaterQualityPrediction", 'Float'>;
    readonly generatedAt: Prisma.FieldRef<"WaterQualityPrediction", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"WaterQualityPrediction", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"WaterQualityPrediction", 'DateTime'>;
}
/**
 * WaterQualityPrediction findUnique
 */
export type WaterQualityPredictionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * Filter, which WaterQualityPrediction to fetch.
     */
    where: Prisma.WaterQualityPredictionWhereUniqueInput;
};
/**
 * WaterQualityPrediction findUniqueOrThrow
 */
export type WaterQualityPredictionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * Filter, which WaterQualityPrediction to fetch.
     */
    where: Prisma.WaterQualityPredictionWhereUniqueInput;
};
/**
 * WaterQualityPrediction findFirst
 */
export type WaterQualityPredictionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * Filter, which WaterQualityPrediction to fetch.
     */
    where?: Prisma.WaterQualityPredictionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WaterQualityPredictions to fetch.
     */
    orderBy?: Prisma.WaterQualityPredictionOrderByWithRelationInput | Prisma.WaterQualityPredictionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WaterQualityPredictions.
     */
    cursor?: Prisma.WaterQualityPredictionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WaterQualityPredictions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WaterQualityPredictions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WaterQualityPredictions.
     */
    distinct?: Prisma.WaterQualityPredictionScalarFieldEnum | Prisma.WaterQualityPredictionScalarFieldEnum[];
};
/**
 * WaterQualityPrediction findFirstOrThrow
 */
export type WaterQualityPredictionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * Filter, which WaterQualityPrediction to fetch.
     */
    where?: Prisma.WaterQualityPredictionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WaterQualityPredictions to fetch.
     */
    orderBy?: Prisma.WaterQualityPredictionOrderByWithRelationInput | Prisma.WaterQualityPredictionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WaterQualityPredictions.
     */
    cursor?: Prisma.WaterQualityPredictionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WaterQualityPredictions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WaterQualityPredictions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WaterQualityPredictions.
     */
    distinct?: Prisma.WaterQualityPredictionScalarFieldEnum | Prisma.WaterQualityPredictionScalarFieldEnum[];
};
/**
 * WaterQualityPrediction findMany
 */
export type WaterQualityPredictionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * Filter, which WaterQualityPredictions to fetch.
     */
    where?: Prisma.WaterQualityPredictionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WaterQualityPredictions to fetch.
     */
    orderBy?: Prisma.WaterQualityPredictionOrderByWithRelationInput | Prisma.WaterQualityPredictionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WaterQualityPredictions.
     */
    cursor?: Prisma.WaterQualityPredictionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WaterQualityPredictions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WaterQualityPredictions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WaterQualityPredictions.
     */
    distinct?: Prisma.WaterQualityPredictionScalarFieldEnum | Prisma.WaterQualityPredictionScalarFieldEnum[];
};
/**
 * WaterQualityPrediction create
 */
export type WaterQualityPredictionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * The data needed to create a WaterQualityPrediction.
     */
    data: Prisma.XOR<Prisma.WaterQualityPredictionCreateInput, Prisma.WaterQualityPredictionUncheckedCreateInput>;
};
/**
 * WaterQualityPrediction createMany
 */
export type WaterQualityPredictionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterQualityPredictions.
     */
    data: Prisma.WaterQualityPredictionCreateManyInput | Prisma.WaterQualityPredictionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WaterQualityPrediction createManyAndReturn
 */
export type WaterQualityPredictionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * The data used to create many WaterQualityPredictions.
     */
    data: Prisma.WaterQualityPredictionCreateManyInput | Prisma.WaterQualityPredictionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * WaterQualityPrediction update
 */
export type WaterQualityPredictionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * The data needed to update a WaterQualityPrediction.
     */
    data: Prisma.XOR<Prisma.WaterQualityPredictionUpdateInput, Prisma.WaterQualityPredictionUncheckedUpdateInput>;
    /**
     * Choose, which WaterQualityPrediction to update.
     */
    where: Prisma.WaterQualityPredictionWhereUniqueInput;
};
/**
 * WaterQualityPrediction updateMany
 */
export type WaterQualityPredictionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterQualityPredictions.
     */
    data: Prisma.XOR<Prisma.WaterQualityPredictionUpdateManyMutationInput, Prisma.WaterQualityPredictionUncheckedUpdateManyInput>;
    /**
     * Filter which WaterQualityPredictions to update
     */
    where?: Prisma.WaterQualityPredictionWhereInput;
    /**
     * Limit how many WaterQualityPredictions to update.
     */
    limit?: number;
};
/**
 * WaterQualityPrediction updateManyAndReturn
 */
export type WaterQualityPredictionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * The data used to update WaterQualityPredictions.
     */
    data: Prisma.XOR<Prisma.WaterQualityPredictionUpdateManyMutationInput, Prisma.WaterQualityPredictionUncheckedUpdateManyInput>;
    /**
     * Filter which WaterQualityPredictions to update
     */
    where?: Prisma.WaterQualityPredictionWhereInput;
    /**
     * Limit how many WaterQualityPredictions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * WaterQualityPrediction upsert
 */
export type WaterQualityPredictionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * The filter to search for the WaterQualityPrediction to update in case it exists.
     */
    where: Prisma.WaterQualityPredictionWhereUniqueInput;
    /**
     * In case the WaterQualityPrediction found by the `where` argument doesn't exist, create a new WaterQualityPrediction with this data.
     */
    create: Prisma.XOR<Prisma.WaterQualityPredictionCreateInput, Prisma.WaterQualityPredictionUncheckedCreateInput>;
    /**
     * In case the WaterQualityPrediction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WaterQualityPredictionUpdateInput, Prisma.WaterQualityPredictionUncheckedUpdateInput>;
};
/**
 * WaterQualityPrediction delete
 */
export type WaterQualityPredictionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
    /**
     * Filter which WaterQualityPrediction to delete.
     */
    where: Prisma.WaterQualityPredictionWhereUniqueInput;
};
/**
 * WaterQualityPrediction deleteMany
 */
export type WaterQualityPredictionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WaterQualityPredictions to delete
     */
    where?: Prisma.WaterQualityPredictionWhereInput;
    /**
     * Limit how many WaterQualityPredictions to delete.
     */
    limit?: number;
};
/**
 * WaterQualityPrediction without action
 */
export type WaterQualityPredictionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterQualityPrediction
     */
    select?: Prisma.WaterQualityPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WaterQualityPrediction
     */
    omit?: Prisma.WaterQualityPredictionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WaterQualityPredictionInclude<ExtArgs> | null;
};
//# sourceMappingURL=WaterQualityPrediction.d.ts.map