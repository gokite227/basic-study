import { authService } from "../firebaseConfig";

const Login = ({navigation}) => {
    const PasswordInput = useRef()
    const [navCheck, setNavCheck] = useState("Login")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [validation, setValidation] = useState("")

    //  이메일입력 후 키보드에 next를 탭하면 password로 포커스를 이동
    const onSubmitEmail = () => {
        PasswordInput.current.focus();
    }

    // 로그인을 진행하는 함수
    const loginEditing = async() => {
        //ActivityIndicator컴포넌트 출력
        setLoading(true)
        // 두번눌리는걸 방지
        if(loading){
            return;
        }
        try{
            if(email !=="" && password !==""){
                // 입력값이 공백이 아니면 로그인
                await authService.signInWithEmailAndPassword(email, password)
            }else{
                // 입력값이 공백이라면 유효성 체크 메시지 출력
                setLoading(false)
                setValidation('칸을 채워주세요')
            }
        }catch(e){
            // 에러 발생시 에러이유를 유효성 체크 메시지로 출력
            setLoading(false)
            switch(e.code){
                case "auth/invalid-email" : {
                    return setValidation("이메일을 입력해주세요")
                }
                case "auth/user-disabled" : {
                    return setValidation('user-disabled')
                }
                case "auth/user-not-found" : {
                    return setValidation('존재하지 않는 이메일 입니다')
                }
                case "auth/wrong-password" : {
                    return setValidation('비밀번호가 일치하지 않습니다')
                }
                case "auth/operation-not-allowed" : {
                    return setValidation('auth/operation-not-allowed \n관리자에게 문의하세요')
                }
            }
        }
    }
    return(
        <Container>
            <Contents>
                    <TextArea 
                        placeholder="이메일" 
                        value={email} 
                        returnKeyType="next"
                        keyboardType = "email-address" 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        onChangeText = {(text) => setEmail(text)} 
                        onSubmitEditing = {onSubmitEmail}
                    />
        
                    <TextArea 
                        ref={PasswordInput}
                        placeholder="비밀번호" 
                        value={password}  
                        returnKeyType="done"
                        secureTextEntry 
                        onChangeText = {(text) => setPassword(text)} 
                        onSubmitEditing = {btnAlloter()}
                    />
    
                    <ValidationShell>
                        <ValidationText style={{color:colors.DARKGRAY}}>{validation}</ValidationText>
                    </ValidationShell>
                        // 로그인 관련 버튼
                    <>
                        <Btn onPress = {loginEditing} style={{backgroundColor : navCheck == "Login" ? "#EC705E" : "lightgray"}}>
                            {loading ? <ActivityIndicator color="white"/> : <BtnText>로그인</BtnText>}
                        </Btn>
                    </>
            </Contents>
    
            {navCheck == "Signup" ? (
                <Empty style={{transform:[{scale:1}]}}>
                    <Welcome />
                </Empty>
            ):(null)}
        </Container>
        )
}

export default Login;