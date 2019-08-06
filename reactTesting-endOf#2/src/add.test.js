import {add} from './add'

jest.mock('./add', () => ({
  add: jest.fn(() => 3)
}))

test('add', () => {
  add.mockImplementation(() => 3)
  expect(add(1, 2)).toBe(3)
  expect(add).toHaveBeenCalledWith(1, 2)
  expect(add).toHaveBeenCalledTimes(1)
})