import { EVMChain } from "../types/index.js";

/**
 * Hashmap Interface: {chainName:string, value:EVMChain}
 */
export interface EVMChainMap { [chainName: string]: EVMChain; }

/**
 * Hashmap Interface: {id:number, value:string}
 */
export interface ChainIdToNameMap { [id: number]: string }

/**
 * Hashmap Interface: {chainName:string, value:number}
 */
export interface ChainNameToId {[chainName: string]: number;}