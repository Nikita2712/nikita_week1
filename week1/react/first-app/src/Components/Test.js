// import React from 'react'
// import './Test.css'
// // const Test = () => {
// //   return (
// //     <div>
// //       <h1>
// //         hello im arpan
// //       </h1>
// //     </div>
// //   )
// // };


// // with help of class 
// class Test extends React.Component{
//     // render(){
//     //     console.log("Hello");
//     //     return (
//     //         <div>
//     //         {/* <h3 id='testid'
//     //         style={{
//     //             color: "red"
//     //         }}
//     //         >
//     //             Hello I am Arpan Pandey
//     //         </h3> */}
//     //         <h3 id='testid'
//     //         >
//     //             Hello I am Arpan Pandey
//     //         </h3>

//     //     </div>
//     //     )
//     // }


//     state = {
//         isLoggedIn : false,
//     };
//     render(){
//         return (
//             <div>

//             {!this.state.isLoggedIn ? <h1>you are not loggged in!</h1>:
//             <h2> Congratulations , you are not logged in!</h2>}
                
//                 <button onClick={(e)=>this.setState({isLoggedIn:true})}>
//                     login
//                 </button>
//             </div>
//         )
//     }





// }

// export default Test
import React from "react";
const Test = ({name="",setName}) =>{
    return (
   
   <div>
     <h1> The name is: {name}</h1>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
   </div>
   
)
};
export default Test;