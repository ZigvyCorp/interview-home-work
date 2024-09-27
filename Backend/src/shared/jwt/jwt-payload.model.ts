export enum TokenType {
  ACCESS_TOKEN = 'access_token',
  SIGNUP_CONFIRMATION = 'signup_confirmation',
  RESET_PASSWORD = 'reset_password',
  ROLE_RULE_TOKEN = 'role_rule_token',
}

export type ResetPasswordPayload = {
  tokenType: TokenType.RESET_PASSWORD;
  id: number;
  email: string;
  iat?: Date;
};

export type AccessTokenPayload = {
  tokenType: TokenType.ACCESS_TOKEN;
  id: number;
  email: string;
  iat?: Date;
};

export type RoleRuleTokenPayload = {
  tokenType: TokenType.ROLE_RULE_TOKEN;
};

export type SignupConfirmationPayload = {
  tokenType: TokenType.SIGNUP_CONFIRMATION;
  id: number;
  email: string;
  iat?: Date;
};

export type JwtPayload =
  | AccessTokenPayload
  | SignupConfirmationPayload
  | ResetPasswordPayload
  | RoleRuleTokenPayload;
