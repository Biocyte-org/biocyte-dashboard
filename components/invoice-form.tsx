import { useState } from 'react';
import { Invoice,InvoiceFormProps } from '@/types/invoice';


export function InvoiceForm({ invoice, onSubmit }: InvoiceFormProps) {
  const [formData, setFormData] = useState<Invoice>(
    invoice || { id: 0, customer: '', date: '', amount: 0, status: 'Pending' }
  );


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.customer}
        onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
        placeholder="Customer"
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        placeholder="Date"
      />
      <input
        type="number"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
        placeholder="Amount"
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
