import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'invoice',
    title: 'Invoice',
    type: 'document',
    fields: [
        defineField({
            name: 'invoiceNumber',
            title: 'Invoice Number',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
        }),
        defineField({
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }],
        }),
        defineField({
            name: 'totalAmount',
            title: 'Total Amount',
            type: 'number',
        }),
    ],
});