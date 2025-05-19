// src/types/SpendingAnalysis.ts

/** High-level summary KPIs */
interface SummaryKPIs {
    totalSpent: number;
    totalIncome: number;
    netCashFlow: number;
  }
  
  /** Breakdown by bank account */
  interface AccountBreakdownItem {
    bankAccountId: string;
    bankName: string;
    spent: number;
    income: number;
  }
  
  /** Breakdown by spending category */
  interface CategoryBreakdownItem {
    categoryId: string;
    categoryName: string;
    spent: number;
    pctOfTotal: number;        // 0–100%
  }
  
  /** Month-by-month cash flow trend */
  interface MonthlyTrendItem {
    month: string;             // e.g. '2025-04'
    spent: number;
    income: number;
  }
  
  /** Top merchants by spend */
  interface TopMerchantItem {
    merchantId: string;
    merchantName: string;
    spent: number;
    transactionCount: number;
  }
  
  /** Detected anomalies (large or unusual transactions) */
  interface AnomalyItem {
    transactionId: string;
    date: string;
    amount: number;
    merchantName: string;
    reason: string;            // e.g. '50% above avg'
  }
  
  /** Budget usage per category */
  interface BudgetItem {
    categoryId: string;
    categoryName: string;
    budgetLimit: number;
    spent: number;
    pctUsed: number;           // 0–100%
  }
  
  /** Complete payload for spending analysis */
  export interface SpendingAnalysis {
    userId: string;
    period: { start: string; end: string };
    summary: SummaryKPIs;
    byAccount: AccountBreakdownItem[];
    byCategory: CategoryBreakdownItem[];
    monthlyTrend: MonthlyTrendItem[];
    topMerchants: TopMerchantItem[];
    anomalies: AnomalyItem[];
    budgets: BudgetItem[];
  }
  