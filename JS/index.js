//Задача №1
function countSandwiches(bread, cheese) {
  let breadValue = bread,
    cheeseValue = cheese;
  let bread_counter = Math.floor(bread);
  let cheese_counter = Math.floor(cheese);
  while (true) {
    if (bread_counter < 2 || cheese_counter < 1) {
      return "Недостаточно ингридиентов для бутерброда.\nЛибо утки весь батон съели.\nЛибо мышка утащила сыр.";
    }
    if (bread_counter % 2 != 0) {
      bread_counter -= 1;
    }
    if (bread_counter / 2 <= cheese_counter) {
      return `countSandwiches({bread: ${breadValue}, cheese: ${cheeseValue} -> ${Number(
        bread_counter / 2
      )}})`;
    } else {
      bread_counter -= 2;
    }
  }
}

console.log(countSandwiches(10, 5));

//Задача №2
function generateMultiplicationTable(n) {
  let result = " \t";
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i == 0 && j > 0) {
        result += j + "\t";
      } else if (j == 0 && i > 0) {
        result += i + "\t";
      } else if (i > 0 && j > 0) {
        result += i * j + "\t";
      }
    }
    result += "\n";
  }
  return result;
}
console.log(generateMultiplicationTable(5));

//Задача №3
function showQuote(wordsArray, borderSymbol) {
  let stringTable = "";
  const longestStr = wordsArray.reduce(
    (max, n) => (max.length > n.length ? max : n),
    ""
  );
  for (let i = 0; i < wordsArray.length + 2; i++) {
    if (i == 0 || i == wordsArray.length + 1) {
      stringTable += borderSymbol.repeat(longestStr.length + 4);
    } else {
      stringTable +=
        `${borderSymbol} ` +
        wordsArray[i - 1] +
        " ".repeat(longestStr.length - wordsArray[i - 1].length) +
        ` ${borderSymbol}`;
    }
    stringTable += "\n";
  }
  return stringTable;
}
console.log(showQuote(["Hello", "World", "IN", "JS"], "*"));

//Задача №4
function combineArrays(array1, array2) {
  let pack = [];
  for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
    if (i < array1.length) {
      pack.push(array1[i]);
    }
    if (i < array2.length) {
      pack.push(array2[i]);
    }
  }
  return pack;
}
console.log(combineArrays([1, 2, 3], ["a", "b", "c", "d"]));

//Задача №5
function countUniqueValues(array) {
  const arr = array;
  const res = arr.reduce(
    (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
    {}
  );
  console.table(res);
}
countUniqueValues([1, 2, 1, 2, 3, 4, 2, 5]);

//Задача №6
const openMenuBtn = document.querySelector("#open-menu");
const header = document.querySelector("#header");
const mobileMenu = document.querySelector("#mobile-menu");

openMenuBtn.addEventListener("click", function () {
  openMenuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("menu-wrapper-active");
  document.body.classList.toggle("no-scroll");
  header.classList.toggle("menu-opened");
});

// Создать всплывающее уведомление (не alert), который через две секунды от загрузки страницы всплывает снизу справа и показывает информацию из объекта вида {name: String, message: String}. В нем есть кнопка закрытия. При нажатии на нее уведомление плавно скрывается.

//задача №7
const testAlerts = [
  {
    name: "alert",
    message: "This is test alert message",
  },
  {
    name: "success",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, unde consequatur placeat delectus, blanditiis",
  },
  {
    name: "warn",
    message: "Corporis dolorum eius quis eligendi vero quod nisi velit odio.",
  },
];

const toastWrapper = document.querySelector("#toast-wrapper");

function removeToast(toast) {
  toast.classList.add('hide');

  setTimeout(function(){
    toast.remove();
  }, 500)
}

function createToast(info) {
  const toastEl = document.createElement("div");
  toastEl.classList.add("toast");
  toastEl.classList.add("show");
  const toastName = "toast-" + info.name;
  toastEl.classList.add(toastName);

  const toastText = document.createElement("p");
  toastText.classList.add("toast__text");
  toastText.textContent = info.message;

  const toastClose = document.createElement("button");
  toastClose.classList.add("toast__close-btn");
  toastClose.textContent = "x";

  toastClose.addEventListener('click',function(){
    removeToast(toastEl);
  })

  toastEl.append(toastText, toastClose);

  return toastEl;
}


function showToasts() {
  testAlerts.forEach(function (testMesg) {
    const toast = createToast(testMesg);
    toastWrapper.prepend(toast);
  });
}

window.addEventListener("load", function() {
  setTimeout(showToasts, 2000);
});

