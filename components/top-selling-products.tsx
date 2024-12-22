import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const products = [
  {
    name: "Product A",
    category: "Electronics",
    sales: 1234,
    stock: 56,
  },
  {
    name: "Product B",
    category: "Clothing",
    sales: 987,
    stock: 23,
  },
  {
    name: "Product C",
    category: "Home & Garden",
    sales: 765,
    stock: 89,
  },
  {
    name: "Product D",
    category: "Electronics",
    sales: 543,
    stock: 12,
  },
  {
    name: "Product E",
    category: "Clothing",
    sales: 321,
    stock: 45,
  },
]

export function TopSellingProducts() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.name}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.sales}</TableCell>
            <TableCell>{product.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

