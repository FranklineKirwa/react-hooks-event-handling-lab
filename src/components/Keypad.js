// Code Keypad Component Here

function Keypad (){
    function change(event){
        event.preventDefault();
        console.log("Entering password...");
    }
    return (
        <form>
       <input onChange={change} type="password" name="password" placeholder="Enter your password.."/>

        </form>

    )
}

export default Keypad;