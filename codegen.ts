import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: '../server/src/schema/schema.gql',
  documents: './src/api/graphql/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'urql-introspection',
        'typescript-urql',
      ],
    },
  },
}

export default config
