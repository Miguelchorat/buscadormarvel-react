import { MD5 } from "md5-js-tools";

export const public_key = "1802098ef85a231bb394b808fb31c2de";
const private_key = "62a750925aef5f79be57b1acf905c490e29eea53"
export const ts = Date.now()
export let hash = MD5.generate(ts+private_key+public_key);
