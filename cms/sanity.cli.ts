import {defineCliConfig} from 'sanity/cli'
import configData from "../src/config.json"

export default defineCliConfig({
  api: {
    projectId: configData.sanityProjectId,
    dataset: 'production'
  }
})
