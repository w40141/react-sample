import { UIProvider, type UsageTheme } from "@yamada-ui/react";
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

type Props = {
	children: React.ReactNode;
};

const MyUI: React.FC<Props> = ({ children }) => {
	return <UIProvider theme={customTheme}>{children}</UIProvider>;
};

export default MyUI;
