import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & AuthUser;
      file?: Express.Multer.File;
    }
  }
}

export {};
