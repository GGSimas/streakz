import React from "react";
import { type Repositories } from "./repositories";

const RepositoriesContext = React.createContext<Repositories | null>(null);

export const RepositoriesProvider = RepositoriesContext.Provider;

export function useRepositories() {
  const context = React.useContext(RepositoriesContext);

  if (!context) {
    throw new Error(
      "useRepositories must be used within a RepositoriesProvider",
    );
  }
  return context;
}
