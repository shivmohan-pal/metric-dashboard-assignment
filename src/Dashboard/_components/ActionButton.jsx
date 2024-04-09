const ActionButton = ({className, text,action})=>{
    const handleAction =()=>{
      if(action) action();
    }
    return (
        <button onClick={handleAction} className={`${className} flex-none px-3 py-1 rounded-3xl text-lg font-medium`} >
         {text}
        </button>
    );
}
export default ActionButton;