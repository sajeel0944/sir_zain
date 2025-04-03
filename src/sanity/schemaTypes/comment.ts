import { defineField, defineType } from 'sanity';

export const comments= defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      title: 'User Name',
      type: 'string',
      validation: Rule => Rule.required().error('User name is required'),
    }),
    defineField({
      name: 'userImage',
      title: 'User Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      // validation: Rule => Rule.required().error('User image is required'),
    }),
    defineField({
      name: 'commentDate',
      title: 'Comment Date',
      type: 'date',
      validation: Rule => Rule.required().error('Comment date is required'),
    }),
    defineField({
      name: 'commentTime',
      title: 'Comment Time',
      type: 'string',
      validation: Rule => Rule.required().error('Comment time is required'),
    }),
    defineField({
      name: 'commentText',
      title: 'Comment',
      type: 'text',
      validation: Rule => Rule.required().error('Comment must be at least 10 characters'),
    }),
  ],
});
