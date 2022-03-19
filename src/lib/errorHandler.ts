"use strict";
export function errorHandler(error: unknown) {
  console.error(error);
  throw new Error("Operation Failed");
}
