import googleIcon from "../../../../img/auth/googleIcon.svg"
import { useGoogleLogin,GoogleLogin } from "@react-oauth/google";
import { getInfoForG } from "../../../../api/Auth";
import jwt_decode from "jwt-decode";


import styles from "./google.module.css"

const GoogleAuth = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      getInfoForG(tokenResponse.access_token).then((res) => {
        console.log(res.data);
      });
    },
  });

  return (
    <button className={styles.button}
    onClick={login}
    >
      <img src={googleIcon} alt="гугл" />
      <p>Login with Google</p>
    </button>
  //   <GoogleLogin
  //   onSuccess={(credentialResponse) => {
  //     console.log(credentialResponse)
  //     console.log("---------------------------------------------");
  //     var decoded = jwt_decode(credentialResponse.credential);
  //     console.log(decoded);

  //   }}
  //   onError={(error) => {
  //     console.log("Login Failed", error);
  //   }}
  // />
  );
};



export default  GoogleAuth