/*
import styles from './styles/common.module.css'
import { getAuth, createUserWithEmailAndPassword, SignInMethod, signInWithEmailAndPassword } from "firebase/auth"


import Link from 'next/link'
import { useRouter } from  'next/router'
import { push } from 'firebase/database';

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleClick = () => {
        router.push("../page")
    }

    /* const doAuth = () => {
        const auth  = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('登録完了');
            console.log( user );
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className={styles.card}>
        <h1>新規登録</h1>
        <div>
          <Form>
              <FormGroup>
                <Label>
                  メールアドレス：
                </Label>
                <Input
                  type="email"
                  name="email"
                  style={{ height: 50, fontSize: "1.2rem" }}
                  // onChangeでユーザーが入力した値を取得し、その値をemailに入れる
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  パスワード：
                </Label>
                <Input
                  type="password"
                  name="password"
                  style={{ height: 50, fontSize: "1.2rem" }}
                  // onChangeでユーザーが入力した値を取得し、その値をpasswordに入れる
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button onClick={handleClick}>
                登録
              </Button>
          </Form>
        </div>
      </div>
    )
  }
  */