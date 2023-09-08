import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'body',
      title: 'Contact Body',
      description: 'Free style your contact page here',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
  ],
})
