import {defineType, defineField} from 'sanity';

export default defineType({
    name: 'Transport',
    title: 'Transport',
    type: 'document',
    fields: [
        defineField({
            name:'Transport Details',
            title:'Transport Details',
            type:'object',
            fields:[
                defineField({
                    name:'Transport Name',
                    title:'Transport Name',
                    type:'String'
                }),
                defineField({
                    name:'Delivery Location',
                    title:'Delivery Location',
                    type:'string'
                }),
            ],
        }),
    ],
});