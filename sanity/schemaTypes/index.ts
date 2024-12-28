import { type SchemaTypeDefinition } from 'sanity'
import product from './productSchema'
import customer from './customerSchema'
import invoiceSchema from './invoiceSchema'
import transportSchema from './transportSchema'
import productPriceCalSchema from './productPriceCalSchema'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,customer,invoiceSchema,transportSchema,productPriceCalSchema],
}
