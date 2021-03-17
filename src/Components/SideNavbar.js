import React from 'react'
import { Button ,Flex} from "@chakra-ui/react"

export default function SideNavbar({setlog,usr,clrusr}) {
    return 
        {usr?<Button onClick={()=>clrusr()} colorScheme="teal" width="120px" variant="outline">
                    Logout
                </Button>:<Stack id="mobile" direction="row" spacing={4} style={{marginRight:"30px"}}>
                <Button onClick={()=>{setlog(true)}} colorScheme="teal" width="120px" variant="outline">
                    Login
                </Button>
                <Button onClick={()=>{setlog(false)}} colorScheme="teal" width="120px" variant="solid">
                    Register
                </Button>
            </Stack>}
    
}
