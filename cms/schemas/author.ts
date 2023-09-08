import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author (Homepage)',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      description: 'Try to keep this image relatively small and square (400x400, 600x600)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      description: 'This will be displayed in the top part of the homepage',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'This will be displayed next to the image.',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
  ],
})
