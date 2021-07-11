import React from 'react';
import './Examples.css';

class Examples extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * JSX. Встраивание выражений
   */
  render() {
    const name = 'Иннокентий';

    const L_1 = (props) => (";asdjfa;sdfjasd;fasj");

    return (
      <>
        <h1>Да прибудет с тобой сила, {name}</h1>
        <L_1 />
      </>
    );
  }
  /* =============================================================== */

  // /**
  //  * JSX. JSX это тоже выражение
  //  */
  // getFullName() {
  //   let firstName = 'Томас';
  //   let lastName = 'Йоханссон';

  //   return <u>{firstName} {lastName}</u>; 
  // }

  // render() {
  //   return <h1>Привет, { this.getFullName() }</h1>;
  // }
  // /* =============================================================== */

  // /**
  //  * JSX. Дочерние элементы в JSX
  //  */
  // render() {
  //   const el = (
  //     <div>
  //       <h1>Content header</h1>
  //       <p>Description...</p>
  //       <p>Text</p>
  //     </div>
  //   );

  //   // const el = (
  //   //     <h1>Content header</h1>
  //   //     <p>Description...</p>
  //   //     <p>Text</p>
  //   // );

  //   // const el = (
  //   //   <>
  //   //     <h1>Content header</h1>
  //   //     <p>Description...</p>
  //   //     <p>Text</p>
  //   //   </>
  //   // );

  //   return el;
  // }
  // /* =============================================================== */

  // /**
  //  * JSX. Дочерние элементы в JSX
  //  */
  //  render() {
  //   const element = () => (
  //     [
  //       <li>Element 1</li>,
  //       <li>Element 2</li>,
  //       <li>Element 3</li>,
  //     ]
  //   );

  //   return element();
  // }
  // /* =============================================================== */

  // /**
  //  * JSX. Строковые литералы
  //  */
  //  render() {
  //   const element1 = <div title="&lt;3">Block with title 1</div>;
  //   const element2 = <div title={'<3'}>Block with title 2</div>;
  //   const commonElement = <div>
  //     {element1}
  //     {element2}
  //   </div>;

  //   return commonElement;
  // }
  // /* =============================================================== */

  // /**
  //  * JSX. JavaScript выражения как дочерние компоненты
  //  */
  // render() {
  //   function Item(props) {
  //     return <li>{props.message}</li>;
  //   }
    
  //   function TodoList() {
  //     const todos = ['message1', 'message2', 'message3'];
  
  //     return (
  //       <ul>
  //         { todos.map( message => <Item key={message} message={message} /> ) }
  //       </ul>
  //     );
  //   }

  //   return <TodoList />;
  //   // return TodoList();
  // }
  // /* =============================================================== */

  // /**
  //  * JSX. Функции как дочерние компоненты
  //  */
  // render() {
  //   function UserList(props) {
  //     return <ul>{ props.users.map(user => props.children(user)) }</ul>;
  //   }
    
  //   function UserPage() {
  //     const users = [
  //       {id: 1, name: 'Лиза Су'},
  //       {id: 2, name: 'Дженсен Хуанг'},
  //     ];
  
  //     return (
  //       <UserList users={users}>
  //         { user => <li key={user.id}>Пользователь: {user.name}</li> }
  //       </UserList>
  //     );
  //   }

  //   return UserPage();
  //   // return <UserPage />;
  // }
  // /* =============================================================== */
}

export default Examples;
