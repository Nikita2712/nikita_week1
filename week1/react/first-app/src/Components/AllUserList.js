import React,{useState} from "react";
import UserDetails from "./UserDetails";
import Test from "./Test";
// import { Component } from "react";
// const AllUserList = ()=>{
//     let allUser = [{
//         name:"john",
//         email:"200abc@gmail.com",
//         phone:"+91-9171728289"
//     },
// {
//     name:"arpan",
//         email:"abc@gmail.com",
//         phone:"+91-0000008289"
// }];

// // let array=[<UserDetails user={allUser[0]}/>,
// // <UserDetails user={allUser[1]}/> ]
// // let array = allUser.map((user,index)=>(<UserDetails key={index} user={user} />))

    

// return(
//     <div>
//         {/* <UserDetails user={allUser[0]}/>
//         <UserDetails user={allUser[1]}/> */}
//         {/* {array} */}
//         {allUser.map((user,index)=>(<UserDetails key={index} user={user} />))}
//     </div>


const AllUserList=()=>{
    const [state,setState] = useState({
        name:"Arpan"
    })
    // state = {
    //     name:"Priyangshu sSaxena"
    // };
    let allUser =[{
                name:"john",
                email:"200abc@gmail.com",
                phone:"+91-9171728289"
            },
        {
            name:"arpan",
                email:"abc@gmail.com",
                phone:"+91-0000008289"
        }];
        let setStateName =(name)=>{
            setState({...state,name})
        }

            return (
                <div>
                    
                        {/* The name is{state.name} */}
                        <Test name = {state.name} setName={setStateName}/>
                    
                    {allUser.map((user,index)=>(
                        <UserDetails key={index} user={user} />

                    ))}
                </div>
            )
        
    
}





export default AllUserList;