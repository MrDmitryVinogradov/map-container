import ErrorRepository from '../classes/ErrorRepository'

test('Should return name', () => {
  const errorRepository = new ErrorRepository([[1, 'Wrong name'], [2, 'Wrong number']]);
  expect(errorRepository.translate(1)).toBe('Wrong name')
})

test('Should return unknown', () => {
  const errorRepository = new ErrorRepository([[1, 'Wrong name'], [2, 'Wrong number']]);
  expect(errorRepository.translate(3)).toBe('Unknown error')
})