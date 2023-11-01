import { data } from "./App"
function ChildB() {

    return (
        <>
            <data.Consumer>
                {
                    (data) => {
                        return (
                            <p>{data}</p>
                        )
                    }
                }
            </data.Consumer>


        </>
    )
}
export default ChildB;