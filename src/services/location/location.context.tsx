import React, { createContext, useContext, useState } from "react";
import useAsync from "react-use/lib/useAsync";

import { Coords, ViewPort } from "../../../types/services";
import { locationRequest, locationTransform } from "./location.service";

const LocationContext = createContext<
  | {
      location?: Coords & { viewport: ViewPort };
      loading: boolean;
      error?: string;
      searchTerm: string;
      search: (newSearchTerm: string) => void;
    }
  | undefined
>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("antwerp");

  const { value: location, loading, error } = useAsync(async () => {
    const response = await locationRequest(searchTerm.toLowerCase().trim());
    const { lat, lng, viewport } = locationTransform(response);
    return { lat, lng, viewport };
  }, [searchTerm]);

  const onSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
        error: error?.message,
        searchTerm,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be within a LocationProvider");
  }
  return context;
}
