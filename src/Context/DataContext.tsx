import { PropsWithChildren, ReactNode, createContext, useContext } from "react";
import useFetch from "../Hooks/useFetch";

type ISale = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao ";
  parcelas: number;
  data: string;
};

type IDataContext = {
  data: ISale[] | null;
  loading: boolean;
  error: string | null;
};

const DataContext = createContext<IDataContext | null>({} as IDataContext);

export function DataContextProvider({ children }: PropsWithChildren) {
  const { data, loading, error } = useFetch<ISale[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData(){
  const dataContext = useContext(DataContext)
  if (!dataContext) throw new Error("useData needs to be within DataContextProvider")
  return dataContext
}