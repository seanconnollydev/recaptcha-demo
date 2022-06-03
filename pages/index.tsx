import GoogleReCAPTCHA from "react-google-recaptcha";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [token, setToken] = useState("");
  const recaptchaRef = useRef<GoogleReCAPTCHA>(null);

  useEffect(() => {
    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    }
  }, [recaptchaRef]);

  const onReCAPTCHAChange = (val: any) => {
    setToken(val);
  };

  return (
    <div>
      <GoogleReCAPTCHA
        ref={recaptchaRef}
        theme="dark"
        size="invisible"
        type="image"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        onChange={onReCAPTCHAChange}
      />
      {token}
    </div>
  );
};

export default Index;
