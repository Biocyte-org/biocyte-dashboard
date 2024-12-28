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
            name: 'Time',
            title: 'Time',
            type: 'time',
        }),
        defineField({
            name:'Place of Supply',
            title: 'Place of Supply',
            type: 'string',
        }),
        defineField({
            name:'Due Date',
            title:'Due Date',
            type:'date',
        }),
        defineField({
            name: 'totalAmount',
            title: 'Total Amount',
            type: 'number',
        }),
    ],
});