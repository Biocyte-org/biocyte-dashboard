import { type SchemaTypeDefinition } from 'sanity'
import product from './productSchema'
import customer from './customerSchema'
import invoiceSchema from './invoiceSchema'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,customer,invoiceSchema],
}
