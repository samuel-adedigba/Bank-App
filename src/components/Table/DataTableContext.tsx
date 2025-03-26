import { createContext, useContext, useState, useEffect } from "react";

type DataTableContextProps = {
  columnVisibility: Record<string, boolean>;
  setColumnVisibility: (visibility: Record<string, boolean>) => void;
};

const DataTableContext = createContext<DataTableContextProps | undefined>(undefined);


export const DataTableProvider = ({ children }: { children: React.ReactNode }) => {
    const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>(() => {
      try {
        const storedVisibility = localStorage.getItem("tableColumnVisibility");
        return storedVisibility ? JSON.parse(storedVisibility) : {}; // Ensure it defaults to an empty object
      } catch (error) {
        console.error("Error parsing column visibility from localStorage:", error);
        return {};
      }
    });
  
    useEffect(() => {
      try {
        localStorage.setItem("tableColumnVisibility", JSON.stringify(columnVisibility));
      } catch (error) {
        console.error("Error saving column visibility to localStorage:", error);
      }
    }, [columnVisibility]);
  
    return (
      <DataTableContext.Provider value={{ columnVisibility, setColumnVisibility }}>
        {children}
      </DataTableContext.Provider>
    );
  };
  
export const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context) throw new Error("useDataTable must be used within DataTableProvider");
  return context;
};