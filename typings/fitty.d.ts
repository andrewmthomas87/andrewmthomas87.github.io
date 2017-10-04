
declare module 'fitty' {
	type Fitty = (selector: string, options?: any) => void & {
		fitAll(): void
	}
	var fitty: Fitty
	export default fitty
}
