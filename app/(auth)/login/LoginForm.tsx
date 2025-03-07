import { doSocialLogin } from "@/app/actions";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

const LoginForm = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-gray-300 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-xl font-semibold text-center mb-4">
            Sign In with Google
          </h2>
          <form action={doSocialLogin}>
            <div className="flex justify-center">
              <button
                className="bg-green-500 text-white p-1 rounded-md m-1 text-lg cursor-pointer"
                type="submit"
                name="action"
                value="google"
              >
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
