import React from 'react'
import { Button ,Flex} from "@chakra-ui/react"

export default function SideNavbar() {
    return (
        <div style={{zIndex:'5',color:'#404040',boxShadow:'1px 1px 10px black',backgroundColor:"white",animation:"ease-in 1s",animationName:"moc",animationDirection:"normal",animationDuration:'0.2s',width:'240px',display:"flex",flexDirection:"column",right:"0",top:"0",bottom:'0',position:"fixed",alignItems:'center'}}>
                <Button colorScheme="teal" style={{marginTop:"30px",marginBottom:"30px"}} width="120px" variant="outline">
                    Login
                </Button>
                <Button colorScheme="teal" width="120px" variant="solid">
                    Register
                </Button>
           
        </div>
    )
}
