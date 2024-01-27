import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { InputBox } from '../components/InputBox';
import {Button} from '../components/Button'; 
import {BottomWarning} from '../components/BottomWarning';

export const SignUp = ()=>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"SignUp"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox placeholder='John' label={'First Name'}></InputBox>
                <InputBox placeholder='Doe' label={'Last Name'}></InputBox>
                <InputBox placeholder='johnDoe@gmail.com' label={'Email'}></InputBox>
                <InputBox placeholder='123456' label={'password'}></InputBox>
                <div className='pt-4'>
                    <Button label={"Sign In"}></Button>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign up"} to={"/signin"}></BottomWarning>
            </div>
        </div>
    </div>
}