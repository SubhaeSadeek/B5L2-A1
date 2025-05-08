function formatString(input: string, toUpper?: boolean): string {
	return toUpper === true || toUpper === undefined
		? input.toUpperCase()
		: input.toLowerCase();
}

function filterByRating(
	items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
	const ratingAbove4: { title: string; rating: number }[] = items.filter(
		(item) => item.rating >= 4
	);
	return ratingAbove4;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
	const combined: T[] = ([] as T[]).concat(...arrays);
	return combined;
}

class Vehicle {
	private make: string;
	private year: number;

	constructor(make: string, year: number) {
		this.make = make;
		this.year = year;
	}

	public getInfo(): string {
		return `Make: ${this.make}, Year: ${this.year}`;
	}
}

class Car extends Vehicle {
	private model: string;

	constructor(make: string, year: number, model: string) {
		super(make, year);
		this.model = model;
	}

	public getModel(): string {
		return `Model: ${this.model}`;
	}
}

function processValue(value: string | number): number {
	if (typeof value === "string") {
		return value.length;
	} else typeof value === "number";
	return value * 2;
}

interface Product {
	name: string;
	price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
	if (products.length === 0) {
		return null;
	}

	const allProductsPrice = products.map((product) => product.price);
	const maxPrice = Math.max(...allProductsPrice);
	const mostExpensiveProd = products.find(
		(product) => product.price === maxPrice
	);
	return mostExpensiveProd || null;
}

enum Day {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

function getDayType(day: Day): string {
	return day === Day.Friday || day === Day.Saturday ? "Weekend" : "Weekday";
}

async function squareAsync(n: number): Promise<number> {
	return new Promise((resolve, reject) => {
		if (n < 0) {
			reject(new Error("Negative number not allowed"));
		} else {
			setTimeout(() => {
				resolve(n * n);
			}, 1000);
		}
	});
}
