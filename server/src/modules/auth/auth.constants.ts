export const AUTH_MESSAGES = {
  USER_EXISTS: "User already exists",
  INVALID_CREDENTIALS: "Invalid email or password",
  REGISTER_SUCCESS: "User registered successfully",
  LOGIN_SUCCESS: "Login successful",
};

import { SignOptions } from "jsonwebtoken";

export const JWT_CONFIG: { EXPIRES_IN: SignOptions["expiresIn"] } = {
  EXPIRES_IN: process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"] || "7d",
};