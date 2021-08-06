// /** IF -> ELSE */

// function ListItem(props) {
//   return <li>{props.item}</li>;
// }

// // function Examples(props) {
// //   if (!props.listItems) {
// //     return null;
// //   }

// //   return (
// //     <div>
// //       { props.listItems.map((item, key) =>
// //           <ListItem key={key} item={item} />
// //       )}
// //     </div>
// //   );
// // }

// function Examples(props) {
//   if (!props.listItems) {
//     return null;
//   }

//   if (!props.listItems.length) {
//     return (
//       <div>
//         <h1>Sorry, the list is empty.</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         { props.listItems.map((item, key) =>
//           <ListItem key={key} item={item} />
//         )}
//       </div>
//     );
//   }
// }


/** TERNARY operator */

// const handleClick = () => alert("Edit modal");

// function ItemEdit(props) {
//   return (
//     <div>
//       <label>
//         {props.text}
//         <button onClick={() => handleClick()}>Edit</button>
//       </label>
//     </div>
//   );
// }

// function ItemView(props) {
//   return (
//     <div>
//       <label>
//         {props.text}
//           <button disabled onClick={() => handleClick()}>Edit</button>
//       </label>
//     </div>
//   );
// }

// function Examples(props) {
//   return (
//     <div>
//       {
//         props.listItems.map( (item, key) => {
//           const isEditMode = item.mode === 'EDIT';
//           return isEditMode ? (
//               <ItemEdit key={key} item={item.text} />
//             ) : (
//               <ItemView key={key} item={item.text} />
//             )
//         })
//       }
//     </div>
//   );
// }

// // function Examples(props) {
// //     if (props.isLoading) {
// //         return (
// //             <div>
// //                 <p>Loading...</p>
// //             </div>
// //         );
// //     } else {
// //         return null;
// //     }
// // }
//
// function Examples(props) {
//     return (
//         <div>
//             {props.isLoading ? <p>Loading...</p> : null}
//         </div>
//     );
// }


/** Logical && operator */

// function Examples() {
//     const result = true && 'Hello World!';
//     // const result = false && 'Hello World!';
//
//     return result;
//
//     // return (
//     //     <>
//     //         { (10 === 5) && alert("Этот алерт никогда не будет вызван :-)") }
//     //
//     //         { (3 < 5) && (() => alert("А этот алерт всегда будет вызываться :-)")) }
//     //     </>
//     // );
// }

// function Examples(props) {
//     return (
//         <div>
//             { props.isLoading && <p>Loading...</p> }
//         </div>
//     );
// }

/** SWITCH CASE operator */
// import PropTypes from 'prop-types';
//
// function Info(props) {
//     return <h1 style={{color: 'blue'}}>{props.text}</h1>;
// }
//
// function Success(props) {
//     return <h1 style={{color: 'green'}}>{props.text}</h1>;
// }
//
// function Warning(props) {
//     return <h1 style={{color: 'orange'}}>{props.text}</h1>;
// }
//
// function Error(props) {
//     return <h1 style={{color: 'red'}}>{props.text}</h1>;
// }
//
// function Examples(props) {
//     switch (props.state) {
//         case 'info':
//             return <Info text={props.text} />;
//         case 'success':
//             return <Success text={props.text} />;
//         case 'warning':
//             return <Warning text={props.text} />;
//         case 'error':
//             return <Error text={props.text} />;
//         default:
//             return null;
//     }
// }
//
// Notification.propTypes = {
//     text: PropTypes.string,
//     state: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
// };

export default Examples;
