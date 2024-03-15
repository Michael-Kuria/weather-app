import { FC } from "react"
import { Layout} from "antd"
import Header from "./Header"
import Highlight from "./hightlight"

const Main:FC = () => {

    return (
        <Layout style={{minHeight: '100vh', padding: '4rem', display: 'flex', flexDirection:'column', gap: '2rem'}}>

            <Header />
            <Highlight />
        </Layout>
    )

}

export default Main;