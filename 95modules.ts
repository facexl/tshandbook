import type { Dog, Cat } from './animal'
import { v,type Monkey } from './animal'

type a = Dog
type b = Cat

type c = Monkey

// Together these allow a non-TypeScript transpiler like Babel, swc or esbuild to know what imports can be safely removed.