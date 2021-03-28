import useAsync from "react-use/lib/useAsync";
import React, { useState, createContext, useContext } from "react";

import { Coords, ViewPort } from "../services";

import { locationRequest, locationTransform } from "./location.service";

interface LocationProviderReturn {
  location?: Coords & { viewport: ViewPort };
  loading: boolean;
  error?: string;
  searchTerm: string;
  search: (newSearchTerm: string) => void;
}

const LocationContext = createContext<LocationProviderReturn | undefined>(
  undefined
);

interface ILocationProviderProps {
  children: React.ReactNode;
}

export function LocationProvider({ children }: ILocationProviderProps) {
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
