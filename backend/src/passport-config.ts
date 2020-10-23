import passport from "passport";
import JwtCookieComboStrategy from "passport-jwt-cookiecombo";
import { AppConfig } from "./config";
import { ProfileService } from "./services";

export const configPassport = () => {
  passport.use(
    new JwtCookieComboStrategy(
      {
        secretOrPublicKey: AppConfig.jwt.secretKey,
        passReqToCallback: false,
      },
      async (payload: any, done: any) => {
        if (!payload.user) return done(new Error("Unauthorized"));
        const user = await ProfileService().findById(payload.user._id);
        if (!user) return done(new Error("Unauthorized"));
        return done(null, user);
      }
    )
  );
};
