"use client"

import { useCurrentUser } from "@/hooks/use-current-user";



const SettingsPage = () =>{
    const user = useCurrentUser();

    return(
        <div className=" bg-slate-500">
            
                conteudo textual daqui
            
        </div>
    )
}
export default SettingsPage;