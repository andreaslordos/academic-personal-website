import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import configData from "../src/config.json"
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'academic-portfolio',

  projectId: configData.sanityProjectIdcd,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
