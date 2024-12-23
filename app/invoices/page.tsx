"use client";

import { useState } from "react";
import * as React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { InvoiceFormProps } from "@/types/invoice";

// Badge component
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success:
          "border-transparent bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
        warning:
          "border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}


function InvoiceForm({ invoice, onSubmit, onCancel }: InvoiceFormProps) {
  const [formData, setFormData] = useState(
    invoice || {
      id: Date.now(), // Temporary id for new invoices
      customer: "",
      date: "",
      amount: "",
      status: "Pending",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, amount: parseFloat(formData.amount as string) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="customer">Customer</Label>
        <Input
          id="customer"
          name="customer"
          value={formData.customer}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Select value={formData.status} onValueChange={handleStatusChange}>
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
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

// Helper to determine badge variant
const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Paid":
      return "success";
    case "Pending":
      return "warning";
    case "Overdue":
      return "destructive";
    default:
      return "secondary";
  }
};

// Main InvoicesPage component
export default function InvoicesPage() {
  const [invoices, setInvoices] = useState([
    { id: 1, customer: "John Doe", date: "2023-05-01", amount: 299.99, status: "Paid" },
    { id: 2, customer: "Jane Smith", date: "2023-05-05", amount: 149.5, status: "Pending" },
    { id: 3, customer: "Bob Johnson", date: "2023-05-10", amount: 499.99, status: "Overdue" },
  ]);

  const [isAddingInvoice, setIsAddingInvoice] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState<null | typeof invoices[0]>(null);
  const [deletingInvoice, setDeletingInvoice] = useState<null | number>(null);

  const handleAddInvoice = (newInvoice: Omit<typeof invoices[0], "id">) => {
    setInvoices([...invoices, { ...newInvoice, id: invoices.length + 1 }]);
    setIsAddingInvoice(false);
  };

  const handleEditInvoice = (updatedInvoice: typeof invoices[0]) => {
    setInvoices(
      invoices.map((invoice) => (invoice.id === updatedInvoice.id ? updatedInvoice : invoice))
    );
    setEditingInvoice(null);
  };

  const handleDeleteInvoice = () => {
    setInvoices(invoices.filter((invoice) => invoice.id !== deletingInvoice));
    setDeletingInvoice(null);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4 border-b">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Invoice Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-col gap-4 p-4 max-w-6xl mx-auto w-full">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h1 className="text-2xl font-bold">Invoice Management</h1>
            <Button onClick={() => setIsAddingInvoice(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Invoice
            </Button>
          </div>

          {/* Add Invoice Dialog */}
          <Dialog open={isAddingInvoice} onOpenChange={setIsAddingInvoice}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Invoice</DialogTitle>
                <DialogClose />
              </DialogHeader>
              <InvoiceForm
                onSubmit={handleAddInvoice}
                onCancel={() => setIsAddingInvoice(false)}
              />
            </DialogContent>
          </Dialog>

          {/* Edit Invoice Dialog */}
          <Dialog
            open={!!editingInvoice}
            onOpenChange={() => setEditingInvoice(null)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Invoice</DialogTitle>
                <DialogClose />
              </DialogHeader>
              <InvoiceForm
                invoice={editingInvoice || undefined}
                onSubmit={handleEditInvoice}
                onCancel={() => setEditingInvoice(null)}
              />
            </DialogContent>
          </Dialog>

          {/* Delete Invoice Dialog */}
          <Dialog
            open={!!deletingInvoice}
            onOpenChange={() => setDeletingInvoice(null)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Invoice</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this invoice? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDeletingInvoice(null)}>Cancel</Button>
                <Button variant="destructive" onClick={handleDeleteInvoice}>Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.customer}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(invoice.status)}>
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem
                            onClick={() => setEditingInvoice(invoice)}
                          >
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => setDeletingInvoice(invoice.id)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
