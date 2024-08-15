const areaFull = prompt("Чи поля заповнені?");
if (areaFull === "") {
    alert (" Не всі поля заповнені")
}
else {
    alert ("Обидва поля заповнені")
}

////////////////////

const randomNumber = prompt(
    "Введіть будь яке число");
  if (randomNumber > 10 ) {
    alert ("Сума більша за 10")
  } 
  else {
    (randomNumber < 10 ) 
    alert ("Сума меншa 10")
  } 

  ////////////////////

  const javaFull = prompt("Чи поля містять JavaScript?");
  if (javaFull.toLowerCase() === "JavaScript".toLowerCase()) {
      alert ("містить JavaScript")
  }
  else {
      alert (" Ne містить JavaScript")
  }

  ///////////////////

  const anyNumber = prompt("Введіть число яке вам подобається");
  if (anyNumber > 10 && anyNumber < 20) {
    alert("Число входить в діапазон від 10 до 20")
  }
  else {
    alert("Число не входить в діапазон від 10 до 20")
  }

  ////////////////////

  const userNameForm = prompt("Введіть ім'я")
  if (userNameForm > "   ") {
    alert("Ім'я правельне")
  }
  else {
    alert("ім'я містить не менше 3 символів")
  }

  const userEmailForm = prompt("Введідь email")
  if (userEmailForm === "@.") {
    alert("Почта правельна")
  }
  else {
    alert("email містить символ @ та крапку після неї")
  }

  const userPasswordForm = prompt("Введіть password")
  if (userPasswordForm === "      ") {
    alert("Пароль правельно")
  }
  else {
    alert("пароль містить не менше 6 символів.")
  }
