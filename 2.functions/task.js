// Задание 1
function getArrayParams(arr) {
	let min = Infinity;
	let max = -Infinity
	let sum = 0, avg = 0;

	// Ваш код
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}

		sum += arr[i];
	}

	avg = Number((sum / arr.length).toFixed(2));

	return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
	let sum = 0;

	// Ваш код
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function makeWork(arrOfArr, func) {
	let max = 0;
	let result = 0;

	// Ваш кода
	for (let i = 0; i < arrOfArr.length; i++) {
		result = func(arrOfArr[i]);
		
		if (result > max) {
			max = result;
		}
	}

	return max;
}

// Задание 3
function worker2(arr) {
	// Ваш код
	let max = -Infinity;
	let min = Infinity;
	let diff;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	diff = Math.abs(max - min);

	return diff;
}
