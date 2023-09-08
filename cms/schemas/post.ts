import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post (Work / Project)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'websitedomain.com/slug will this posts URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      description: 'Main image for post. Displayed in Projects overview as well as when the post is opened',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      description: 'Used to sort the order of posts',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Post Body',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
  ],
})
