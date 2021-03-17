import React,{useState,useEffect} from 'react'
import { Button ,Stack} from "@chakra-ui/react"
import {FaBars} from 'react-icons/fa'
import './nav.css'
import SideNavbar from './SideNavbar'
import LoginRegister from './LoginRegister'
import {connect} from 'react-redux'
import axios from 'axios'

function Navbar(props) {
    const [togle,setTog]=useState("none")
    const [log,setlog]=useState("")
    useEffect(() => {  
        console.log(props.user.usr)
    }, [props.user.usr])

    return (
        <div style={{zIndex:"3",backgroundColor:"white",display:'flex',flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:"20px",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)",top:0,right:0,left:0,position:"fixed"}}>
            <h1 style={{marginLeft:"20px",fontSize:"20px",fontWeight:"bold"}}>Rishabh's Blog</h1>
            {props.user.usr?<Button onClick={()=>props.clearUser()} colorScheme="teal" width="120px" variant="outline">
                    Logout
                </Button>:<Stack id="mobile" direction="row" spacing={4} style={{marginRight:"30px"}}>
                <Button onClick={()=>{setlog(true)}} colorScheme="teal" width="120px" variant="outline">
                    Login
                </Button>
                <Button onClick={()=>{setlog(false)}} colorScheme="teal" width="120px" variant="solid">
                    Register
                </Button>
            </Stack>}
            <div id="menue-toggler" onClick={()=>setTog("flex")}>
                <FaBars style={{fontSize:"20px",color:"teal"}}/>
            </div>    
            <div style={{display:togle}}>
                <SideNavbar/>
                <div style={{top:'0',bottom:"0",left:"0",right:"0",position:"fixed",zIndex:"4",backgroundColor:"rgba(0,0,0,0.3)"}} onClick={()=>setTog('none')}></div>
            </div>
            {log!==""?<LoginRegister log={log} setlog={setlog}/>:null}
        </div>
    )
}
const mapStateToProps=(state)=>({
    user:state.user
})
const mapDispatchToProps=(dispatch)=>({
    clearUser:async ()=>{
        dispatch({type:"LOGOUT_USER"})
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)