import Logo from "../ui/logo.svg";
import Image from "next/image";
import LoginForm from "../ui/login/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen dark:bg-slate-900 bg-gray-50">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end shadow-2xl rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36 ">
            <Image src={Logo} alt="Logo" />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
