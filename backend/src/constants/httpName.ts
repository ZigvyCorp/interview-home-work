const HTTP_NAME = {
  OK: "OK",
  CREATED: "CREATED",
  ACCEPTED: "ACCEPTED",
  NO_CONTENT: "NO_CONTENT",
  UNPROCESSABLE_ENTITY: "UNPROCESSABLE_ENTITY",
  UNAUTHORIZED: "UNAUTHORIZED",
  NOT_FOUND: "NOT_FOUND",
  FORBIDDEN: "FORBIDDEN",
  BAD_REQUEST: "BAD_REQUEST",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  PARTIAL_CONTENT: "PARTIAL_CONTENT",
} as const;

export default HTTP_NAME;
