import React,{useState} from 'react'
import {Input,Button} from '@chakra-ui/react'
import {FaTimes} from 'react-icons/fa'
import axios from 'axios'
import {connect} from 'react-redux'
const Login=({setlog,getUser})=>{
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const onChangeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    async function submit(){
        await axios.post('https://obscure-island-60748.herokuapp.com/auth/login',data,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            getUser(res.data)
            alert(res.data.message)
        }).catch((err)=>{
            alert(err?.response?.data?.message)
        })
    }
    return(
        <div style={{display:"flex",borderRadius:"5px",flexDirection:"column",width:"300px",backgroundColor:"white",padding:"20px",paddingTop:"5px",position:"relative"}}>
                 <div style={{marginBottom:"10px",width:"100%"}}><FaTimes style={{float:"right"}}  onClick={()=>setlog("")}/></div>
             <Input name="email" style={{backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.email} placeholder="email" size="md"/>
             <Input name="password" type="password" style={{marginTop:"10px",marginBottom:"10px",backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.password} placeholder="password" size="md"/>
             <Button onClick={()=>submit()} colorScheme="teal" variant="solid">
                    Login
            </Button>
        </div>
    )
}
const Register=({setlog})=>{
    const [data,setData]=useState({
        email:"",
        password:"",
        fullName:"",
        phone:0,
        role:"viewer"
    })
    const [confrm,setConfrm]=useState("")
    const onChangeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    async function submit(){
        await axios.post('https://obscure-island-60748.herokuapp.com/auth/signup',data,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            alert(res.data.message)
        }).catch((err)=>{
            alert(err?.response?.data?.message)
        })
    }
    return(
        <div  style={{display:"flex",borderRadius:"5px",flexDirection:"column",width:"300px",backgroundColor:"white",padding:"20px",paddingTop:"5px",position:"relative"}}>
             <div style={{width:"100%"}}><FaTimes style={{float:"right"}}  onClick={()=>setlog("")}/></div>
            <Input name="fullName" style={{marginTop:"10px",backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.fullName} placeholder="FullName" size="md"/>
            <Input name="phone" type="tel" style={{marginTop:"10px",marginBottom:"10px",backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.phone} placeholder="Phone" size="md"/>
            <Input name="email" style={{backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.email} placeholder="email" size="md"/>
            <Input name="password" type="password" style={{marginTop:"10px",marginBottom:"10px",backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.password} placeholder="password" size="md"/>
            <Button onClick={()=>{submit()}} colorScheme="teal" variant="solid">
                Register
            </Button>
        </div>
    )
}

function LoginRegister({log,setlog,getUser}) {
    return (
        <div style={{top:0,left:0,right:0,bottom:0,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.3)",zIndex:"8"}}>
            {
                log?<Login setlog={setlog} getUser={getUser}/>:<Register setlog={setlog}/>
            }
        </div>
    )
}

const mapStateToProps=(state)=>({
    user:state.user
})
const mapDispatchToProps=(dispatch)=>({
    getUser:async (data)=>{
        dispatch({type:"GET_USER",payload:data._doc})
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginRegister)