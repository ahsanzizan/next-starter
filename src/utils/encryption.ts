import { hashSync, compareSync } from "bcryptjs";

const BCRYPT_ROUNDS = 12;
type cipherText = string;

export const encrypt = (plainText: string): cipherText => {
  const hashed = hashSync(plainText, BCRYPT_ROUNDS);
  return hashed;
};

export const compareHash = (plainText: string, cipherText: string): boolean => {
  const compare = compareSync(plainText, cipherText);
  return compare;
};
