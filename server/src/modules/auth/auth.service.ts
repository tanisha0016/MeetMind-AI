import bcrypt from "bcrypt";
import User from "../users/user.model";
import { RegisterUserInput } from "./auth.types";
import { AUTH_MESSAGES, JWT_CONFIG } from "./auth.constants";
import jwt from "jsonwebtoken";
import { LoginUserInput } from "./auth.types";

export const registerUser = async ({
  name,
  email,
  password,
}: RegisterUserInput) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error(AUTH_MESSAGES.USER_EXISTS);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

export const loginUser = async ({ email, password }: LoginUserInput) => {
  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error(AUTH_MESSAGES.INVALID_CREDENTIALS);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error(AUTH_MESSAGES.INVALID_CREDENTIALS);
  }

  const token = jwt.sign(
  {
    userId: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET as string,
  {
    expiresIn: JWT_CONFIG.EXPIRES_IN,
  }
);
  return {
  user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  },
  token,
};
};
