`"use strict";`

function solveEquation(a, b, c) {
	let arr = [];
	// код для задачи №1 писать здесь
	let discr = b**2 - 4*a*c;

	if (discr > 0) {
		arr[0] = (-b + Math.sqrt(discr)) / (2*a);
		arr[1] = (-b - Math.sqrt(discr)) / (2*a);
	} else if (discr === 0) {
		arr[0] = (-b) / (2*a)
	}

	return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;

  // код для задачи №2 писать здесь

	if (isNaN(percent)) {
		return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	} else if (isNaN(contribution)) {
		return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	} else if (isNaN(amount)) {
		return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}
	// здесь должна быть проверка введенного времени


	let body = amount - contribution;

	let time = new Date();
	let dateDifference = Date.parse(date) - Date.parse(time);
	let timeLimit = Math.ceil(dateDifference / 1000 / 60 / 60 / 24 / 30.5 );

	let P = percent / 12 / 100; // 1/12 процентной ставки
	let monthlyPayment = body * (P + (P / (((1 + P) ** timeLimit) - 1)));

	totalAmount = timeLimit * monthlyPayment;
	totalAmount = Number(totalAmount.toFixed(2));
	return totalAmount;
}

// function calculateTotalMortgage(percent, contribution, amount, date) {
// 	let totalAmount;
// 		 if (isNaN(percent)) {
// 		 return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
// 	 } else if (isNaN(contribution)) {
// 		 return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
// 	 } else if (isNaN(amount)) {
// 		 return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
// 	 } 	
// 	 let returnAmountBank = amount - contribution;	
// 	 let date1 = new Date();	
// 	 let diff = Date.parse(date) - Date.parse(date1);
// 	 let creditTerm = Math.ceil(diff / 1000 / 60 / 60 / 24 / 30.5);	
// 	 let P = percent / 12 / 100;
// 	 let monthlyFee = returnAmountBank * (P + (P / (((1 + P) ** creditTerm) - 1)));
// 			 totalAmount = creditTerm * monthlyFee;				
// 	 return Number(totalAmount.toFixed(2));	
//  }
