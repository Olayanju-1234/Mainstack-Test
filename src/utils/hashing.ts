import config from "@config/envs";
import crypto from "crypto";

const { HASH_SECRET } = config;

export const HashPassword = (data: string): string => {
  return crypto.createHmac("sha256", HASH_SECRET).update(data).digest("hex");
}
;

export const ComparePassword = (data: string, hash: string): boolean => {
  return crypto.createHmac("sha256", HASH_SECRET).update(data).
    digest("hex") === hash;
}
;
