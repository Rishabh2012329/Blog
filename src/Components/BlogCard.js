import React,{useState} from 'react'
import {Flex} from '@chakra-ui/react'
import InputC from './Input'

export default function BlogCard({imgLink,title,Info,Date,_id,usr,del}) {
    const [data,setData]=useState()
    const [show,setShow]=useState(false)
    function set(){
        setData({title:title,Info:Info,Date:Date,imgLink:imgLink,_id:_id})
        setShow(true)
    }
    function delet(){
        del({
            title:title,Info:Info,Date:Date,imgLink:imgLink,_id:_id
        })
    }
    return (
        <>
        <Flex  direction="column"  style={{width:"300px",height:"330px",zIndex:"0",borderRadius:"5px",overflow:"hidden",boxShadow:"0px 0px 8px rgba(0,0,0,0.2)",margin:"30px"}}>
            <img src={imgLink} style={{width:"100%",height:"180px"}}/>
            <div style={{width:"100%",padding:"9px",borderBottom:"solid rgba(0,0,0,0.4) 1px"}}>
                <div style={{fontSize:"17px",fontWeight:"bold"}}>{title}</div>
                <div style={{color:"#cecece",fontSize:"14px",marginTop:"5px",marginBottom:"5px"}}>Published-{Date}</div>
                <div style={{width:"100%",fontSize:"14px",height:"35px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{Info}</div>           
            </div>
            <Flex direction="row" style={{padding:"10px",width:"100%",justifyContent:"space-between"}}>
                <div style={{color:"#cecece",fontSize:"14px"}}>By Rishabh baid</div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"150px"}}>
                    <button onClick={()=>set()} style={{fontSize:"14px",color:"green",outline:"none",visibility:usr?.role==="admin"?"":"hidden"}} >edit</button>
                    <button onClick={()=>delet()} style={{fontSize:"14px",color:"green",outline:"none",visibility:usr?.role==="admin"?"":"hidden"}} >delete</button>
                    <div style={{color:"#0800ff",cursor:"pointer",fontSize:"14px"}}>Read More</div>
                </div>
            </Flex>
            
        </Flex>
        {show?<InputC data={data} setData={setData} setShow={setShow}/>:null}
        </>
    )
}
