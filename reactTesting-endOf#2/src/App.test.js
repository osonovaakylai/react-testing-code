import {total} from './App'
import {add} from './add'

jest.mock('./add', () => ({
  add: jest.fn(() => 25)
}))

test('total', () => {
  const result = total(5, 20)
  expect(add).toHaveBeenCalledTimes(1)
  expect(result).toBe('$25')

  add.mockImplementation(() => 30)
  expect(total(5, 25)).toBe('$30')
  expect(add).toHaveBeenCalledTimes(2)
})
