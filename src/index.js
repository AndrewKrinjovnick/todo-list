import React from "react";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import { colors } from "./config/colors";
import { QueryClientProvider } from "./providers/QueryClientProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider>
      <SkeletonTheme
        baseColor={colors.skeleton.main}
        highlightColor={colors.skeleton.highlight}
      >
        <App />
      </SkeletonTheme>
    </QueryClientProvider>
  </React.StrictMode>
);
