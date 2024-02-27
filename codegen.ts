import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: '../server/src/schema/schema.gql',
  documents: 'src/api/**/*.ts',
  ignoreNoDocuments: true,
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
