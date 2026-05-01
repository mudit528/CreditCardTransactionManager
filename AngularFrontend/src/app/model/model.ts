export interface Card {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  bankName: string;
  status: 'Active' | 'Blocked';
  balance: number;
}

export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  merchantType: string;
  type: 'PURCHASE' | 'INCOME';
  amount: number;
  status: 'Success' | 'Pending' | 'Failed';
  cardId: string;
}

export interface DashboardStats {
  totalCards: number;
  activeCards: number;
  totalTransactions: number;
}

export interface User {
  email: string;
  name: string;
  role: 'ADMIN' | 'USER';
}

export type CreateCardInput = Omit<Card, 'id' | 'status'>;
export type CreateTransactionInput = Omit<Transaction, 'id' | 'date' | 'status'>;
