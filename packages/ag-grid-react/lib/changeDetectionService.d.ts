// ag-grid-react v21.2.2
export declare enum ChangeDetectionStrategyType {
    IdentityCheck = "IdentityCheck",
    DeepValueCheck = "DeepValueCheck",
    NoCheck = "NoCheck"
}
export declare class ChangeDetectionService {
    private strategyMap;
    getStrategy(changeDetectionStrategy: ChangeDetectionStrategyType): ChangeDetectionStrategy;
}
export interface ChangeDetectionStrategy {
    areEqual(a: any, b: any): boolean;
}
