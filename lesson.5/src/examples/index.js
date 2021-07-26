/** IF -> ELSE */

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


/** Logical && operator */



/** SWITCH CASE operator */


export default Examples;
