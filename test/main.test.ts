import {expect, test} from 'bun:test'

const {default: paintingAdjectivesExploration} = await import('#src/main.ts')

test('should run', () => {
  const result = paintingAdjectivesExploration()
  expect(result).toBe('painting-adjectives-exploration') // TODO Test actual functionality
})
