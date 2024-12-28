import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'Item name',
            title: 'Item Name',
            type: 'string',
        }),
       defineField({
            name:'HSN/SAC',
            title:'HSN/SAC',
            type:'string',
       }) ,
       defineField({
            name:'Mfg. Date',
            title:'Manufacturing Date',
            type:'date',
        }),
        defineField({
            name:'Exp. Date',
            title:'Expiry Date',
            type:'date',
        }),
        defineField({
            name:'Quantity',
            title:'Quantity',
            type:'number',
        }),
        defineField({
            name:'Price/Unit',
            title:'Price/Unit',
            type:'number',
        }),
        defineField({
            name: 'Amount',
            title: 'Amount',
            type: 'number',
        }),
       
    ],
});
