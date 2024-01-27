import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { InputBox } from '../components/InputBox';
import {Button} from '../components/Button'; 
import {BottomWarning} from '../components/BottomWarning';

export const SignIn = ()=>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"SignIn"}></Heading>
                <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
               
                <InputBox placeholder='johnDoe@gmail.com' label={'Email'}></InputBox>
                <InputBox placeholder='123456' label={'password'}></InputBox>
                <div className='pt-4'>
                    <Button label={"Sign up"}></Button>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}></BottomWarning>
            </div>
        </div>
    </div>
}