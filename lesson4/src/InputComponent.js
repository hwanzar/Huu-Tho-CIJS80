
function InputComponent(){
    return(
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center',
            width: '100%',
            height: '20%',
            marginTop: '2%',
        }}>
            <input type = "text" placeholder = "Email đăng nhập" style = {{
                width: '50%',
                height: '100%',
        }} /> 
        </div>
    )
}
export default InputComponent