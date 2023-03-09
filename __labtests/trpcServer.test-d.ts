import { assertType, expectTypeOf, test } from 'vitest'

test('my types work properly', () => {
  expectTypeOf({name: "Luis"}).toMatchTypeOf<{ name: string }>()


})