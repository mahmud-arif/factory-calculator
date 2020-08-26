export const factorial = (n) => {
	return n ? n * factorial(n - 1) : 1
}
