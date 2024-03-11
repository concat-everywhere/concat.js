import { _smush } from "./concat.js";

export const dup = a => _smush(a, a);
export const drop = _ => undefined;
export const swap = (a, b) => _smush(b, a);
export const rot = (a, b, c) => _smush(b, c, a);
export const over = (a, b) => _smush(a, b, a);
