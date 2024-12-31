export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Prosstore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern ecommerce platform built with Next.js";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "https://localhost:3000";
export const LATEST_PRODUCT_LIMIT = Number(
  process.env.LATEST_PRODUCT_LIMIT || 4
);
