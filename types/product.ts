export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
  }
export interface ProductFormProps {
    product?: Product;
    onSubmit: (formData: Product) => void;
    onCancel: () => void;
  }
