import { type SchemaTypeDefinition } from 'sanity'
import { from} from './form'
import { comments } from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [from,comments]
}
