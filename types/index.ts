export interface Invoice {
    id: number;
    customer: string;
    date: string;
    amount: number;
    status: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
  }
  
  export interface InvoiceFormProps {
    invoice?: Invoice;
    onSubmit: (formData: Invoice) => void;
    onCancel: () => void;
  }
  
  export interface ProductFormProps {
    product?: Product;
    onSubmit: (formData: Product) => void;
    onCancel: () => void;
  }
  