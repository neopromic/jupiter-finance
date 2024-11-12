import { TransactionPaymentMethod, TransactionType } from "@prisma/client";

export const transactionTypeOptions = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
];

export const TRANSACTION_PAYMENT_METHOD_MAP: Record<string, string> = {
  CREDIT_CARD: "Cartão de crédito",
  DEBIT_CARD: "Cartão de débito",
  PIX: "PIX",
  BANK_TRANSFER: "Transferência bancária",
};

export const TRANSACTION_PAYMENT_METHOD_ICON_MAP: Record<string, string> = {
  [TransactionPaymentMethod.CREDIT_CARD]: "/credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "/debit-card.svg",
  [TransactionPaymentMethod.PIX]: "/pix-icon.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "/bank-transfer.svg",
  [TransactionPaymentMethod.CASH]: "/money.svg",
};

export const TRANSACTION_CATEGORY_MAP: Record<string, string> = {
  EDUCATION: "Educação",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  ENTERTAINMENT: "Entretenimento",
  HOUSING: "Moradia",
  TRANSPORTATION: "Transporte",
  SALARY: "Salário",
  UTILITY: "Utilidade",
  OTHER: "Outro",
};
