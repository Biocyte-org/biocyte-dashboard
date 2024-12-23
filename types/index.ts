export interface Invoice {
    id: number;
    customer: string;
    date: string;
    amount: number;
    status: string;
  }
  
  
  
  export interface InvoiceFormProps {
    invoice?: Invoice;
    onSubmit: (formData: Invoice) => void;
    onCancel: () => void;
  }
  
  
  