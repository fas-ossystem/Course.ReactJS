export const ping = store => next => action => {
   console.log(
       `Тип события: ${action.type}, дополнительные
       данные события: ${action.payload}`
   );
   return next(action);
}

/**
 * ES5 версия функции выше
 */
// var ping = function ping(store) {
//   return function(next) {
//     return function(action) {
//       console.log('ping');22
//       return next(action);
//     }
//   }
// }

/**
 * ping - это функция, которая возвращает функцию.
 * Middleware - это всегда функция, которая обычно
 * возвращает функцию, если целью middleware не 
 * является прервать цепочку вызовов.
 * 
 * В функциях становятся доступными аргументы, которые
 * можно использовать во благо приложения:
 *  - store - redux-store приложения
 *  - next - функция-обертка, которая позволяет
 * продолжить выполнение цепочки
 *  - action - действие, которое было вызвано 
 * (вызыванные действия - это store.dispatch)
 */
