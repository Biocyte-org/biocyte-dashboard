import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function InvoiceForm({ invoice, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(invoice || { customer: '', date: '', amount: '', status: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleStatusChange = (value) => {
    setFormData(prev => ({ ...prev, status:value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-4 rounded-lg shadow">
      <div>
        <Label htmlFor="customer">Customer</Label>
        <Input id="customer" name="customer" value={formData.customer} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input id="amount" name="amount" type="number" step="0.01" value={formData.amount} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Select name="status" value={formData.status} onValueChange={handleStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Paid">Paid</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">{invoice ? 'Update' : 'Add'} Invoice</Button>
      </div>
    </form>
  )
}

