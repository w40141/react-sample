import { extendTheme, type UsageTheme } from "@yamada-ui/react";
import tokens from "./tokens";
import styles from "./styles";
import components from "./components";
import { semantics } from "./semantics";

const customTheme: UsageTheme = {
	components,
	styles,
	semantics,
	...tokens,
};

export default extendTheme(customTheme)();
