import React,{useState} from 'react'

export default function App() {


    const [show, setshow] = useState(true)


    return (
        <div>
                抽屉-functional
                <hr></hr>
                <Navbar isShow={()=>{
                    console.log("show")
                    setshow(!show)
                }}></Navbar>

                {show&& <Sidebar sideBarshow={show}></Sidebar>}
               
        </div>
    )
}

interface IProps{
    isShow:()=>void
}

function Navbar(props:IProps){
    return(<div>
        Navbar
        <button onClick={()=>{
            props.isShow()
        }}>隐藏</button>
        </div>)
}


interface ISideProps{
    sideBarshow:boolean
}

function Sidebar(props:ISideProps){
    return(<div>
        sideBar
    </div>)
}