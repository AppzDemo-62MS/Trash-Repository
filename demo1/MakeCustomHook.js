  import { CustomHookFetch } from "./CustomHookFetch"

function CustomMade(){

    const apiData = CustomHookFetch("https://restcountries.com/v3.1/al")

    if(apiData){
        console.log("Data Received From Custom Hook")
        console.log(apiData)
    }
    
    return <div>
                <h2>Custom Hooks</h2>
            </div>
}
export default CustomMade;
