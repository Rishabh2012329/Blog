import React,{useEffect} from 'react'
import {Input,Stack,Textarea,Button} from '@chakra-ui/react'
import {connect} from 'react-redux'
import axios from 'axios'
import {FaTimes} from 'react-icons/fa'
function InputC({data,setData,setShow,updateBlog}) {

    return (
        <div style={{top:0,left:0,right:0,bottom:0,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.3)",zIndex:"8"}}>
            <Stack spacing={4} style={{backgroundColor:"white",padding:"25px",borderRadius:"5px",maxWidth:"350px",width:"350px",position:"relative",zIndex:"10",}}>
                <div style={{top:"10px",right:"10px",position:"absolute"}}><FaTimes onClick={()=>setShow(false)}/></div>
                <Input value={data?.title} onChange={(e)=>{
                    setData({...data,title:e.target.value})}} placeholder="title" size="md" />
                <Input value={data?.Date} onChange={(e)=>setData({...data,Date:e.target.value})} type="date" placeholder="date" size="md" />
                <Input value={data?.imgLink} onChange={(e)=>setData({...data,imgLink:e.target.value})} placeholder="Image Link" size="md" />
                <Textarea value={data?.Info} onChange={(e)=>setData({...data,Info:e.target.value})} type="textarea" placeholder="Info" size="md" />
                <Button onClick={()=>{
                    updateBlog(data)
                }}>Update</Button>
            </Stack>
        </div>
       
    )
}
const mapStateToProps=(state)=>({
    blog:state.blog
})
const mapDispatchToProps=(dispatch)=>({
    updateBlog:async (data)=>{
        console.log(data)
        var res=await axios.post('http://localhost:5000/blog/updateBlog',data,{
            header:{
                'Content-Type':'application/json'
            }
        }).catch(err=>{
            alert(err?.response?.data?.message)
        })
        dispatch({type:"UPDATE_BLOG",payload:data})
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(InputC)
