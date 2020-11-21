const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b)
}

// multiplicator(2, 4, 'The result is:')
const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, 'The result is: ')
