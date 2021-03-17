import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import BlogCard from '../Components/BlogCard'
import { AnimateSharedLayout } from "framer-motion"
import axios from 'axios'
import Pagination from '../Components/Pagination'
import Posts from '../Components/Posts'
import {Input,Textarea,Button} from '@chakra-ui/react'

const initState={
    length:0,
    blog:[1,2],
    pageNumber:1,
    postsPerPage:6,
}

function Home(props){
    const [state,setState]=useState(initState)
    const [data,setData]=useState({
        title:"",
        Date:"",
        imgLink:"",
        Info:""
    })
    async function load(){
       await props.loadBlog()
    }
    useEffect(()=>{
        load()
    },[props.blog.blogs])
    const onChangeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handlePost=()=>{
        props.postBlog(data)
        setData({
            title:"",
            Date:"",
            imgLink:"",
            Info:""
        })
    }
    function Delete(data){
        props.deleteBlog(data)
    }
    const indexOfLastPost=state.pageNumber*state.postsPerPage
    const indexOfFirstPost=indexOfLastPost-state.postsPerPage
    const arr=props?.blog?.blogs?.slice(indexOfFirstPost,indexOfLastPost)
    return (
        <div style={{marginTop:"100px"}}>
            <div style={{width:"90%",margin:"auto",display:'flex',flexWrap:"wrap",flexDirection:"column"}}>
                <Pagination postsPerPage={state.postsPerPage} pageNumber={state.pageNumber} totalPosts={props.blog?.blogs?.length} state={state} paginate={setState}/>
                <Posts del={Delete} usr={props.user.usr} posts={arr}/>
            </div>
            {props.user.usr?.role==="admin"?<div style={{maxWidth:"400px",display:'flex',flexDirection:"column",margin:"auto",marginTop:"10px",marginBottom:"30px",zIndex:"0"}}>
                <h1 style={{textAlign:"center",fontSize:"21px",fontWeight:"700",margin:"15px"}}>Post a blog</h1>
                <Input name="title" style={{margin:"5px",backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.title} placeholder="Title" size="md"/>
                <Input name="Date" type="date" style={{margin:"5px",backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.Date} placeholder="Date" size="md"/>
                <Input name="imgLink" style={{margin:"5px",backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.imgLink} placeholder="Image Link" size="md"/>
                <Textarea name="Info" style={{margin:"5px",backgroundColor:"#f1f1f1"}} onChange={onChangeHandler} value={data.Info} placeholder="Info" size="md"/>
                <Button onClick={()=>{handlePost()}} colorScheme="teal" style={{margin:"auto",margin:"5px"}}>Post</Button>
            </div>:null}

        </div>
    )
}
const mapStateToProps=(state)=>({
    blog:state.blog,
    user:state.user,
})
const mapDispatchToProps=(dispatch)=>({
    loadBlog:async ()=>{
        var res=await axios.get('https://obscure-island-60748.herokuapp.com/blog/getAllBlog').catch(err=>{
            console.log(err.response)
        })
        dispatch({type:"LOAD_BLOG",payload:res?.data})
    },
    postBlog:async (data)=>{
        var res=await axios.post('https://obscure-island-60748.herokuapp.com/blog/postBlog',data,{
            header:{
                'Content-Type':'application/json'
            }
        }).catch(err=>{
            alert(err.response.data.message)
        })
        dispatch({type:"POST_BLOG",payload:data})
    },
    deleteBlog:async (data)=>{
        await axios.post('https://obscure-island-60748.herokuapp.com/blog/deleteBlog',data,{
            header:{
                'Content-Type':'application/json'
            }
        }).catch(err=>{
            alert(err.response.data.message)
        })
        dispatch({type:"DELETE_BLOG",payload:data})
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)