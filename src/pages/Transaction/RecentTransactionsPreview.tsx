import { useState } from 'react'
import {  FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { dummyTransactions, Transaction } from '../../components/mock/data/dummyTransactions'
import { transactionDetails, TransactionDetail } from '../../components/mock/data/transactionDetails'
import DialogBox from '../../components/UI/DialogBox'

export default function RecentTransactionsPreview() {
  // 1. Local state for modal
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTxn, setSelectedTxn] = useState<TransactionDetail | null>(null)

  // 2. First three transactions
  const recent: Transaction[] = dummyTransactions.slice(0, 3)

  // 3. Open modal for a given ID
  function openDialog(id: string) {
    const detail = transactionDetails[id]
    if (detail) {
      setSelectedTxn(detail)
      setIsOpen(true)
    }
  }

  return (
    <>
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Recent Transactions</h3>
            <Link
              to="/transaction-history"
              className="text-blue-600 text-xs flex items-center"
            >
              See all <FaArrowRight className="ml-1" size={12} />
            </Link>
          </div>

          <div className="space-y-4">
            {recent.map(txn => {
              return (
                <div
                  key={txn.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    {/* Type badge */}
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-3">
                      {txn.type.charAt(0).toUpperCase() + txn.type.slice(1)}
                    </span>

                    {/* Recipient name & date */}
                    <div>
                      <p className="text-sm font-medium">{txn.recipientName}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(txn.date).toLocaleString('en-NG', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Amount & status */}
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {txn.amount < 0 ? '-' : '+'}
                        {Math.abs(txn.amount).toLocaleString('en-NG', {
                          style: 'currency',
                          currency: 'NGN',
                        })}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">
                        {txn.status}
                      </p>
                    </div>

                    {/* View button opens dialog */}
                    <button
                      onClick={() => openDialog(txn.id)}
                      className="text-blue-600 text-xs font-medium hover:underline"
                    >
                      View
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 4. DialogBox for details */}
      <DialogBox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}            // controlled close
        title={selectedTxn?.description || 'Details'} 
        actionButton={{
          text: 'Close',
          onClick: () => setIsOpen(false),
        }}
      >
        {selectedTxn ? (
          <div className="space-y-2 text-sm">
            <p><strong>From:</strong> {selectedTxn.sender.name} ({selectedTxn.sender.bankName})</p>
            <p><strong>To:</strong> {selectedTxn.recipient.name} ({selectedTxn.recipient.bankName})</p>
            <p><strong>Amount:</strong> ₦{Math.abs(selectedTxn.amount).toLocaleString('en-NG')}</p>
            <p><strong>Fees:</strong> ₦{selectedTxn.fees.toLocaleString('en-NG')}</p>
            <p><strong>Status:</strong> {selectedTxn.status}</p>
            <p><strong>Date:</strong> {new Date(selectedTxn.dateDebited).toLocaleString('en-NG')}</p>
          </div>
        ) : (
          <p>No transaction selected.</p>
        )}
      </DialogBox>
    </>
  )
}
