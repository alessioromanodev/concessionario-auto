import React from "react";
import { ThemeProvider } from "@/components/Theme-provider.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
