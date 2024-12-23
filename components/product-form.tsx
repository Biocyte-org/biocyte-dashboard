import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductFormProps {
  product?: {
    name: string;
    category: string;
    price: string | number;
    stock: string | number;
  };
  onSubmit: (formData: {
    name: string;
    category: string;
    price: number;
    stock: number;
  }) => void;
  onCancel: () => void;
}

export function ProductForm({ product, onSubmit, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    category: product?.category || '',
    price: product?.price || '',
    stock: product?.stock || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: parseFloat(formData.price as string),
      stock: parseInt(formData.stock as string, 10),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-4 rounded-lg shadow">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price.toString()}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="stock">Stock</Label>
        <Input
          id="stock"
          name="stock"
          type="number"
          value={formData.stock.toString()}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {product ? 'Update' : 'Add'} Product
        </Button>
      </div>
    </form>
  );
}
