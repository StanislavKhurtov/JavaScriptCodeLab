//Event Loop  Ассинхронность


//  const timeOut  = setTimeout(() => {
//  	console.log('After timeout')
//  }, 5000)

//clearTimeout(timeOut) // Очищаем timeout

//  const interval  = setInterval(() => {
//  		console.log('After timeout')
//  }, 2000);

// clearInterval(interval)


//  const delay = (callback , wait = 1000) => {
//  	setInterval(callback , wait)
//  };

// delay(() => {
// 	console.log(' stas privet')
// },2000)

//! ПРОМИСЫ

//  const delay = (wait = 1000) => {
//  	const promise = new Promise((resolve, reject) => {
//  		setTimeout( () => {
//  			reject('Что то пошло не так. Обновите попытку')
//  		},wait)
//  	})
//  	return promise	
//  }

//  delay(2500)
//  .then(() => {
//  	console.log('ny pizdec')
//  })
//  .catch(err => console.error('Error', err))
//  .finally(() => console.log('Finally'))



