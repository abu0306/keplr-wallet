import { Keplr } from "./wallet";
import { OfflineSigner } from "@cosmjs/launchpad";
import { SecretUtils } from "secretjs/types/enigmautils";
import { OfflineDirectSigner } from "@cosmjs/proto-signing";

export interface Window {
  keplr?: Keplr;
  getOfflineSigner?: (chainId: string) => OfflineSigner & OfflineDirectSigner;
  getEnigmaUtils?: (chainId: string) => SecretUtils;
}
