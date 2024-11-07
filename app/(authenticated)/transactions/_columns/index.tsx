"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Transactions } from "@prisma/client";
import TransactionTypeBadge from "../_components/type-badge";

export const transactionsColumns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      return <TransactionTypeBadge transaction={transaction} />;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) => {
      const categoryMap: Record<string, string> = {
        EDUCATION: "Educação",
        FOOD: "Alimentação",
        HEALTH: "Saúde",
        ENTERTAINMENT: "Entretenimento",
        HOUSING: "Moradia",
        TRANSPORTATION: "Transporte",
        SALARY: "Salário",
        UTILITY: "Utilidade",
      };

      return <p>{categoryMap[transaction.category] || "Outro"}</p>;
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
