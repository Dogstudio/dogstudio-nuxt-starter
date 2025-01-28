// Dependencies
import UAParser from "ua-parser-js";

// Server vs Browser
// See: https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
export const IS_SERVER = import.meta.server;
export const IS_BROWSER = import.meta.client;

// UA Constants
// UA Parser
const PARSER = new UAParser();

// Set UA Parser
if (IS_BROWSER) {
  PARSER.setUA(navigator.userAgent);
}

export const OS = PARSER.getOS();
export const DEVICE = PARSER.getDevice();
export const BROWSER = PARSER.getBrowser();

export const IS_MOBILE = DEVICE.type === "mobile";
export const IS_TABLET = DEVICE.type === "tablet";

// Environment Constants
export const DEV = import.meta.env.DEV;
export const PROD = import.meta.env.PROD;

// Responsive Constants
export const BREAKPOINTS = {
  XXXS: 0,
  M: 768,
  L: 1024,
  XL: 1200,
  XXL: 1440,
  XXXL: 1920,
};
