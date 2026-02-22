import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Law {
    title: string;
    explanation: string;
    number: bigint;
}
export interface Preamble {
    title: string;
    explanation: string;
}
export interface backendInterface {
    addLaw(title: string, number: bigint, explanation: string): Promise<bigint>;
    clear(): Promise<void>;
    getAllLaws(): Promise<Array<Law>>;
    getLaw(number: bigint): Promise<Law | null>;
    getPreamble(): Promise<Preamble | null>;
    initializeLaws(initialLaws: Array<[string, bigint, string]>): Promise<void>;
    setPreamble(title: string, explanation: string): Promise<void>;
}
