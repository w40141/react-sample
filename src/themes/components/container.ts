import type { ComponentStyle } from "@yamada-ui/react";

export const Container: ComponentStyle = {
	baseStyle: {
		bg: "green.100",
	},
	sizes: {
		sm: {
			p: "sm",
			fontSize: "sm",
		},
		md: {
			p: "md",
			fontSize: "md",
		},
		lg: {
			p: "lg",
			fontSize: "lg",
		},
	},
	variants: {
		"with-border-silid": { borderWidth: "1px" },
		"with-border-dotted": { borderWidth: "1px", borderStyle: "dotted" },
	},
	defaultProps: {
		size: "md",
		variant: "with-border-solid",
	},
};
