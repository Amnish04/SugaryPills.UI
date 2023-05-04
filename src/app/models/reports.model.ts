export interface Report {
    urination: FieldStats,
    thirst: FieldStats,
    hunger: FieldStats,
    fatigue: FieldStats,
    blurredVision: FieldStats,
    weakHealing: FieldStats,
    tingling: FieldStats,
    dryIthcySkin: FieldStats,
    weightLoss: FieldStats,
    moodChanges: FieldStats,
    count: number,
    totalCount: number
}

export interface FieldStats {
    count: number,
    percentage: number
}
