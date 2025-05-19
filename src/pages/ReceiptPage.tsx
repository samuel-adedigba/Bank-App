import React from 'react';

/**
 * Universal data structures for any type of receipt or bill
 */
export interface ReceiptItem {
  /** Label or description of the line item */
  label: string;
  /** Numeric amount (in dollars, cents, etc.) */
  amount: number;
  /** Whether to render a dashed separator above this item */
  dashed?: boolean;
  /** Whether this line should be highlighted (e.g. title or total) */
  highlighted?: boolean;
}

export interface ReceiptPeriod {
  from?: string;
  to?: string;
}

export interface ReceiptMeta {
  name: string;
  address: string;
  phone: string;
  code: string;
}

export interface ReceiptDataType {
  /** Top-level title (e.g. "All the Bills") */
  title: string;
  /** Customer or recipient metadata */
  meta: ReceiptMeta;
  /** Optional billing period */
  period?: ReceiptPeriod;
  /** Line-items of the bill */
  items: ReceiptItem[];
  /** Label for the total row (e.g. "TOTAL") */
  totalLabel?: string;
  /** Grand total amount */
  total: number;
}

/**
 * Example dummy data for an electric bill
 */
// export const dummyReceipt: ReceiptDataType = {
//   title: 'All the Bills',
//   meta: {
//     name: 'Jackson Maine',
//     address: '403 East 4th Street, Santa Ana',
//     phone: '+8424599721',
//     code: '#2343543',
//   },
//   period: {
//     from: '01/10/2019',
//     to: '01/11/2019',
//   },
//   items: [
//     { label: 'Electric fee', amount: 470, dashed: true },
//     { label: 'Tax', amount: 10 },
//   ],
//   totalLabel: 'TOTAL',
//   total: 480,
// };

/**
 * Page component that renders a receipt/bill based on passed-in data
 */
const ReceiptPage: React.FC<{ receipt: ReceiptData }> = ({ receipt }) => {
  const { title, meta, period, items, totalLabel = 'Total', total } = receipt;

  return (
    <div className="max-w-md mx-auto rounded-2xl p-6">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-900 mb-4">{title}</h1>

      {/* Meta Information */}
      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 text-sm">
        <dt className="text-gray-500">Name</dt>
        <dd className="text-gray-900">{meta.name}</dd>

        <dt className="text-gray-500">Address</dt>
        <dd className="text-gray-900">{meta.address}</dd>

        <dt className="text-gray-500">Phone number</dt>
        <dd className="text-gray-900">{meta.phone}</dd>

        <dt className="text-gray-500">Code</dt>
        <dd className="text-gray-900">{meta.code}</dd>

        {period?.from && (
          <>
            <dt className="text-gray-500">From</dt>
            <dd className="text-gray-900">{period.from}</dd>
          </>
        )}
        {period?.to && (
          <>
            <dt className="text-gray-500">To</dt>
            <dd className="text-gray-900">{period.to}</dd>
          </>
        )}
      </dl>

      {/* Line Items */}
      <div className="space-y-4 mb-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={
              `flex justify-between items-center relative py-2 ` +
              (item.dashed ? 'border-t border-dashed border-gray-300 mt-2 pt-4' : '')
            }
          >
            <span
              className={`text-base font-medium ${
                item.highlighted ? 'text-lg' : 'text-base'
              }`}
            >
              {item.label}
            </span>
            <span
              className={`font-semibold ${
                item.highlighted ? 'text-2xl text-red-500' : 'text-indigo-600'
              }`}
            >
              ${item.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center pt-4 border-t">
        <span className="text-base font-semibold text-gray-900">{totalLabel}</span>
        <span className="text-2xl font-bold text-red-500">${total}</span>
      </div>
    </div>
  );
};

export default ReceiptPage;
