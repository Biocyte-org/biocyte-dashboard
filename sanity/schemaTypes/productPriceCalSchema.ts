import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'Subtotal',
    title: 'Subtotal',
    type: 'document',
    fields: [
        defineField({
            name: 'Subtotal',
            title: 'Subtotal',
            type: 'number',
        }),
        defineField({
            name: 'Total',
            title: 'Total',
            type: 'number',
        }),
        defineField({
            name:'Balance',
            title:'Balance',
            type:'number',
        }),
        defineField({
            name:'Payment Mode',
            title:'Payment Mode',
            type:'number',
        }),
        defineField({
            name:'Current Balance',
            title:'Current Balance',
            type:'number',
            }),
        defineField({
            name:'Payment Status',
            title:'Payment Status',
            type:'string',
        }),
        ],
})